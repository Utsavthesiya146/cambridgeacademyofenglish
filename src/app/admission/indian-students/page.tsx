import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission Form For Indian Students | Cambridge Academy of English",
  description: "Apply for courses at Cambridge Academy of English as an Indian student.",
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      <section className="relative py-24 bg-primary text-white mb-12">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Admission Form For Indian Students</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Fill out the application form below to begin your journey with us.
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12">
          <form action="/contact" method="GET" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Course Selected *</label>
                <select className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                  <option value="">Select a Course</option>
                  <option value="English courses">English courses</option>
                  <option value="Diploma in ELT">Diploma in ELT</option>
                  <option value="Advanced Diploma">Advanced Diploma</option>
                  <option value="TKT">TKT</option>
                  <option value="TEFL">TEFL</option>
                  <option value="Foreign language">Foreign language</option>
                  <option value="Exam Preparation">Exam Preparation</option>
                  <option value="OET">OET</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Name *</label>
                <input type="text" className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Your full name" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Surname</label>
                <input type="text" className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Your surname" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Permanent Address *</label>
                <input type="text" className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Your address" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone</label>
                <input type="tel" className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Phone number" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                <input type="email" className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Your email" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Date of Birth</label>
                <input type="date" className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Age</label>
                <input type="number" className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Your age" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Sex</label>
                <select className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Educational Background</label>
                <textarea className="w-full p-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" rows={3} placeholder="Please provide your educational background"></textarea>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button type="submit" className="py-4 px-10 bg-primary text-white rounded-xl font-bold text-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

