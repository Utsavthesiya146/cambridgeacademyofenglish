import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Your Course | Cambridge Academy of English",
  description: "Book your English speaking, IELTS, PTE, or foreign language course at Cambridge Academy of English.",
};

export default function BookCoursePage() {
  return (
    <div className="bg-slate-50 overflow-hidden min-h-screen pb-24">
      
      {/* Header */}
      <div className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container-custom relative z-10 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Book Your Course</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Ready to master a new language or ace your exams? Fill out the booking form below to reserve your seat today.
          </p>
        </div>
      </div>

      <div className="container-custom relative -mt-10 z-20 fade-in-up stagger-1 max-w-4xl">
        <div className="glass-card bg-white p-6 sm:p-10 md:p-16 shadow-2xl rounded-3xl border border-slate-100">
          
          <h2 className="text-3xl font-extrabold text-primary mb-2">Reservation Form</h2>
          <div className="w-12 h-1 bg-accent rounded-full mb-10"></div>
          
          <form action="/contact" method="GET" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                <input type="text" className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                <input type="tel" className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+91 9876543210" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                <input type="email" className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Select Course *</label>
                <select className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required>
                  <option value="">Choose a course</option>
                  <option value="Spoken English">Spoken English</option>
                  <option value="IELTS Coaching">IELTS Coaching</option>
                  <option value="PTE Coaching">PTE Coaching</option>
                  <option value="Foreign Languages">Foreign Languages</option>
                  <option value="Teacher Training">Teacher Training</option>
                  <option value="OET Training">OET Training</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Preferred Mode *</label>
                <select className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required>
                  <option value="">Select Mode</option>
                  <option value="Online">Online Sessions</option>
                  <option value="Classroom">Classroom Training</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Preferred Start Date</label>
                <input type="date" className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Additional Comments / Questions</label>
              <textarea className="w-full p-4 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" rows={4} placeholder="Any specific requirements or timings you prefer?"></textarea>
            </div>

            <div className="pt-4 flex justify-between items-center flex-col sm:flex-row gap-4">
              <p className="text-sm text-slate-500">
                Need immediate help? <Link href="/contact" className="text-primary font-bold hover:text-accent">Contact us directly</Link>
              </p>
              <button type="submit" className="py-4 px-10 bg-accent text-primary rounded-xl font-bold text-lg hover:bg-accent-hover transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
