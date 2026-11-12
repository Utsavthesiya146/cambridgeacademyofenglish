import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Verified Student Reviews & Testimonials | Cambridge Academy of English',
  description:
    'Read authentic Google reviews and student testimonials for Cambridge Academy of English, Bangalore. Rated 4.9/5 by 1,000+ students from India, the Middle East, East Asia, and worldwide.',
  alternates: {
    canonical: 'https://cambridgeacademyofenglish.vercel.app/testimonials',
  },
};

const TESTIMONIALS = [
  {
    name: 'Pooja Venkatesh',
    course: 'Spoken English & Workplace Communication',
    location: 'Kammanahalli, Bangalore',
    rating: 5,
    date: 'Verified Student',
    avatar: 'PV',
    feedback:
      'I used to hesitate in every team meeting. Cambridge Academy transformed my articulation completely. Within 2 months, I was promoted to Senior Product Consultant at an MNC! The active speech drills and supportive feedback from trainers made all the difference.',
  },
  {
    name: 'Rohit Kulkarni',
    course: 'IELTS Academic Intensive Preparation',
    location: 'Bangalore, India',
    rating: 5,
    date: 'Verified Student',
    avatar: 'RK',
    feedback:
      'Scored 8.5 Band overall on IELTS! The writing evaluation clinics and 1-on-1 speaking interviews with British Council certified trainers gave me the exact edge I needed. Highly recommend their personalized strategy sessions.',
  },
  {
    name: 'Fatima Al-Zahra',
    course: 'Diploma in English for Foreign Nationals',
    location: 'Yemen / Saudi Arabia',
    rating: 5,
    date: 'Verified Student',
    avatar: 'FA',
    feedback:
      'Coming from Yemen, I was worried about language in India. Cambridge Academy gave me a warm second home, great teachers, and complete English fluency for my university studies. Truly the best language institute in South India.',
  },
  {
    name: 'Soo Jung',
    course: 'Communicative English Immersion',
    location: 'Seoul, South Korea',
    rating: 5,
    date: 'Verified Student',
    avatar: 'SJ',
    feedback:
      'I studied Communicative English at Cambridge. Before, I was able to read English but could not speak fluently. Here, I gained immense confidence in public presentation and everyday conversation.',
  },
  {
    name: 'Geunduk Jeon',
    course: 'Spoken English & Presentation Skills',
    location: 'South Korea',
    rating: 5,
    date: 'Verified Student',
    avatar: 'GJ',
    feedback:
      'Cambridge Academy of English brought out the best in me. The trainers and management are really supportive and friendly. Joining here was one of the best educational decisions of my life.',
  },
  {
    name: 'Omar Al-Haidari',
    course: 'Diploma in English Language',
    location: 'Sana’a, Yemen',
    rating: 5,
    date: 'Verified Student',
    avatar: 'OM',
    feedback:
      'I finished my Diploma in English language here. I used to find English hard, but the step-by-step guidance from certified teachers helped me master sentence structure and pronunciation. Now I speak with complete confidence!',
  },
  {
    name: 'Tenzin Ngodup',
    course: 'English for Academic Purposes',
    location: 'Tibet / India',
    rating: 5,
    date: 'Verified Student',
    avatar: 'TN',
    feedback:
      'A great place to learn! Meeting students from 18 different countries gave me a truly international experience. The small group attention and dedicated doubt-clearing sessions made learning natural and fast.',
  },
  {
    name: 'Esmail',
    course: 'Flexible Spoken English & Vocabulary',
    location: 'Iran',
    rating: 5,
    date: 'Verified Student',
    avatar: 'ES',
    feedback:
      'The flexible morning and evening batch timings allowed me to study while managing my professional commitments. The mentors are passionate and experienced. Best English academy in Bangalore without a doubt.',
  },
  {
    name: 'Edris',
    course: 'IELTS Band Booster Workshop',
    location: 'Iran / Bangalore',
    rating: 5,
    date: 'Verified Student',
    avatar: 'ED',
    feedback:
      'Their proven training methods for IELTS are exceptional. The daily full-length mock tests and individual writing critiques ensured I felt 100% prepared on the day of my exam.',
  },
  {
    name: 'Mohammed Farooq',
    course: 'Advanced English Grammar & Vocabulary',
    location: 'International Student',
    rating: 5,
    date: 'Verified Student',
    avatar: 'MF',
    feedback:
      'Excellent study materials and regular diagnostic evaluations helped me track my progress continuously. The faculty genuinely care about every student’s improvement. Highly recommended!',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION - CLEAN & CONCISE */}
      <section className="bg-[#0a192f] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-5 backdrop-blur-md">
            <span>★</span> Verified Student Feedback &bull; 4.9/5 Rating
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
            What Our Students Say Across the Globe
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Discover real, unedited reviews from working professionals, international scholars, and test-takers who experienced life-changing fluency at Cambridge Academy of English.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs">
            <a
              href="https://maps.google.com/?q=Cambridge+Academy+of+English+Kammanahalli+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-black rounded-full transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>⭐</span> Read Google Reviews (1,000+) →
            </a>
            <Link
              href="/book"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20"
            >
              Book Free Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* 2. GOOGLE RATING HIGHLIGHT BANNER */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 sm:px-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-amber-500">★★★★★</span>
              <div>
                <p className="text-sm font-black text-[#0a192f]">4.9 out of 5 Stars &bull; 1,000+ Reviews</p>
                <p className="text-xs text-slate-600">Verified by Google Reviews at our Kammanahalli, Bangalore Campus</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Cambridge+Academy+of+English+Kammanahalli+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#0a192f] hover:text-[#d4af37] underline"
            >
              View Location &amp; Ratings on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS GRID */}
      <section className="container-custom py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-3">
            Real Student Voices
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight">
            Feedback from Professionals &amp; International Learners
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Read verified experiences across spoken English, exam coaching, and language immersion batches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-amber-400 text-sm">
                    {'★'.repeat(t.rating)}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    ✓ {t.date}
                  </span>
                </div>

                {/* Feedback Quote */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  &ldquo;{t.feedback}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0a192f] text-[#d4af37] flex items-center justify-center font-black text-xs shadow-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-xs text-[#0a192f] group-hover:text-[#d4af37] transition-colors">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {t.course} &bull; {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ENQUIRY CALL TO ACTION */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[#0a192f] to-[#162447] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Join Our Global Alumni Network
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 mb-3">
              Experience the Cambridge Academy Transformation
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              Book a free 1-on-1 diagnostic consultation with our certified mentors to determine your current level and explore custom batch options.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <Link
                href="/book"
                className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-black rounded-full uppercase tracking-wider transition-all shadow-lg hover:-translate-y-0.5"
              >
                Book Free Counselling Session →
              </Link>
              <Link
                href="/courses"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20"
              >
                Browse All 25 Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

