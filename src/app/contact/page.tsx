'use client';

import EnquiryForm from '@/components/EnquiryForm';
import CallbackForm from '@/components/CallbackForm';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO HEADER */}
      <section className="bg-[#0a192f] pt-32 pb-20 text-center relative overflow-hidden text-white">
        <div className="container-custom relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            <span>📍</span> Kammanahalli Campus, Bangalore
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
            Contact Cambridge Academy of English
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Visit our Bangalore campus, call our admissions helpline, or request a callback from our senior academic counsellors.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORMS GRID */}
      <section className="container-custom py-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Campus Information & Instant Callback (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <h2 className="text-2xl font-extrabold text-[#0a192f]">
                Campus &amp; Helpline
              </h2>
              <div className="w-12 h-1 bg-[#d4af37] rounded-full"></div>

              <div className="space-y-6 text-sm text-slate-700">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 text-[#0a192f] flex items-center justify-center text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a192f] text-sm uppercase tracking-wider mb-1">
                      Campus Address
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      No 87, 2nd Floor, Nehru Road,<br />
                      Kammanahalli, Bangalore, Karnataka - 560084, India
                    </p>
                    <a
                      href="https://maps.google.com/?q=Cambridge+Academy+of+English+Kammanahalli+Bangalore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs font-bold text-[#d4af37] hover:underline"
                    >
                      Open in Google Maps &amp; Get Directions →
                    </a>
                  </div>
                </div>

                {/* Telephones */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a192f] text-sm uppercase tracking-wider mb-1">
                      Official Phone Numbers
                    </h3>
                    <div className="text-xs text-slate-600 space-y-1">
                      <p>
                        Landline:{' '}
                        <a href="tel:08040943580" className="font-bold text-slate-800 hover:text-[#0a192f]">
                          080-40943580
                        </a>
                      </p>
                      <p>
                        Admissions Mobile:{' '}
                        <a href="tel:8970506004" className="font-bold text-slate-800 hover:text-[#0a192f]">
                          8970506004
                        </a>
                      </p>
                      <p>
                        Helpline:{' '}
                        <a href="tel:9620806004" className="font-bold text-slate-800 hover:text-[#0a192f]">
                          9620806004
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a192f] text-sm uppercase tracking-wider mb-1">
                      WhatsApp Admissions
                    </h3>
                    <p className="text-xs text-slate-600 mb-1">
                      Fast-track your enquiry with instant batch dates &amp; syllabus brochures.
                    </p>
                    <a
                      href="https://wa.me/918970506004?text=Hello%20Cambridge%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20course%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:underline"
                    >
                      Chat on WhatsApp (+91 8970506004) →
                    </a>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a192f] text-sm uppercase tracking-wider mb-1">
                      Official Email
                    </h3>
                    <p className="text-xs text-slate-600">
                      <a href="mailto:info@cambridgeacademyofenglish.com" className="hover:text-[#0a192f]">
                        info@cambridgeacademyofenglish.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center text-xl flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a192f] text-sm uppercase tracking-wider mb-1">
                      Business Hours
                    </h3>
                    <p className="text-xs text-slate-600">
                      Monday to Saturday: <strong>9:00 AM – 9:00 PM</strong><br />
                      Sunday: <strong>By Appointment</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Callback Widget */}
            <CallbackForm initialCourse="General Enquiry / Campus Visit" />
          </div>

          {/* Right Column: Full Interactive Lead Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <EnquiryForm
              initialCourse="Spoken English Offline (Classroom)"
              source="Contact Page"
              compact={false}
            />

            {/* Embedded Responsive Google Maps */}
            <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold text-[#0a192f] uppercase tracking-wider">
                  Live Campus Location Map
                </span>
                <span className="text-[11px] text-slate-500">Kammanahalli, Bangalore</span>
              </div>
              <div className="rounded-2xl overflow-hidden h-80 w-full border border-slate-100">
                <iframe
                  title="Cambridge Academy of English Bangalore Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.262534015509!2d77.6356!3d13.0125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1726a2e99447%3A0xb30ff134a66e6328!2sCambridge%20Academy%20of%20English!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
