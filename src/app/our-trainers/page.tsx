import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Faculty Credentials & Teaching Methodology | Cambridge Academy of English Bangalore',
  description:
    'Discover the teaching standards, qualifications, and communicative methodology of Cambridge Academy of English faculty in Bangalore. CELTA, TESOL, and certified international examination instructors with 21+ years of proven academic excellence.',
  alternates: {
    canonical: 'https://cambridgeacademyofenglish.vercel.app/our-trainers',
  },
};

const FACULTY_PILLARS = [
  {
    title: 'CELTA & TESOL Certified Language Mentors',
    role: 'Communicative English & Speech Lab Faculty',
    credentials: 'Cambridge CELTA, Trinity CertTESOL & Applied Linguistics',
    experience: '10+ to 18+ Years Senior Teaching Experience',
    specialisations: [
      'Hesitation Removal & Conversational Eloquence',
      'Accent Neutralization & Speech Lab Drills',
      'CEFR-Aligned Grammar & Sentence Structuring',
      'Impromptu Speaking & Debate Simulation',
    ],
    image: '/images/courses/course-advanced-spoken.jpg',
    overview:
      'Our communicative English mentors specialize in active speech drills and immersive conversational techniques. They guide students through systematic voice modulation, vocabulary expansion, and public speaking confidence.',
  },
  {
    title: 'International Examination Specialists',
    role: 'IELTS, PTE & OET Master Instructors',
    credentials: 'Certified IELTS, PTE, OET & Cambridge Assessment Preparation Specialists',
    experience: '12+ Years Exam Strategy & Scoring Expertise',
    specialisations: [
      'IELTS Band 8.5+ Strategy Clinics',
      'OET for Healthcare Professionals (Doctors & Nurses)',
      'Timed Essay Structuring & Task 1/2 Rubrics',
      '1-on-1 Diagnostic Speaking Evaluation',
    ],
    image: '/images/courses/course-corporate-trainer.jpg',
    overview:
      'Master coaches dedicated to high-stakes international examinations. Utilizing standardized evaluation frameworks, they provide line-by-line writing critiques and simulated speaking interviews.',
  },
  {
    title: 'Accredited European & Asian Language Instructors',
    role: 'German, French, Spanish & Japanese Faculty',
    credentials: 'Goethe-Zertifikat C2, DALF C2, JLPT N1/N2 Native-Level Linguists',
    experience: '10+ Years Immersive Language Instruction',
    specialisations: [
      'German A1 to B2 (Goethe-Zertifikat & Chancenkarte)',
      'French A1 to B2 (DELF / DALF & TEF Canada)',
      'Japanese N5 to N3 (JLPT for IT Professionals)',
      'Cross-Cultural Business & Academic Etiquette',
    ],
    image: '/images/courses/course-japanese.jpg',
    overview:
      'Native-level European and Asian language instructors focusing on communicative vocabulary, listening comprehension, and official certification preparation for overseas studies and global IT careers.',
  },
  {
    title: 'Corporate Communication & Executive Coaches',
    role: 'Business English & Workplace Soft Skills Faculty',
    credentials: 'Corporate Train-The-Trainer Certified, Senior Communication Consultants',
    experience: '15+ Years Fortune 500 Executive Coaching',
    specialisations: [
      'Boardroom Presentations & Executive Eloquence',
      'High-Stakes Commercial Negotiations',
      'Strategic Email & Proposal Writing',
      'Cross-Border Stakeholder Diplomacy',
    ],
    image: '/images/courses/course-business-communication.jpg',
    overview:
      'Seasoned corporate coaches training working professionals, software engineers, and executives to command global boardroom conversations with clarity, authority, and diplomatic precision.',
  },
  {
    title: 'Academic Governance & Centre Leadership',
    role: 'Academic Director & Curriculum Engineering',
    credentials: '21+ Years Academy Leadership (Est. 2005, Bangalore)',
    experience: '25,000+ Alumni Across 18+ Countries',
    specialisations: [
      'CEFR-Aligned Curriculum Development',
      'Pedagogical Quality Audits & Batch Oversight',
      'International Student Visa & FRRO Support',
      'International Examination Benchmarks',
    ],
    image: '/images/hero-classroom.jpg',
    overview:
      'Since 2005, our academic management has upheld South India’s premier communicative language learning standards in Kammanahalli, Bangalore, mentoring over 25,000 learners from across India and 18+ foreign nations.',
  },
];

