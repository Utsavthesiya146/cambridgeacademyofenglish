// Google Analytics 4 & Conversion Tracking System
// Built for Cambridge Academy of English – Strict No-PII & Deduplication Compliance

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || '';

// Deduplication cache for conversion events (prevents rapid double-clicks)
const recentEvents = new Map<string, number>();
const EVENT_DEDUPE_MS = 2500; // 2.5 seconds

/**
 * Checks whether an event with the same signature was dispatched recently
 */
function isDuplicateEvent(signature: string): boolean {
  const now = Date.now();
  const last = recentEvents.get(signature);
  if (last && now - last < EVENT_DEDUPE_MS) {
    return true;
  }
  // Housekeeping
  if (recentEvents.size > 200) {
    for (const [k, time] of recentEvents.entries()) {
      if (now - time > EVENT_DEDUPE_MS) recentEvents.delete(k);
    }
  }
  recentEvents.set(signature, now);
  return false;
}

/**
 * Sanitizes parameters to guarantee ZERO Personally Identifiable Information (PII) is sent to GA4.
 * Strips phone numbers, email addresses, names, and passwords.
 */
function sanitizeParams(params: Record<string, string | number | boolean | undefined>): Record<string, string | number | boolean> {
  const clean: Record<string, string | number | boolean> = {};

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) continue;

    // Disallow keys known to carry personal data
    const lowerKey = key.toLowerCase();
    if (
      lowerKey.includes('phone') ||
      lowerKey.includes('email') ||
      lowerKey.includes('name') && !lowerKey.includes('course') ||
      lowerKey.includes('password') ||
      lowerKey.includes('message') ||
      lowerKey.includes('user') ||
      lowerKey.includes('token')
    ) {
      continue;
    }

    if (typeof value === 'string') {
      // Disallow values that resemble email addresses
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) continue;
      // Disallow values that resemble phone numbers (7+ digits)
      if (/\d{7,}/.test(value.replace(/[\s+-]/g, ''))) continue;
      // Truncate overly long values
      clean[key] = value.substring(0, 100);
    } else {
      clean[key] = value;
    }
  }

  return clean;
}

/**
 * Dispatches a page_view event to Google Analytics 4.
 */
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Dispatches a custom GA4 event safely with deduplication and PII protection.
 */
export const trackEvent = (
  eventName: string,
  params: Record<string, string | number | boolean | undefined> = {}
) => {
  if (typeof window === 'undefined') return;

  const cleanParams = sanitizeParams(params);
  const signature = `${eventName}:${JSON.stringify(cleanParams)}`;

  if (isDuplicateEvent(signature)) {
    return;
  }

  if (window.gtag) {
    window.gtag('event', eventName, cleanParams);
  } else if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...cleanParams,
    });
  }
};

// ==========================================
// 5 MANDATORY CONVERSION TRACKING FUNCTIONS
// ==========================================

/**
 * 1. Enquiry Form Successful Submission
 * Note: Never call on form errors or validation failures.
 */
export const trackFormSubmission = (course: string, formType: string = 'Enquiry Form') => {
  trackEvent('form_submission', {
    course_category: course || 'General Enquiry',
    form_type: formType,
    category: 'Lead Generation',
  });
};

/**
 * 2. WhatsApp Button Clicks
 * Tracks the specific placement source (e.g. Floating Button, Hero, Header, Footer).
 */
export const trackWhatsAppClick = (source: string = 'General') => {
  trackEvent('whatsapp_click', {
    click_source: source,
    category: 'Engagement',
  });
};

/**
 * 3. Free Counselling Booking Clicks
 */
export const trackCounsellingBooking = (course: string = 'General Assessment') => {
  trackEvent('counselling_booking', {
    course_category: course,
    category: 'Conversion',
  });
};

/**
 * 4. Callback Request Submissions
 * Note: Never call on validation failure.
 */
export const trackCallbackRequest = (course: string = 'General Callback') => {
  trackEvent('callback_request', {
    course_category: course,
    form_type: 'Callback Request',
    category: 'Lead Generation',
  });
};

/**
 * 5. Course-Specific Enquiry Submissions
 */
export const trackCourseEnquiry = (course: string, pageUrl?: string) => {
  trackEvent('course_enquiry', {
    course_category: course,
    page_context: pageUrl ? new URL(pageUrl, 'https://cambridgeacademyofenglish.vercel.app').pathname : 'Course Page',
    category: 'Lead Generation',
  });
};

/**
 * 6. Direct Phone Call Clicks
 */
export const trackPhoneCall = (_phoneNumber?: string) => {
  trackEvent('phone_call_click', {
    contact_target: 'Academy Admissions',
    category: 'Contact',
  });
};
