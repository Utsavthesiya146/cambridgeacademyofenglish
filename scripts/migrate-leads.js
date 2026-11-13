#!/usr/bin/env node
/**
 * Safe, Repeatable Lead Migration Utility
 * Migrates legacy leads from data/leads.json into production MySQL via Prisma.
 *
 * Rules:
 * 1. Checks DATABASE_URL before running.
 * 2. Creates a backup copy before any operations: data/leads.json.bak.<timestamp>
 * 3. Does NOT delete source data/leads.json.
 * 4. Deduplicates by ID and (phone + course + createdAt).
 */

const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

async function runMigration() {
  console.log('=== CAMBRIDGE ACADEMY OF ENGLISH – LEAD MIGRATION UTILITY ===\n');

  if (!process.env.DATABASE_URL) {
    console.error('ERROR: DATABASE_URL environment variable is not configured.');
    console.error('Usage: DATABASE_URL="mysql://USER:PASS@HOST:PORT/DB" node scripts/migrate-leads.js\n');
    process.exit(1);
  }

  const jsonPath = path.join(process.cwd(), 'data', 'leads.json');
  if (!fs.existsSync(jsonPath)) {
    console.log(`Notice: No source JSON file found at ${jsonPath}. Nothing to migrate.`);
    process.exit(0);
  }

  // 1. Create a safe backup
  const backupPath = path.join(process.cwd(), 'data', `leads.json.bak.${Date.now()}`);
  fs.copyFileSync(jsonPath, backupPath);
  console.log(`[Backup] Created backup of source JSON at:\n  ${backupPath}\n`);

  // 2. Read and parse JSON leads
  let leads = [];
  try {
    const raw = fs.readFileSync(jsonPath, 'utf-8');
    leads = JSON.parse(raw);
    if (!Array.isArray(leads)) {
      throw new Error('Expected JSON content to be an array of leads.');
    }
  } catch (err) {
    console.error('ERROR: Failed to read or parse source JSON:', err.message);
    process.exit(1);
  }

  console.log(`[Source] Found ${leads.length} lead(s) in source JSON file.`);

  // 3. Connect to Prisma
  const prisma = new PrismaClient();
  let migrated = 0;
  let alreadyExisted = 0;
  let failed = 0;

  try {
    for (const lead of leads) {
      if (!lead.id || !lead.name || !lead.phone || !lead.course) {
        console.warn(`[Skip] Incomplete lead record: ${JSON.stringify(lead)}`);
        failed++;
        continue;
      }

      // Check existence by ID
      const existingById = await prisma.lead.findUnique({
        where: { id: lead.id },
      });
      if (existingById) {
        alreadyExisted++;
        continue;
      }

      // Check existence by phone + course + createdAt
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
    }

    console.log('\n=== MIGRATION SUMMARY ===');
    console.log(`Total Leads Read:     ${leads.length}`);
    console.log(`Successfully Migrated:${migrated}`);
    console.log(`Already In Database:  ${alreadyExisted}`);
    console.log(`Failed / Incomplete:  ${failed}`);
    console.log(`Source File Preserved:${jsonPath}`);
    console.log(`Backup Location:      ${backupPath}`);
    console.log('=========================\n');
  } catch (err) {
    console.error('Migration failed with database error:', err.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

runMigration().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
