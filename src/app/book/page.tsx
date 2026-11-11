import type { Metadata } from 'next';
import EnquiryForm from '@/components/EnquiryForm';
import CallbackForm from '@/components/CallbackForm';

export const metadata: Metadata = {
  title: 'Book Your Course | Cambridge Academy of English Bangalore',
  description:
    'Reserve your batch seat for Spoken English, IELTS, PTE, OET, Foreign Languages, or Teacher Training at Cambridge Academy of English.',
  alternates: {
    canonical: 'https://cambridgeacademyofenglish.vercel.app/book',
  },
};

export default function BookCoursePage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-[#0a192f] pt-32 pb-20 text-center relative overflow-hidden text-white">
        <div className="container-custom relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <span>★</span> Batch Reservations 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
            Book Your Course &amp; Reserve Your Batch
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Reserve your seat in upcoming weekday or weekend batches. Free level assessment and counselling included.
          </p>
        </div>
      </section>

      {/* Booking Form Grid */}
      <section className="container-custom -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <EnquiryForm
              initialCourse="Spoken English Offline (Classroom)"
              source="Course Booking Page"
              compact={false}
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <CallbackForm initialCourse="Batch Reservation Enquiry" />

            <div className="bg-[#0a192f] text-white p-8 rounded-3xl shadow-xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Admissions Guarantee
              </span>
              <h3 className="text-xl font-bold text-white">
                Why Reserve Your Seat in Advance?
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>Small Batch Assurance:</strong> Batches are strictly capped at 10-15 students to ensure individual speaking time.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>Free Diagnostic Placement:</strong> Take our 20-minute language assessment before classes begin.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#d4af37] font-bold">✓</span>
                  <span><strong>Flexible Rescheduling:</strong> If your work schedule changes, switch between weekday and weekend batches without fees.</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <a
                  href="https://wa.me/918970506004?text=Hello%20Cambridge%20Academy%2C%20I%20would%20like%20to%20reserve%20a%20seat%20for%20an%20upcoming%20batch."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4af37] font-bold hover:underline"
                >
                  Reserve on WhatsApp →
                </a>
                <span className="text-slate-400">21 Yrs Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
