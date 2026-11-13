import fs from 'fs';
import path from 'path';
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

/**
 * Retrieves all leads from the permanent MySQL database via Prisma.
 * If DATABASE_URL is not configured, logs a clear diagnostic error and returns an empty list.
 */
export async function getAllLeads(): Promise<Lead[]> {
  if (!process.env.DATABASE_URL) {
    console.warn('[Leads] Notice: DATABASE_URL is not configured. MySQL database required for permanent lead retrieval.');
    return [];
  }

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
    console.error('[Leads] MySQL lead retrieval failed:', dbErr);
    throw new Error('Database service error: unable to retrieve leads.');
  }
}

/**
 * Saves a new website enquiry permanently into MySQL via Prisma.
 * 
 * Rules:
 * 1. Strict MySQL persistence: rejects JSON fallback so that leads are never lost on ephemeral serverless instances.
 * 2. Duplicate suppression: duplicate submissions for the same phone & course within 2 minutes are throttled safely.
 * 3. Decoupled email alert: email notification errors never fail or lose a successfully persisted lead.
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
  // 1. Spam Honeypot check
  if (data.honeypot && data.honeypot.trim() !== '') {
    return { success: true, leadId: 'filtered' };
  }

  // 2. Server-side validation
  if (!data.name || data.name.trim().length < 2) {
    return { success: false, error: 'Please enter a valid full name (minimum 2 characters).' };
  }
  if (data.name.trim().length > 100) {
    return { success: false, error: 'Full name exceeds maximum allowed length (100 characters).' };
  }

  const cleanPhone = (data.phone || '').replace(/[^0-9+]/g, '');
  if (!cleanPhone || cleanPhone.length < 7) {
    return { success: false, error: 'Please provide a valid phone number with minimum 7 digits.' };
  }
  if (cleanPhone.length > 20) {
    return { success: false, error: 'Phone number exceeds maximum allowed length.' };
  }

  const cleanName = data.name.trim();
  const cleanEmail = (data.email || '').trim().toLowerCase() || undefined;
  if (cleanEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  const cleanCourse = data.course || 'General Enquiry';
  const cleanMode = data.learningMode || 'Offline';
  const cleanTime = data.preferredTime || 'Anytime';
  const cleanMessage = (data.message || '').trim() || undefined;
  const cleanType = data.type || 'enquiry';
  const cleanPageUrl = data.pageUrl || '';
  const cleanSource = data.leadSource || 'Website Form';
  const nowIso = new Date().toISOString();

  // 3. Ensure DATABASE_URL is configured
  if (!process.env.DATABASE_URL) {
    console.error('[Leads] Fatal: DATABASE_URL is not configured. Rejecting submission to prevent unpersistent fallback data loss.');
    return {
      success: false,
      error: 'Database service is currently unavailable. Please contact admissions on WhatsApp directly at +918970506004.',
    };
  }

  // 4. Duplicate lead throttle check (same phone + same course within 2 minutes)
  try {
    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
    const existingRecent = await prisma.lead.findFirst({
      where: {
        phone: cleanPhone,
        course: cleanCourse,
        createdAt: { gte: twoMinutesAgo },
      },
    });

    if (existingRecent) {
      console.info(`[Leads] Duplicate submission suppressed for phone ${cleanPhone} (${cleanCourse}). Returning existing lead.`);
      return { success: true, leadId: existingRecent.id };
    }
  } catch (checkErr) {
    console.warn('[Leads] Duplicate check query error (proceeding with insert):', checkErr);
  }

  // 5. Permanent Storage: MySQL via Prisma
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

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
  } catch (dbErr: unknown) {
    const errorMsg = dbErr instanceof Error ? dbErr.message : String(dbErr);
    console.error('[Leads] MySQL persistence error:', errorMsg);
    return {
      success: false,
      error: 'Unable to record enquiry to the database. Please contact admissions on WhatsApp directly at +918970506004.',
    };
  }

  // 6. Dispatch Email Notifications (Isolated in try/catch; SMTP failure never fails lead creation)
  try {
    await notifyAdmissionsTeam(newLead);
  } catch (notifErr) {
    console.error('[Leads] Notification dispatch error (lead preserved in MySQL):', notifErr);
  }

  return { success: true, leadId: newLead.id };
}

/**
 * Updates an existing lead status or notes in MySQL via Prisma.
 */
export async function updateLead(id: string, updates: {
  status?: 'New' | 'Contacted' | 'Follow-up' | 'Converted';
  notes?: string;
}): Promise<boolean> {
  if (!process.env.DATABASE_URL) {
    console.warn('[Leads] Cannot update lead: DATABASE_URL not configured.');
    return false;
  }

  try {
    await prisma.lead.update({
      where: { id },
      data: {
        ...(updates.status ? { status: updates.status } : {}),
        ...(typeof updates.notes === 'string' ? { notes: updates.notes } : {}),
      },
    });
    return true;
  } catch (dbErr) {
    console.error('[Leads] MySQL lead update failed:', dbErr);
    return false;
  }
}

/**
 * Migrates existing valid leads from data/leads.json into MySQL without duplicates.
 * Preserves the source JSON file and creates a safe timestamped backup.
 */
export async function migrateJsonLeadsToMySql(): Promise<{
  totalRead: number;
  migrated: number;
  alreadyExisted: number;
  failed: number;
  backupPath?: string;
}> {
  if (!process.env.DATABASE_URL) {
    throw new Error('Cannot migrate leads: DATABASE_URL environment variable is not configured.');
  }

  const localDataDir = path.join(process.cwd(), 'data');
  const filePath = path.join(localDataDir, 'leads.json');

  if (!fs.existsSync(filePath)) {
    return { totalRead: 0, migrated: 0, alreadyExisted: 0, failed: 0 };
  }

  // 1. Create a safe backup copy
  const backupPath = path.join(localDataDir, `leads.json.bak.${Date.now()}`);
  fs.copyFileSync(filePath, backupPath);

  // 2. Read JSON leads
  const raw = fs.readFileSync(filePath, 'utf-8');
  let jsonLeads: Lead[] = [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      jsonLeads = parsed;
    }
  } catch (parseErr) {
    throw new Error(`Failed to parse ${filePath}: ${parseErr}`);
  }

  let migrated = 0;
  let alreadyExisted = 0;
  let failed = 0;

  for (const lead of jsonLeads) {
    try {
      // Check existing by id
      const existingById = await prisma.lead.findUnique({
        where: { id: lead.id },
      });
      if (existingById) {
        alreadyExisted++;
        continue;
      }

      // Check existing by matching phone + course + createdAt timestamp
      const existingMatch = await prisma.lead.findFirst({
        where: {
          phone: lead.phone,
          course: lead.course,
          createdAt: new Date(lead.createdAt || Date.now()),
        },
      });
      if (existingMatch) {
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
    backupPath,
  };
}

async function notifyAdmissionsTeam(lead: Lead) {
  // 1. Dispatch SMTP Email Notification to Admissions Team via Nodemailer
  try {
    const emailResult = await sendAdmissionsNotification({
      leadId: lead.id,
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
