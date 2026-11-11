// Google Analytics 4 & Conversion Tracking

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Generic custom conversion events
export const trackEvent = (
  eventName: string,
  params: Record<string, string | number | boolean | undefined> = {}
) => {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', eventName, params);
    } else if (window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  }
};

// Specific Conversion Events
export const trackFormSubmission = (course: string, formType: string) => {
  trackEvent('form_submission', {
    course_name: course,
    form_type: formType,
    category: 'Lead Generation',
  });
};

export const trackPhoneCall = (phoneNumber: string) => {
  trackEvent('phone_call_click', {
    phone_number: phoneNumber,
    category: 'Contact',
  });
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    click_source: source,
    category: 'Engagement',
  });
};

export const trackCounsellingBooking = (course: string) => {
  trackEvent('counselling_booking', {
    course_name: course,
    category: 'Conversion',
  });
};

