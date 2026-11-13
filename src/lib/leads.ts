import fs from 'fs';
import path from 'path';
import os from 'os';
import { prisma } from './prisma';
import { sendAdmissionsNotification } from './emailService';

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  course: string;
  learningMode?: 'Online' | 'Offline' | 'Flexible' | string;
  preferredTime?: string;
  message?: string;
  type: 'enquiry' | 'callback' | 'counselling';
  pageUrl?: string;
  leadSource?: string;
  status: 'New' | 'Contacted' | 'Follow-up' | 'Converted';
  notes?: string;
  createdAt: string;
  ipAddress?: string;
}

// Local fallback storage path for serverless/development and data safety mirroring
function getStoragePath(): string {
  const customDir = process.env.LEADS_STORAGE_DIR;
  if (customDir) {
    if (!fs.existsSync(customDir)) {
      try {
        fs.mkdirSync(customDir, { recursive: true });
      } catch {
        // Fall back
      }
    }
    return path.join(customDir, 'leads.json');
  }

  const localDataDir = path.join(process.cwd(), 'data');
  try {
    if (!fs.existsSync(localDataDir)) {
      fs.mkdirSync(localDataDir, { recursive: true });
    }
    return path.join(localDataDir, 'leads.json');
  } catch {
    const tmpDataDir = path.join(os.tmpdir(), 'cambridge_academy');
    if (!fs.existsSync(tmpDataDir)) {
      fs.mkdirSync(tmpDataDir, { recursive: true });
    }
    return path.join(tmpDataDir, 'leads.json');
  }
}

/**
 * Reads leads from local JSON file (used as fallback or for migration)
 */
