import fs from 'fs';
import path from 'path';
import os from 'os';
import { prisma } from './prisma';

export interface CertificateRecord {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  issueDate: string; // ISO date string
  status: 'VALID' | 'REVOKED' | 'INVALID';
  issuingInstitution: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type VerificationResultStatus = 'VALID' | 'NOT_FOUND' | 'REVOKED' | 'INVALID';

export interface VerificationResult {
  status: VerificationResultStatus;
  certificateNumber?: string;
  studentName?: string;
  courseName?: string;
  issueDate?: string;
  issuingInstitution?: string;
  message: string;
  verifiedAt: string;
}

function getCertificatesStoragePath(): string {
  const localDataDir = path.join(process.cwd(), 'data');
  try {
    if (!fs.existsSync(localDataDir)) {
      fs.mkdirSync(localDataDir, { recursive: true });
    }
    return path.join(localDataDir, 'certificates.json');
  } catch {
    const tmpDataDir = path.join(os.tmpdir(), 'cambridge_academy');
    if (!fs.existsSync(tmpDataDir)) {
      fs.mkdirSync(tmpDataDir, { recursive: true });
    }
    return path.join(tmpDataDir, 'certificates.json');
  }
}

async function getJsonCertificates(): Promise<CertificateRecord[]> {
  try {
    const filePath = getCertificatesStoragePath();
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('Error reading JSON certificates file:', err);
    return [];
  }
}

async function saveJsonCertificate(cert: CertificateRecord): Promise<boolean> {
  try {
    const filePath = getCertificatesStoragePath();
    const certs = await getJsonCertificates();
    const idx = certs.findIndex(c => c.id === cert.id || c.certificateNumber.toLowerCase() === cert.certificateNumber.toLowerCase());
    if (idx >= 0) {
      certs[idx] = cert;
    } else {
      certs.unshift(cert);
    }
    const tempPath = `${filePath}.tmp_${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(certs, null, 2), 'utf-8');
    fs.renameSync(tempPath, filePath);
    return true;
  } catch (err) {
    console.error('Error writing JSON certificates file:', err);
    return false;
  }
}

/**
 * Public Verification Function.
 * Sanitizes input and looks up certificate record in MySQL via Prisma (or JSON fallback).
 * Never returns 'VALID' unless record exists and status is strictly 'VALID'.
 */
export async function verifyCertificate(rawCertNumber: string): Promise<VerificationResult> {
  const verifiedAt = new Date().toISOString();
  const cleanNumber = (rawCertNumber || '').trim();

  if (!cleanNumber || cleanNumber.length < 3) {
    return {
      status: 'NOT_FOUND',
      message: 'Please provide a valid certificate registration number.',
      verifiedAt,
    };
  }

  let found: CertificateRecord | null = null;

  // 1. Check MySQL via Prisma if DATABASE_URL configured
  if (process.env.DATABASE_URL) {
    try {
      const record = await prisma.certificate.findUnique({
        where: { certificateNumber: cleanNumber },
      });
      if (record) {
        found = {
          id: record.id,
          certificateNumber: record.certificateNumber,
          studentName: record.studentName,
          courseName: record.courseName,
          issueDate: record.issueDate.toISOString(),
          status: record.status as CertificateRecord['status'],
          issuingInstitution: record.issuingInstitution,
          notes: record.notes || undefined,
          createdAt: record.createdAt.toISOString(),
          updatedAt: record.updatedAt.toISOString(),
        };
      }
    } catch (dbErr) {
      console.warn('[Certificate] MySQL lookup failed, falling back to local registry:', dbErr);
    }
  }

  // 2. Check Local Registry fallback
  if (!found) {
    const jsonCerts = await getJsonCertificates();
    const localRecord = jsonCerts.find(
      c => c.certificateNumber.toLowerCase() === cleanNumber.toLowerCase()
    );
    if (localRecord) {
      found = localRecord;
    }
  }

  // 3. Evaluate Status
  if (!found) {
    return {
      status: 'NOT_FOUND',
      certificateNumber: cleanNumber,
      message: 'No institutional record found for this certificate number. Please ensure the exact serial number is entered.',
      verifiedAt,
    };
  }

  if (found.status === 'REVOKED') {
    return {
      status: 'REVOKED',
      certificateNumber: found.certificateNumber,
      courseName: found.courseName,
      issuingInstitution: found.issuingInstitution,
      message: 'This certificate was officially REVOKED by the Academic Registrar and Examination Board.',
      verifiedAt,
    };
  }

  if (found.status === 'INVALID') {
    return {
      status: 'INVALID',
      certificateNumber: found.certificateNumber,
      courseName: found.courseName,
      issuingInstitution: found.issuingInstitution,
      message: 'This certificate number is marked INVALID in institutional records.',
      verifiedAt,
    };
  }

  return {
    status: 'VALID',
    certificateNumber: found.certificateNumber,
    studentName: found.studentName,
    courseName: found.courseName,
    issueDate: found.issueDate,
    issuingInstitution: found.issuingInstitution || 'Cambridge Academy of English',
    message: 'Official Certificate Verified Successfully.',
    verifiedAt,
  };
}

/**
 * Admin: Search and retrieve certificates
 */
export async function getAllCertificates(searchQuery?: string): Promise<CertificateRecord[]> {
  const query = (searchQuery || '').trim().toLowerCase();

  if (process.env.DATABASE_URL) {
    try {
      const records = await prisma.certificate.findMany({
        where: query
          ? {
              OR: [
                { certificateNumber: { contains: query } },
                { studentName: { contains: query } },
                { courseName: { contains: query } },
              ],
            }
          : undefined,
        orderBy: { createdAt: 'desc' },
      });
      return records.map(r => ({
        id: r.id,
        certificateNumber: r.certificateNumber,
        studentName: r.studentName,
        courseName: r.courseName,
        issueDate: r.issueDate.toISOString(),
        status: r.status as CertificateRecord['status'],
        issuingInstitution: r.issuingInstitution,
        notes: r.notes || undefined,
        createdAt: r.createdAt.toISOString(),
        updatedAt: r.updatedAt.toISOString(),
      }));
    } catch (err) {
      console.warn('[Certificate] MySQL search failed, falling back to local registry:', err);
    }
  }

  const jsonCerts = await getJsonCertificates();
  if (!query) return jsonCerts;
  return jsonCerts.filter(
    c =>
      c.certificateNumber.toLowerCase().includes(query) ||
      c.studentName.toLowerCase().includes(query) ||
      c.courseName.toLowerCase().includes(query)
  );
}

/**
 * Admin: Create a new certificate record
 */
export async function createCertificate(data: {
  certificateNumber: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  status?: 'VALID' | 'REVOKED' | 'INVALID';
  notes?: string;
}): Promise<{ success: boolean; certificate?: CertificateRecord; error?: string }> {
  const certNumber = (data.certificateNumber || '').trim();
  const studentName = (data.studentName || '').trim();
  const courseName = (data.courseName || '').trim();
  const issueDateStr = (data.issueDate || '').trim();
  const status = data.status || 'VALID';

  if (!certNumber || certNumber.length < 3) {
    return { success: false, error: 'Certificate number must be at least 3 characters.' };
  }
  if (!studentName || studentName.length < 2) {
    return { success: false, error: 'Student full name is required.' };
  }
  if (!courseName) {
    return { success: false, error: 'Course or programme name is required.' };
  }

  const issueDate = new Date(issueDateStr || Date.now());
  const now = new Date().toISOString();
  const id = `cert_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  const newRecord: CertificateRecord = {
    id,
    certificateNumber: certNumber,
    studentName,
    courseName,
    issueDate: issueDate.toISOString(),
    status,
    issuingInstitution: 'Cambridge Academy of English',
    notes: data.notes || '',
    createdAt: now,
    updatedAt: now,
  };

  // 1. MySQL
  if (process.env.DATABASE_URL) {
    try {
      const created = await prisma.certificate.create({
        data: {
          id,
          certificateNumber: certNumber,
          studentName,
          courseName,
          issueDate,
          status,
          issuingInstitution: 'Cambridge Academy of English',
          notes: data.notes || null,
        },
      });
      newRecord.id = created.id;
    } catch (err: unknown) {
      console.error('[Certificate] MySQL create error:', err);
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes('Unique constraint') || msg.includes('Duplicate entry')) {
        return { success: false, error: `Certificate number '${certNumber}' already exists.` };
      }
    }
  }

  // 2. Mirror to local registry
  await saveJsonCertificate(newRecord);

  return { success: true, certificate: newRecord };
}

/**
 * Admin: Update certificate status or details
 */
export async function updateCertificate(
  id: string,
  updates: {
    studentName?: string;
    courseName?: string;
    issueDate?: string;
    status?: 'VALID' | 'REVOKED' | 'INVALID';
    notes?: string;
  }
): Promise<boolean> {
  let updatedInDb = false;

  if (process.env.DATABASE_URL) {
    try {
      await prisma.certificate.update({
        where: { id },
        data: {
          ...(updates.studentName ? { studentName: updates.studentName.trim() } : {}),
          ...(updates.courseName ? { courseName: updates.courseName.trim() } : {}),
          ...(updates.issueDate ? { issueDate: new Date(updates.issueDate) } : {}),
          ...(updates.status ? { status: updates.status } : {}),
          ...(typeof updates.notes === 'string' ? { notes: updates.notes } : {}),
        },
      });
      updatedInDb = true;
    } catch (err) {
      console.warn('[Certificate] MySQL update error:', err);
    }
  }

  const certs = await getJsonCertificates();
  const idx = certs.findIndex(c => c.id === id);
  if (idx !== -1) {
    if (updates.studentName) certs[idx].studentName = updates.studentName.trim();
    if (updates.courseName) certs[idx].courseName = updates.courseName.trim();
    if (updates.issueDate) certs[idx].issueDate = new Date(updates.issueDate).toISOString();
    if (updates.status) certs[idx].status = updates.status;
    if (typeof updates.notes === 'string') certs[idx].notes = updates.notes;
    certs[idx].updatedAt = new Date().toISOString();

    const filePath = getCertificatesStoragePath();
    const tempPath = `${filePath}.tmp_${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(certs, null, 2), 'utf-8');
    fs.renameSync(tempPath, filePath);
    return true;
  }

  return updatedInDb;
}

