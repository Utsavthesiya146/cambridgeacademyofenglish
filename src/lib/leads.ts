import fs from 'fs';
import path from 'path';
import os from 'os';
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

// In serverless/Vercel environments, writes outside /tmp may be restricted,
// so we intelligently fallback to os.tmpdir() if project data dir is not writable.
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

export async function getAllLeads(): Promise<Lead[]> {
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
    console.error('Error reading leads storage:', err);
    return [];
  }
}

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
  // Spam Honeypot check: If the hidden honeypot field is filled, silently discard or mark as spam
  if (data.honeypot && data.honeypot.trim() !== '') {
    return { success: true, leadId: 'filtered' };
  }

  // Basic Validation
  if (!data.name || data.name.trim().length < 2) {
    return { success: false, error: 'Please enter a valid full name (minimum 2 characters).' };
  }
  const cleanPhone = (data.phone || '').replace(/[^0-9+]/g, '');
  if (!cleanPhone || cleanPhone.length < 7) {
    return { success: false, error: 'Please provide a valid phone number with minimum 7 digits.' };
  }

  const newLead: Lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    name: data.name.trim(),
    phone: cleanPhone,
    email: (data.email || '').trim().toLowerCase(),
    course: data.course || 'General Enquiry',
    learningMode: data.learningMode || 'Not Specified',
    preferredTime: data.preferredTime || 'Anytime',
    message: (data.message || '').trim(),
    type: data.type || 'enquiry',
    pageUrl: data.pageUrl || '',
    leadSource: data.leadSource || 'Website Form',
    status: 'New',
    notes: '',
    createdAt: new Date().toISOString(),
  };

  try {
    const filePath = getStoragePath();
    const leads = await getAllLeads();
    leads.unshift(newLead);
    
    // Write atomically
    const tempPath = `${filePath}.tmp_${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(leads, null, 2), 'utf-8');
    fs.renameSync(tempPath, filePath);

    // Optional Notification Trigger
    await notifyAdmissionsTeam(newLead);

    return { success: true, leadId: newLead.id };
  } catch (err: unknown) {
    console.error('Error saving lead to storage:', err);
    return { success: false, error: 'Failed to record lead. Please try again or WhatsApp us directly.' };
  }
}

export async function updateLead(id: string, updates: {
  status?: 'New' | 'Contacted' | 'Follow-up' | 'Converted';
  notes?: string;
}): Promise<boolean> {
  try {
    const filePath = getStoragePath();
    const leads = await getAllLeads();
    const idx = leads.findIndex(l => l.id === id);
    if (idx === -1) return false;

    if (updates.status) leads[idx].status = updates.status;
    if (typeof updates.notes === 'string') leads[idx].notes = updates.notes;

    const tempPath = `${filePath}.tmp_${Date.now()}`;
    fs.writeFileSync(tempPath, JSON.stringify(leads, null, 2), 'utf-8');
    fs.renameSync(tempPath, filePath);
    return true;
  } catch (err) {
    console.error('Error updating lead status:', err);
    return false;
  }
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