async function getJsonLeads(): Promise<Lead[]> {
  try {
    const filePath = getStoragePath();
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    if (Array.isArray(data)) {
      return data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return [];
  } catch (err) {
    console.error('Error reading JSON leads storage:', err);
    return [];
  }
}

/**
 * Saves a lead to local JSON storage (used as persistent mirror/fallback)
 */
async function saveJsonLead(newLead: Lead): Promise<boolean> {
  try {
    const filePath = getStoragePath();
    const leads = await getJsonLeads();
    // Prevent duplicate entries by ID
    const existingIdx = leads.findIndex(l => l.id === newLead.id);
    if (existingIdx >= 0) {
      leads[existingIdx] = newLead;
    } else {
      leads.unshift(newLead);
    }
    const tempPath = `${filePath}.tmp_${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(leads, null, 2), 'utf-8');
    fs.renameSync(tempPath, filePath);
    return true;
  } catch (err) {
    console.warn('[Leads] Local JSON mirror write failed:', err);
    return false;
  }
}

/**
 * Retrieves all leads.
 * Uses MySQL via Prisma if DATABASE_URL is configured, with seamless JSON fallback.
 */
export async function getAllLeads(): Promise<Lead[]> {
  if (process.env.DATABASE_URL) {
    try {
      const records = await prisma.lead.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return records.map(r => ({
        id: r.id,
        name: r.name,
        phone: r.phone,
        email: r.email || undefined,
        course: r.course,
        learningMode: r.learningMode || 'Offline',
        preferredTime: r.preferredTime || 'Anytime',
        message: r.message || undefined,
        type: (r.type as Lead['type']) || 'enquiry',
        pageUrl: r.pageUrl || undefined,
        leadSource: r.leadSource || 'Website',
        status: (r.status as Lead['status']) || 'New',
        notes: r.notes || undefined,
        createdAt: r.createdAt.toISOString(),
      }));
    } catch (dbErr) {
      console.warn('[Leads] MySQL fetch failed, falling back to local storage:', dbErr);
    }
  } else {
    console.info('[Leads] Notice: DATABASE_URL not set. Operating in temporary local JSON fallback mode.');
  }

  return getJsonLeads();
}

/**
 * Saves an enquiry to MySQL via Prisma.
 * Mirrors to local JSON storage for high availability.
 * Dispatches email notifications safely without blocking or risking lead loss.
 */
export async function saveLead(data: {
  name: string;
  phone: string;
  email?: string;
  course: string;
  learningMode?: string;
  preferredTime?: string;
  message?: string;
  type?: 'enquiry' | 'callback' | 'counselling';
  pageUrl?: string;
  leadSource?: string;
  honeypot?: string;
}): Promise<{ success: boolean; leadId?: string; error?: string }> {
  // Spam Honeypot check
  if (data.honeypot && data.honeypot.trim() !== '') {
    return { success: true, leadId: 'filtered' };
  }

  // Server-side validation
  if (!data.name || data.name.trim().length < 2) {
    return { success: false, error: 'Please enter a valid full name (minimum 2 characters).' };
  }
  const cleanPhone = (data.phone || '').replace(/[^0-9+]/g, '');
  if (!cleanPhone || cleanPhone.length < 7) {
    return { success: false, error: 'Please provide a valid phone number with minimum 7 digits.' };
  }

  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const cleanName = data.name.trim();
  const cleanEmail = (data.email || '').trim().toLowerCase() || undefined;
  const cleanCourse = data.course || 'General Enquiry';
  const cleanMode = data.learningMode || 'Offline';
  const cleanTime = data.preferredTime || 'Anytime';
  const cleanMessage = (data.message || '').trim() || undefined;
  const cleanType = data.type || 'enquiry';
  const cleanPageUrl = data.pageUrl || '';
  const cleanSource = data.leadSource || 'Website Form';
  const nowIso = new Date().toISOString();

  const newLead: Lead = {
    id: leadId,
    name: cleanName,
    phone: cleanPhone,
    email: cleanEmail,
    course: cleanCourse,
    learningMode: cleanMode,
    preferredTime: cleanTime,
    message: cleanMessage,
    type: cleanType,
    pageUrl: cleanPageUrl,
    leadSource: cleanSource,
    status: 'New',
    notes: '',
    createdAt: nowIso,
  };

  let savedToDb = false;

  // 1. Primary Storage: MySQL via Prisma (if DATABASE_URL configured)
  if (process.env.DATABASE_URL) {
    try {
      await prisma.lead.create({
        data: {
          id: leadId,
          name: cleanName,
          email: cleanEmail || null,
          phone: cleanPhone,
          course: cleanCourse,
          learningMode: cleanMode,
          preferredTime: cleanTime,
          message: cleanMessage || null,
          type: cleanType,
          status: 'New',
          pageUrl: cleanPageUrl || null,
          leadSource: cleanSource,
          notes: null,
          createdAt: new Date(nowIso),
        },
      });
      savedToDb = true;
    } catch (dbErr) {
      console.error('[Leads] MySQL persistence error:', dbErr);
      // Fall through to JSON backup so the lead is NOT lost
    }
  }

  // 2. High-Availability Mirror / Fallback: Local JSON Storage
  const savedToJson = await saveJsonLead(newLead);

  if (!savedToDb && !savedToJson) {
    return { success: false, error: 'Failed to record lead. Please try again or WhatsApp us directly.' };
  }

  // 3. Dispatch Email Notifications (Isolated in try/catch; SMTP failure never fails lead creation)
  try {
    await notifyAdmissionsTeam(newLead);
  } catch (notifErr) {
    console.error('[Leads] Notification dispatch error (lead preserved):', notifErr);
  }

  return { success: true, leadId: newLead.id };
}

/**
 * Updates an existing lead status or notes in MySQL (and mirrors to JSON).
 */
export async function updateLead(id: string, updates: {
  status?: 'New' | 'Contacted' | 'Follow-up' | 'Converted';
  notes?: string;
}): Promise<boolean> {
  let updatedInDb = false;

  if (process.env.DATABASE_URL) {
    try {
      await prisma.lead.update({
        where: { id },
        data: {
          ...(updates.status ? { status: updates.status } : {}),
          ...(typeof updates.notes === 'string' ? { notes: updates.notes } : {}),
        },
      });
      updatedInDb = true;
    } catch (dbErr) {
      console.warn('[Leads] MySQL lead update failed, falling back to local storage:', dbErr);
    }
  }

  // Mirror update to local storage
  try {
    const filePath = getStoragePath();
    const leads = await getJsonLeads();
    const idx = leads.findIndex(l => l.id === id);
    if (idx !== -1) {
      if (updates.status) leads[idx].status = updates.status;
      if (typeof updates.notes === 'string') leads[idx].notes = updates.notes;
      const tempPath = `${filePath}.tmp_${Date.now()}`;
      fs.writeFileSync(tempPath, JSON.stringify(leads, null, 2), 'utf-8');
      fs.renameSync(tempPath, filePath);
      return true;
    }
  } catch (err) {
    console.error('[Leads] Local JSON lead update failed:', err);
  }

  return updatedInDb;
}

/**
 * Migrates existing valid leads from data/leads.json into MySQL without duplicates.
 */
export async function migrateJsonLeadsToMySql(): Promise<{
  totalRead: number;
  migrated: number;
  alreadyExisted: number;
  failed: number;
}> {
  if (!process.env.DATABASE_URL) {
    throw new Error('Cannot migrate leads: DATABASE_URL environment variable is not configured.');
  }

  const jsonLeads = await getJsonLeads();
  let migrated = 0;
  let alreadyExisted = 0;
  let failed = 0;

  for (const lead of jsonLeads) {
    try {
      const existing = await prisma.lead.findUnique({
        where: { id: lead.id },
      });
      if (existing) {
        alreadyExisted++;
        continue;
      }

      await prisma.lead.create({
        data: {
          id: lead.id,
          name: lead.name,
          email: lead.email || null,
          phone: lead.phone,
          course: lead.course,
          learningMode: lead.learningMode || 'Offline',
          preferredTime: lead.preferredTime || 'Anytime',
          message: lead.message || null,
          type: lead.type || 'enquiry',
          status: lead.status || 'New',
          pageUrl: lead.pageUrl || null,
          leadSource: lead.leadSource || 'Website Migration',
          notes: lead.notes || null,
          createdAt: new Date(lead.createdAt || Date.now()),
        },
      });
      migrated++;
    } catch (err) {
      console.error(`[Migration] Failed to migrate lead ${lead.id}:`, err);
      failed++;
    }
  }

  return {
    totalRead: jsonLeads.length,
    migrated,
    alreadyExisted,
    failed,
  };
}

async function notifyAdmissionsTeam(lead: Lead) {
  // 1. Dispatch SMTP Email Notification to Admissions Team via Nodemailer
  try {
    const emailResult = await sendAdmissionsNotification({
      name: lead.name,
      phone: lead.phone,
      email: lead.email,
      course: lead.course,
      learningMode: lead.learningMode,
      preferredTime: lead.preferredTime,
      message: lead.message,
      type: lead.type,
      pageUrl: lead.pageUrl,
      createdAt: lead.createdAt,
    });
    if (emailResult.skipped) {
      console.warn(`[AdmissionsDesk] Email not sent – SMTP credentials missing for lead: ${lead.id} (${lead.name})`);
    } else if (!emailResult.success) {
      console.error(`[AdmissionsDesk] Email delivery failed for lead ${lead.id}:`, emailResult.error);
    }
  } catch (emailErr) {
    console.error('Error dispatching admissions email notification:', emailErr);
  }

  // 2. Optional Webhook dispatch (if configured by client)
  const webhookUrl = process.env.LEAD_NOTIFICATION_WEBHOOK;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🎓 New Lead at Cambridge Academy: ${lead.name} (${lead.phone}) for ${lead.course} [${lead.type}]`,
          lead,
        }),
      });
    } catch (e) {
      console.warn('Webhook notification dispatch failed:', e);
    }
  }
}
