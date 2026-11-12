import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | 21 Years of Excellence | Cambridge Academy of English',
  description:
    'Learn about Cambridge Academy of English, Bangalore’s premier language training institute with 21 years of experience, Cambridge certified faculty, and alumni from 18+ nations.',
  alternates: {
    canonical: 'https://cambridgeacademyofenglish.vercel.app/about',
  },
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-slate-50 pb-24">
      {/* 1. HERO SECTION - CLEAN & CONCISE */}
      <section className="relative min-h-[380px] md:h-[50vh] flex flex-col items-center justify-center bg-[#0a192f] text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none"></div>
        <div className="container-custom relative z-20 pt-28 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#d4af37] text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-md">
            <span>★</span> 21 Years of Educational Excellence
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-xl tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#ffe066] to-white">Cambridge Academy of English</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 font-light drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            Bangalore’s premier institute for English language acquisition, international examination coaching, and foreign languages.
          </p>
        </div>
      </section>

      {/* 2. CORE MISSION & VISION CARD */}
      <section className="relative z-30 -mt-12 container-custom">
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-2xl border border-slate-200/80 flex flex-col md:flex-row gap-8 md:gap-14 items-center">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-1">
              Purpose &amp; Direction
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] mb-3">
              Our Vision &amp; Mission
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] rounded-full"></div>
          </div>
          <div className="md:w-2/3 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Founded with the goal of breaking linguistic barriers in Bangalore, <strong>Cambridge Academy of English</strong> has dedicated over 21 years to empowering students, job seekers, healthcare professionals, and international scholars.
            </p>
            <p>
              We believe true language competence is not achieved by memorizing grammatical rules in isolation, but through immersive communicative interaction, confidence building, and personalized mentoring.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FOUR INSTITUTIONAL PILLARS */}
      <section className="py-20 md:py-24 container-custom">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-3">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a192f] tracking-tight">
            Institutional Highlights
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Why more than 25,000 learners have chosen Cambridge Academy since 2005.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🤝',
              title: 'Authorized Partner',
              desc: 'Official British Council & IDP partner for IELTS and Cambridge ELT examination preparations.',
            },
            {
              icon: '📈',
              title: '21 Years Heritage',
              desc: 'Over two decades of proven success guiding candidates to Band 8.5 in IELTS and CEFR C2 proficiency.',
            },
            {
              icon: '🎯',
              title: 'Small Interactive Batches',
              desc: 'Focused instruction in small groups guaranteeing individual speaking time and diagnostic feedback.',
            },
            {
              icon: '🌍',
              title: 'Global Community',
              desc: 'A vibrant multicultural learning environment with alumni from India and 18+ international countries.',
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{card.icon}</span>
              <h3 className="font-bold text-[#0a192f] text-lg mb-2">{card.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FOUNDER & GOVERNANCE SECTION */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 text-center">
              <div className="w-56 h-56 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#d4af37]/30 bg-slate-800 p-2">
                <img src="/images/about-leadership.svg" alt="Academic Leadership Seal of Cambridge Academy of English" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-lg font-bold text-[#0a192f] mt-4">Academic Director &amp; Founder</h3>
              <p className="text-xs text-[#d4af37] font-semibold">Cambridge Academy of English, Bangalore</p>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                Leadership Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f]">
                Two Decades of Dedication to Language Excellence
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Under visionary academic leadership, Cambridge Academy of English has expanded from a local training institute into a globally recognized language academy.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our faculty members are chosen not only for their linguistic certifications, but for their patience, cross-cultural empathy, and dedication to drawing out the unique potential of every student.
              </p>
              <div className="pt-2 flex gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#0a192f] text-white font-bold rounded-full text-xs hover:bg-[#162447] transition-all"
                >
                  Visit Kammanahalli Campus →
                </Link>
                <Link
                  href="/courses"
                  className="px-6 py-3 border border-slate-300 text-slate-700 font-bold rounded-full text-xs hover:bg-slate-50 transition-all"
                >
                  Explore Course Offerings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
