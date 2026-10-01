import Link from 'next/link';

export default function AdmissionPage() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/slider3.jpg')" }}></div>
        <div className="container-custom relative z-20 pt-16 text-center fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
            Admissions <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">& Enrollments</span>
          </h1>
          <p className="text-xl text-slate-300 font-light drop-shadow-md max-w-2xl mx-auto">
            Take the first step towards global opportunities. Join the Cambridge Academy of English today.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 relative z-30 -mt-16 container-custom">
        <div className="glass-card bg-white p-10 md:p-14 shadow-2xl rounded-3xl">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl font-extrabold text-primary mb-4">How to Apply</h2>
            <div className="w-16 h-1 bg-accent rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center group fade-in-up stagger-1">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-3xl font-black text-slate-300 group-hover:border-accent group-hover:text-primary transition-all duration-300 mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Assessment Test</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Take our free 20-minute online test to accurately evaluate your current English proficiency level.</p>
              <Link href="/test" className="text-accent font-bold text-sm mt-4 hover:text-primary transition-colors">Start Test →</Link>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group fade-in-up stagger-2">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-3xl font-black text-slate-300 group-hover:border-accent group-hover:text-primary transition-all duration-300 mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Counseling</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Speak with our expert academic counselors to choose the right batch and curriculum for your goals.</p>
              <Link href="/contact" className="text-accent font-bold text-sm mt-4 hover:text-primary transition-colors">Book Call →</Link>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group fade-in-up stagger-3">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-3xl font-black text-slate-300 group-hover:border-accent group-hover:text-primary transition-all duration-300 mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Enroll & Start</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Complete your registration, receive your course materials, and begin your transformational journey.</p>
              <Link href="/courses" className="text-accent font-bold text-sm mt-4 hover:text-primary transition-colors">View Courses →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
