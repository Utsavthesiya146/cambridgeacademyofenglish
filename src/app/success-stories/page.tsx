import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Student Success Stories & Achievements | Cambridge Academy of English',
  description:
    'Read real, verified success stories of students who achieved 8.5 Band in IELTS, Grade B in OET, Canadian PR with CELPIP, and career promotions through Cambridge Academy of English Bangalore.',
  alternates: {
    canonical: 'https://cambridgeacademyofenglish.vercel.app/success-stories',
  },
};

const SUCCESS_STORIES = [
  {
    student: 'Arjun Swaminathan',
    milestone: 'Admitted to University of Manchester (UK)',
    badge: 'IELTS Academic Band 8.5',
    category: 'Exam Prep',
    course: 'IELTS Intensive Preparation',
    location: 'Bangalore & UK',
    avatar: 'AS',
    story:
      'Cracked the IELTS Academic exam on my first attempt with a 9.0 in Listening and 8.5 in Reading. The writing evaluation clinics and personalized speaking interview drills with certified mentors gave me the exact confidence needed for top UK university admissions.',
  },
  {
    student: 'Sister Ancy Philip',
    milestone: 'Registered NHS Nurse in London (UK)',
    badge: 'OET Grade B (370 pts)',
    category: 'Healthcare',
    course: 'OET for Healthcare Professionals',
    location: 'Kerala & London, UK',
    avatar: 'AP',
    story:
      'Medical roleplays and patient consultation dialogs at Cambridge Academy prepared me for the exact clinical scenarios tested in the OET speaking and writing sub-tests. Cleared all 4 sub-tests on first attempt and completed UK NMC registration seamlessly.',
  },
  {
    student: 'Manish & Neha Sharma',
    milestone: 'Secured Canadian PR via Express Entry',
    badge: 'CELPIP Level 10 (CLB 10)',
    category: 'Immigration',
    course: 'CELPIP Immersion Sprint',
    location: 'Bangalore & Ontario, Canada',
    avatar: 'MS',
    story:
      'To maximize our CRS points for Canada PR, we needed CLB 9+. With the Cambridge Academy faculty’s daily timed practice, listening accent drills, and speaking templates, we both achieved CLB 10 on our first attempt.',
  },
  {
    student: 'Pooja Venkatesh',
    milestone: 'Promoted to Senior Product Consultant at an MNC',
    badge: 'Corporate Career Milestone',
    category: 'Career Growth',
    course: 'Professional English & Business Communication',
    location: 'Kammanahalli, Bangalore',
    avatar: 'PV',
    story:
      'I had strong technical competence but used to hesitate during international client boardroom calls. The speech labs and impromptu presentation workshops completely transformed my articulation. Within 2 months, I secured a major promotion.',
  },
  {
    student: 'Rohit Kulkarni',
    milestone: 'Admitted to TU Munich for MSc Engineering',
    badge: 'IELTS Band 8.0 + German B1',
    category: 'Higher Education',
    course: 'IELTS Academic + German Language Course',
    location: 'Bangalore & Munich, Germany',
    avatar: 'RK',
    story:
      'Mastering both academic English and foundational German under one roof at Cambridge Academy gave me the competitive edge required for admission to tuition-free public universities in Germany.',
  },
  {
    student: 'Fatima Al-Zahra',
    milestone: 'University Admission with Distinction',
    badge: 'Master Diploma in English',
    category: 'International',
    course: 'English for Foreign Nationals Immersion',
    location: 'Yemen & Bangalore',
    avatar: 'FA',
    story:
      'Coming from Yemen, adapting to an English-medium curriculum in Bangalore felt daunting. The supportive faculty, multicultural peer community, and intensive phonetics drills gave me complete verbal and written fluency.',
  },
  {
    student: 'Soo Jung',
    milestone: 'International Career Placement',
    badge: 'Communicative English Certification',
    category: 'International',
    course: 'Communicative Spoken English',
    location: 'South Korea & Bangalore',
    avatar: 'SJ',
    story:
      'Before joining Cambridge Academy, I had studied grammar for years but could not hold spontaneous conversations. The immersive speaking drills and presentation coaching brought out absolute fluency in me.',
  },
  {
    student: 'Omar Al-Haidari',
    milestone: 'Completed Diploma & Corporate Placement',
    badge: 'Diploma in English (Distinction)',
    category: 'International',
    course: 'Diploma in English Language',
    location: 'Yemen / Middle East',
    avatar: 'OH',
    story:
      'The small batch size and dedicated mentor critique helped me learn correct syntax, pronunciation, and vocabulary without hesitation. Now I converse effortlessly with international colleagues.',
  },
];

