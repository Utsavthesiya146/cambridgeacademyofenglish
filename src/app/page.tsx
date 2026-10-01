import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-dark via-navy to-[#173b75] text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gold font-medium mb-6">
              <span className="text-sm">Over 14+ Years of Language Excellence in Bangalore</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              India&apos;s No.1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gold">English Language</span> Teaching Academy
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-lg leading-relaxed">
              Master spoken English fluency, score 8.5+ bands on IELTS/PTE/TOEFL exams, or learn foreign languages with certified expert faculties in Kammanahalli, Bangalore.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/courses" className="btn btn-secondary">Find Your Course</Link>
              <Link href="/test" className="btn btn-outline border-white/40 text-white hover:bg-white hover:text-navy">Take Free Placement Test</Link>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-gold">14+</div>
                <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">185k+</div>
                <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">4.8 ★</div>
                <div className="text-xs text-slate-300 mt-1 uppercase tracking-wider">Reviews</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="aspect-[4/5] bg-navy-light rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 to-transparent flex flex-col justify-end p-8">
                 <h4 className="text-xl font-bold text-white mb-2">Authorized ELT Partner</h4>
                 <p className="text-slate-300 text-sm">British Council, IDP & Cambridge Assessment Preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-slate-100 shadow-sm">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
            <div className="px-4">
              <h4 className="font-bold text-navy mb-1">14+ Years Legacy</h4>
              <p className="text-sm text-slate-500">Proven excellence in Bangalore</p>
            </div>
            <div className="px-4">
              <h4 className="font-bold text-navy mb-1">Rated Excellent</h4>
              <p className="text-sm text-slate-500">1000+ verified student reviews</p>
            </div>
            <div className="px-4">
              <h4 className="font-bold text-navy mb-1">Certified Faculties</h4>
              <p className="text-sm text-slate-500">Highly qualified practitioners</p>
            </div>
            <div className="px-4">
              <h4 className="font-bold text-navy mb-1">Global Community</h4>
              <p className="text-sm text-slate-500">Students from 18+ countries</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-semibold tracking-wider uppercase text-sm mb-2 block">Featured Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Explore Our Premier Courses</h2>
            <p className="text-slate-600">Tailored curriculum designed to accelerate your communicative fluency and exam excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Learn English Speaking Online', badge: 'Online Live', target: 'Spoken English' },
              { title: 'Spoken English Classes (Campus)', badge: 'Classroom', target: 'Spoken English' },
              { title: 'Exam Prep (IELTS/PTE/TOEFL)', badge: '8.5 Band Target', target: 'Exam Prep' }
            ].map((course, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                   <div className="absolute top-4 left-4 bg-navy text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">{course.badge}</div>
                   <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                    Cambridge Academy of English offers certified {course.target.toLowerCase()} training in Bangalore. Elevate speaking skills with expert mentors.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/contact" className="btn btn-outline flex-1 text-sm py-2">Enquire Now</Link>
                    <Link href="/courses" className="btn btn-secondary flex-1 text-sm py-2 text-center">Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/courses" className="btn btn-primary">View All Courses</Link>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-navy text-white text-center">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Determine your current English proficiency level in just 20 minutes.</h2>
          <p className="text-slate-300 mb-8 text-lg">Take our free adaptive assessment test and get immediate CEFR grade results with tailored course advice.</p>
          <Link href="/test" className="btn btn-secondary text-lg px-8 py-3">Start Assessment Test Now</Link>
        </div>
      </section>
    </>
  );
}