export default function OurTrainersPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-[#0a192f] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-5 backdrop-blur-md">
            <span>★</span> Faculty Credentials &bull; 21 Years of Excellence
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Faculty Credentials &amp; Teaching Methodology
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Our instructional standards are anchored in Cambridge Assessment English, CELTA, TESOL, and British Council evaluation frameworks. Experience personalized speech coaching and proven examination success.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs">
            <Link
              href="/book"
              className="px-6 py-3 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-black rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book Diagnostic Mentor Assessment →
            </Link>
            <Link
              href="/courses"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20"
            >
              Explore All 24+ Course Syllabi
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#0a192f]">21+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Years of Teaching Legacy</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#d4af37]">100%</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Certified Faculty Standards</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#0a192f]">12 : 1</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Max Student-to-Teacher Ratio</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-black text-[#d4af37]">25,000+</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Successful Alumni Mentored</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FACULTY STANDARDS GRID */}
      <section className="container-custom py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-3">
            Academic Faculty Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight">
            Core Faculty Competencies &amp; Specialisations
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Every instructor at Cambridge Academy is evaluated for communicative pedagogy, student empathy, diagnostic error-correction, and proven score enhancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACULTY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-6 sm:p-8">
                {/* Visual Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-md bg-slate-100 flex-shrink-0">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0a192f] text-[10px] font-bold uppercase tracking-wider mb-1">
                      {pillar.experience}
                    </span>
                    <h3 className="text-base font-bold text-[#0a192f] group-hover:text-[#d4af37] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#d4af37] font-semibold mt-0.5">
                      {pillar.role}
                    </p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-100">
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Qualifications &amp; Standards:</p>
                  <p className="text-xs text-slate-800 font-semibold mt-0.5">{pillar.credentials}</p>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pillar.overview}
                </p>

                {/* Specialisations */}
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2">Core Pedagogical Focus:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.specialisations.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-[11px] font-medium"
                      >
                        &bull; {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/book"
                  className="text-xs font-bold text-[#0a192f] hover:text-[#d4af37] transition-colors flex items-center gap-1"
                >
                  Book Assessment →
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-1.5 bg-[#0a192f] text-white text-[11px] font-bold rounded-lg hover:bg-[#162447] transition-colors"
                >
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Allocation Notice */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-amber-900 font-bold uppercase tracking-wider mb-1">
            Institutional Mentor Allocation Policy
          </p>
          <p className="text-xs text-amber-800 leading-relaxed">
            In accordance with our 21-year academic policy, specific mentors are assigned dynamically after every student’s diagnostic level evaluation. This guarantees personalized learning velocity, optimal batch synergy, and tailored milestone monitoring.
          </p>
        </div>
      </section>

      {/* 4. TEACHING METHODOLOGY HIGHLIGHT */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="container-custom">
          <div className="bg-[#0a192f] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                  The Cambridge Pedagogical Standard
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Why Our Students Achieve Communicative Fluency &amp; Top Bands
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Unlike traditional lecture-based tutoring, our faculty utilize the communicative methodology aligned with Cambridge Assessment English and the British Council. 80% of classroom time is dedicated to active speech, debate, structured listening labs, and real-time pronunciation refinement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span> Certified International Examination Faculty
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span> Small Batches (Maximum 12 Students)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span> Daily Pronunciation &amp; Speech Lab Clinics
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span> Continuous Milestone Diagnostic Tracking
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md text-center">
                <p className="text-xs text-[#d4af37] font-bold uppercase tracking-wider mb-2">Want to evaluate your level?</p>
                <h4 className="text-lg font-bold text-white mb-3">Schedule a Free Diagnostic Evaluation</h4>
                <p className="text-xs text-slate-300 mb-6">
                  Visit our Kammanahalli campus or attend an online evaluation session with a senior trainer today.
                </p>
                <Link
                  href="/book"
                  className="block w-full py-3 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-black rounded-xl text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  Book My Free Assessment Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
