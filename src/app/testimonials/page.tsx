import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ALL_TESTIMONIALS } from '@/data/testimonialsData';

export const metadata: Metadata = {
  title: 'Verified Student Reviews & Testimonials | Cambridge Academy of English',
  description:
    'Read authentic Google reviews and student testimonials for Cambridge Academy of English, Bangalore. Rated 4.9/5 by 1,000+ students from India, the Middle East, East Asia, and worldwide.',
  alternates: {
    canonical: 'https://cambridgeacademyofenglish.vercel.app/testimonials',
  },
};

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

      {/* 2B. AUTHENTIC CAMPUS & CLASSROOM VIDEO SHOWCASE */}
      <section className="py-8 sm:py-10 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Video Player Column */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-black aspect-video w-full">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/hero-classroom.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/campus-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Campus Information & Highlights Column */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-1.5 self-start text-[11px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#0a192f] px-3 py-1 rounded-full text-white mb-3">
                  <span>🎥</span> Campus Life &amp; Activities
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0a192f] tracking-tight mb-2">
                  Inside Cambridge Academy of English
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Watch authentic classroom sessions, speech practice, and student activities recorded at our Kammanahalli campus in Bangalore.
                </p>

                <div className="space-y-2.5 mb-5 border-y border-slate-200/70 py-3.5">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-sm leading-none mt-0.5 font-bold">✔</span>
                    <div>
                      <p className="text-xs font-bold text-[#0a192f]">Interactive Audio &amp; Speech Lab</p>
                      <p className="text-[11px] text-slate-500">Real-time pronunciation and accent neutralization drills</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-sm leading-none mt-0.5 font-bold">✔</span>
                    <div>
                      <p className="text-xs font-bold text-[#0a192f]">Group Debates &amp; Presentation Skills</p>
                      <p className="text-[11px] text-slate-500">Daily conversational drills and public speaking workshops</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] text-sm leading-none mt-0.5 font-bold">✔</span>
                    <div>
                      <p className="text-xs font-bold text-[#0a192f]">International Student Cohort</p>
                      <p className="text-[11px] text-slate-500">Learners from South Korea, Yemen, Iran &amp; 15+ countries</p>
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="https://www.youtube.com/channel/UCRdBd4JLtRcqKTkyHWZJMKQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a192f] hover:bg-[#d4af37] hover:text-[#0a192f] text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <span>📺</span> Visit Official YouTube Channel &rarr;
                  </a>
                </div>
              </div>
            </div>
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
          {ALL_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
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
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#d4af37]/70 shadow-sm flex-shrink-0 bg-slate-100">
                  <Image
                    src={t.image}
                    alt={`${t.name} - Student Review`}
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-xs text-[#0a192f] group-hover:text-[#d4af37] transition-colors">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">
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

