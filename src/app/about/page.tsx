import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cambridge Academy of English",
  description: "Learn about the teaching methodology, faculty, and legacy of Cambridge Academy of English in Bangalore.",
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] md:h-[60vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-primary/85 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}></div>
        <div className="container-custom relative z-20 pt-32 pb-24 text-center fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-xs font-bold tracking-wider text-slate-800 uppercase">Est. 2010</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Cambridge Academy</span>
          </h1>
          <p className="text-xl text-slate-300 font-light drop-shadow-md max-w-2xl mx-auto">
            Bangalore&apos;s premier institute for English language acquisition, exam preparation, and foreign language training.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-30 mt-12 md:mt-16 container-custom fade-in-up stagger-1">
        <div className="glass-card bg-white/95 p-4 sm:p-6 md:p-14 shadow-2xl flex flex-col md:flex-row gap-6 md:gap-12 items-center text-center md:text-left">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-extrabold text-primary mb-4">Our Mission & Vision</h2>
            <div className="w-16 h-1 bg-accent rounded-full"></div>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              We combine world-class infrastructure, personalized attention, and proven communicative methodologies to help students achieve linguistic excellence. Whether you are aiming for a band 8.5 in IELTS or learning a new foreign language, our certified faculty ensures you reach your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights - Bento Grid */}
      <section className="py-24 container-custom">
        <div className="text-center mb-16 fade-in-up stagger-2">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Institutional Highlights</h2>
          <p className="text-slate-500 text-lg">Why thousands of students trust us with their future.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in-up stagger-3">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="font-bold text-primary text-xl mb-3">Authorized Partner</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Official registration partner for British Council, IDP, and Cambridge ELT exam preparations.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="text-2xl">📈</span>
            </div>
            <h4 className="font-bold text-primary text-xl mb-3">Proven Methods</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Time-tested tips and techniques to help candidates achieve top scores on IELTS and PTE.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-bold text-primary text-xl mb-3">Small Batches</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Focused instruction in smaller group sizes guaranteeing personalized attention and feedback.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <span className="text-2xl">🌍</span>
            </div>
            <h4 className="font-bold text-primary text-xl mb-3">Global Community</h4>
            <p className="text-slate-500 text-sm leading-relaxed">A diverse, multicultural learning ecosystem with students from 18+ different countries.</p>
          </div>

        </div>
      </section>
      
    </div>
  );
}