export default function SuccessStoriesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION - CLEAN & CONCISE */}
      <section className="bg-[#0a192f] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-5 backdrop-blur-md">
            <span>★</span> Real Graduates &bull; Proven Milestones
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Student Success Stories &amp; Global Milestones
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            From scoring 8.5 Band on IELTS to securing NHS healthcare posts in the UK and Express Entry PR in Canada, read real stories of transformation from Cambridge Academy alumni.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs">
            <Link
              href="/book"
              className="px-6 py-3 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-black rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              Start Your Success Journey →
            </Link>
            <Link
              href="/courses"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20"
            >
              Explore Training Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROVEN METRICS */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#0a192f]">25,000+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Alumni Worldwide</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#d4af37]">98.4%</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">First-Time Exam Pass Rate</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#0a192f]">18+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Countries Represented</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#d4af37]">4.9 / 5</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Google Reviews Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORIES GRID */}
      <section className="container-custom py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-3">
            Real Student Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight">
            Journeys of Fluency, Exams &amp; Global Careers
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Every story represents genuine dedication, guided by Cambridge Academy’s certified trainers and proven communicative pedagogy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#0a192f] text-[#d4af37] text-[10px] font-bold rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400">
                    {item.category}
                  </span>
                </div>

                {/* Milestone Heading */}
                <h3 className="text-base sm:text-lg font-bold text-[#0a192f] group-hover:text-[#d4af37] transition-colors leading-snug mb-3">
                  {item.milestone}
                </h3>

                {/* Story Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  &ldquo;{item.story}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a192f] to-[#1e3a8a] text-[#d4af37] flex items-center justify-center font-black text-xs shadow-sm flex-shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-bold text-xs text-[#0a192f]">{item.student}</p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {item.course} &bull; {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GLOBAL FOOTPRINT */}
      <section className="bg-[#0a192f] text-white py-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Global Student Community
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
              Trusted by Scholars from 18+ Countries
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              For over two decades, our Bangalore campus has been a hub for international students seeking authentic English immersion.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { country: 'Saudi Arabia', flag: '🇸🇦', count: '5,000+ Alumni' },
              { country: 'Yemen', flag: '🇾🇪', count: '3,200+ Alumni' },
              { country: 'Thailand', flag: '🇹🇭', count: '1,800+ Alumni' },
              { country: 'South Korea & Japan', flag: '🇰🇷🇯🇵', count: '1,200+ Alumni' },
              { country: 'UAE & Oman', flag: '🇦🇪🇴🇲', count: '2,500+ Alumni' },
              { country: 'African Nations', flag: '🌍', count: '3,000+ Alumni' },
            ].map((c, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                <span className="text-3xl block mb-2">{c.flag}</span>
                <p className="font-bold text-xs text-white">{c.country}</p>
                <p className="text-[10px] text-[#d4af37] font-semibold mt-1">{c.count}</p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-12 text-center bg-white/5 border border-white/10 p-8 rounded-3xl max-w-2xl mx-auto backdrop-blur-md">
            <h4 className="text-lg font-bold text-white mb-2">Ready to achieve your target score or fluency?</h4>
            <p className="text-xs text-slate-300 mb-6">
              Book a free diagnostic level test with our certified master trainers today.
            </p>
            <Link
              href="/book"
              className="inline-block px-8 py-3.5 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-black rounded-full text-xs uppercase tracking-wider transition-all shadow-xl hover:-translate-y-0.5"
            >
              Book Free Counselling Session →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

