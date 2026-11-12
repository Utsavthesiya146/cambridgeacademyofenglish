import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Certified Trainers & Faculty | Cambridge Academy of English Bangalore',
  description:
    'Meet our Cambridge, CELTA, and DELTA certified language trainers at Cambridge Academy of English, Bangalore. Over 21 years of proven excellence in Spoken English, IELTS, OET, and Foreign Languages.',
  alternates: {
    canonical: 'https://cambridgeacademyofenglish.vercel.app/our-trainers',
  },
};

const TRAINERS = [
  {
    name: 'Dr. Sarah Mathews',
    role: 'Senior IELTS & OET Master Coach',
    credentials: 'CELTA, PhD in Applied Linguistics',
    experience: '14+ Years Teaching Experience',
    specialisations: ['IELTS Academic & General (Target Band 8.0+)', 'OET for Healthcare Professionals', 'Writing Assessment Clinics'],
    image: '/images/faculty-sarah.jpg',
    bio: 'Dr. Sarah has guided over 4,500 students to secure top bands in IELTS and OET. She specializes in diagnostic error correction, structured essay argumentation, and high-pressure speaking simulation interviews.',
  },
  {
    name: 'Prof. Rajesh Nair',
    role: 'Head of Spoken English & Voice Coach',
    credentials: 'MA English Literature, Cambridge DELTA Certified',
    experience: '16+ Years Teaching Experience',
    specialisations: ['Spoken English Fluency & Public Speaking', 'Accent Neutralization & Phonetics', 'Corporate Business Communication'],
    image: '/images/faculty-rajesh.jpg',
    bio: 'Prof. Rajesh leads communicative speech lab sessions at our Bangalore campus. His dynamic, drill-based methodology removes hesitation and builds spontaneous conversational eloquence.',
  },
  {
    name: 'Madame Claire Dubois',
    role: 'Senior French & European Linguist',
    credentials: 'DALF C2 Certified, Sorbonne University Alumna',
    experience: '11+ Years Teaching Experience',
    specialisations: ['French A1 to B2 (DELF / DALF)', 'TEF Canada Exam Coaching for PR', 'European Conversational Seminars'],
    image: '/images/faculty-claire.jpg',
    bio: 'With over a decade of European language teaching, Madame Claire brings immersive cultural and grammatical mastery to students preparing for higher education in France and Canadian immigration.',
  },
  {
    name: 'Herr Klaus Weber',
    role: 'Lead German Language Instructor',
    credentials: 'Goethe-Zertifikat C2 Großes Deutsches Sprachdiplom',
    experience: '12+ Years Teaching Experience',
    specialisations: ['German A1 to B2 (Goethe-Zertifikat)', 'Chancenkarte & German Job Seeker Visa Prep', 'Technical & Workplace German'],
    image: '/images/faculty-klaus.jpg',
    bio: 'Herr Klaus specializes in structured German pedagogy, guiding engineering graduates, doctors, and nurses aiming for tuition-free public universities and hospital placements in Germany.',
  },
  {
    name: 'Director & Academic Founder',
    role: 'Founder & Academic Director',
    credentials: 'Senior Applied Linguist & Academic Administrator',
    experience: '21+ Years Academy Leadership',
    specialisations: ['Curriculum Engineering', 'British Council & IDP Partnership Associate', 'Faculty Mentorship & Quality Assurance'],
    image: '/images/faculty-director.jpg',
    bio: 'Established Cambridge Academy of English in 2005. Over 21 years, he has championed student-centric communicative learning, transforming Cambridge Academy into South India’s most trusted language institute.',
  },
];

export default function OurTrainersPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION - CLEAN & CONCISE */}
      <section className="bg-[#0a192f] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-5 backdrop-blur-md">
            <span>★</span> Certified Senior Faculty &bull; 21 Years of Excellence
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            Learn from Certified Master Instructors
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Our trainers hold prestigious Cambridge, CELTA, DELTA, and Goethe-Institut qualifications. Experience personalized coaching, dedicated speech critique, and proven exam strategies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs">
            <Link
              href="/book"
              className="px-6 py-3 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-black rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              Book 1-on-1 Mentor Consultation →
            </Link>
            <Link
              href="/courses"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20"
            >
              Explore All Courses
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
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">Certified Instructors</p>
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

      {/* 3. TRAINERS GRID */}
      <section className="container-custom py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-3">
            Faculty Profiles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight">
            Academic Profiles &amp; Teaching Specialisations
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Every instructor at Cambridge Academy is rigorously evaluated for communicative pedagogical skills, student empathy, and proven score-enhancement techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div className="p-6 sm:p-8">
                {/* Avatar and Badges */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#d4af37] shadow-md bg-slate-100 flex-shrink-0">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0a192f] text-[10px] font-bold uppercase tracking-wider mb-1">
                      {trainer.experience}
                    </span>
                    <h3 className="text-lg font-bold text-[#0a192f] group-hover:text-[#d4af37] transition-colors leading-snug">
                      {trainer.name}
                    </h3>
                    <p className="text-xs text-[#d4af37] font-semibold mt-0.5">
                      {trainer.role}
                    </p>
                  </div>
                </div>

                {/* Credentials */}
                <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-100">
                  <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Qualifications:</p>
                  <p className="text-xs text-slate-800 font-semibold mt-0.5">{trainer.credentials}</p>
                </div>

                {/* Bio */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {trainer.bio}
                </p>

                {/* Specialisations */}
                <div>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mb-2">Core Focus Areas:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.specialisations.map((spec, sIdx) => (
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
                  Book Session with {trainer.name.split(' ')[0]} →
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
                  Why Our Trainers Achieve 98.4% Exam Success
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Unlike traditional lecture-based tutoring, our faculty utilize the communicative methodology endorsed by Cambridge Assessment English and the British Council. 80% of session time is dedicated to active speech, debate, structured listening labs, and real-time pronunciation refinement.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span> British Council &amp; IDP Trained Examiners
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span> Strict Maximum of 12 Students Per Batch
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span> Daily Pronunciation &amp; Speaking Clinics
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37]">✓</span> Continuous Milestone Diagnostic Tracking
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md text-center">
                <p className="text-xs text-[#d4af37] font-bold uppercase tracking-wider mb-2">Want to meet our faculty?</p>
                <h4 className="text-lg font-bold text-white mb-3">Schedule a Free Diagnostic Level Test</h4>
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

