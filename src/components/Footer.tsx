import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-slate-300 pt-10 pb-8 border-t-[4px] border-[#d4af37] text-sm relative mt-8 sm:mt-12">
      <div className="container-custom relative z-10">
        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand & Heritage (Col-span 4) */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 group mb-4 inline-flex">
              <div className="bg-white rounded-xl p-2 shadow-lg">
                <img
                  src="/images/logo.png"
                  alt="Cambridge Academy of English"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">
                  Cambridge Academy
                </span>
                <span className="text-[10px] text-[#d4af37] font-bold tracking-[0.2em] uppercase">
                  of English &bull; Bangalore
                </span>
              </div>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[#d4af37] text-xs font-bold mb-4">
              <span>★</span> 21 Years of Educational Excellence (Est. 2005)
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-6">
              India’s premier English Language &amp; Foreign Language Training Academy located in Kammanahalli, Bangalore. Empowering over 25,000 students and professionals from India and 18+ international countries through communicative excellence.
            </p>

            {/* Accreditations & Trust */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
              <p className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                Official Examination Partnership
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#d4af37]">✓</span> British Council Partner
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#d4af37]">✓</span> IDP IELTS Associate
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[11px] font-bold text-white uppercase tracking-wider mb-3">
                Connect With Us
              </p>
              <div className="flex gap-2.5">
                {[
                  {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/cambridgeacademyofenglish/',
                    icon: 'f',
                  },
                  {
                    name: 'Instagram',
                    url: 'https://www.instagram.com/cambridge_academy_of_english/',
                    icon: '📷',
                  },
                  {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/cambridge-academy-of-english-384611105/',
                    icon: 'in',
                  },
                  {
                    name: 'Twitter',
                    url: 'https://twitter.com/CAEIndia',
                    icon: '𝕏',
                  },
                  {
                    name: 'YouTube',
                    url: 'https://www.youtube.com/channel/UCRdBd4JLtRcqKTkyHWZJMKQ',
                    icon: '▶',
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-[#0a192f] text-white flex items-center justify-center text-xs font-bold transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Courses - English & Exams (Col-span 3) */}
          <div className="lg:col-span-3">
            <p className="text-white font-bold mb-4 uppercase tracking-[0.15em] text-xs">
              English &amp; Exam Courses
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/courses/spoken-english-offline" className="hover:text-white transition-colors">
                  &bull; Spoken English Classes Bangalore
                </Link>
              </li>
              <li>
                <Link href="/courses/spoken-english-online" className="hover:text-white transition-colors">
                  &bull; Spoken English Online Course
                </Link>
              </li>
              <li>
                <Link href="/courses/ielts-preparation" className="hover:text-white transition-colors">
                  &bull; IELTS Coaching in Bangalore
                </Link>
              </li>
              <li>
                <Link href="/courses/pte-preparation" className="hover:text-white transition-colors">
                  &bull; PTE Academic Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses/oet-preparation" className="hover:text-white transition-colors">
                  &bull; OET for Healthcare Professionals
                </Link>
              </li>
              <li>
                <Link href="/courses/celpip-preparation" className="hover:text-white transition-colors">
                  &bull; CELPIP (Canada PR Coaching)
                </Link>
              </li>
              <li>
                <Link href="/courses/toefl-preparation" className="hover:text-white transition-colors">
                  &bull; TOEFL iBT Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses/cae-preparation" className="hover:text-white transition-colors">
                  &bull; Cambridge C1 Advanced (CAE)
                </Link>
              </li>
              <li>
                <Link href="/courses/cpe-preparation" className="hover:text-white transition-colors">
                  &bull; Cambridge C2 Proficiency (CPE)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Adults, Foreign Languages & Kids (Col-span 2) */}
          <div className="lg:col-span-2">
            <p className="text-white font-bold mb-4 uppercase tracking-[0.15em] text-xs">
              Specialized Tracks
            </p>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/courses/general-english" className="hover:text-white transition-colors">
                  &bull; General English for Adults
                </Link>
              </li>
              <li>
                <Link href="/courses/professional-english" className="hover:text-white transition-colors">
                  &bull; Professional English
                </Link>
              </li>
              <li>
                <Link href="/courses/business-communication" className="hover:text-white transition-colors">
                  &bull; Business Communication
                </Link>
              </li>
              <li>
                <Link href="/courses/diploma-in-english-language" className="hover:text-white transition-colors">
                  &bull; Diploma for Foreign Nationals
                </Link>
              </li>
              <li>
                <Link href="/courses/teacher-training" className="hover:text-white transition-colors">
                  &bull; TEFL / TESOL Teacher Training
                </Link>
              </li>
              <li>
                <Link href="/courses/german-language" className="hover:text-white transition-colors">
                  &bull; German Language Classes
                </Link>
              </li>
              <li>
                <Link href="/courses/french-language" className="hover:text-white transition-colors">
                  &bull; French Language Classes
                </Link>
              </li>
              <li>
                <Link href="/courses/spanish-language" className="hover:text-white transition-colors">
                  &bull; Spanish Language Classes
                </Link>
              </li>
              <li>
                <Link href="/courses/kids-academic-english" className="hover:text-white transition-colors">
                  &bull; Kids Academic English
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact & Working Hours (Col-span 3) */}
          <div className="lg:col-span-3">
            <p className="text-white font-bold mb-4 uppercase tracking-[0.15em] text-xs">
              Bangalore Campus
            </p>
            <div className="space-y-3 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <span className="text-[#d4af37] text-sm">📍</span>
                <span>
                  No 87, 2nd Floor, Nehru Road, Kammanahalli, Bangalore, Karnataka - 560084, India
                </span>
              </p>
              <div className="flex items-start gap-2">
                <span className="text-[#d4af37] text-sm">📞</span>
                <div>
                  <a href="tel:08040943580" className="hover:text-white font-bold text-slate-300">
                    080-40943580
                  </a>
                  <span className="mx-1">/</span>
                  <a href="tel:8970506004" className="hover:text-white font-bold text-slate-300">
                    8970506004
                  </a>
                  <br />
                  <a href="tel:9620806004" className="hover:text-white font-bold text-slate-300">
                    9620806004
                  </a>
                </div>
              </div>
              <p className="flex items-start gap-2">
                <span className="text-[#d4af37] text-sm">✉️</span>
                <a href="mailto:info@cambridgeacademyofenglish.com" className="hover:text-white">
                  info@cambridgeacademyofenglish.com
                </a>
              </p>
              <div className="flex items-start gap-2">
                <span className="text-[#d4af37] text-sm">⏰</span>
                <div>
                  <span className="font-semibold text-slate-300">Mon - Sat:</span> 9:00 AM – 9:00 PM<br />
                  <span className="font-semibold text-slate-300">Sunday:</span> By Appointment
                </div>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="https://maps.google.com/?q=Cambridge+Academy+of+English+Kammanahalli+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-xl text-xs font-bold text-white transition-colors"
              >
                <span className="text-amber-400">★★★★★</span>
                <span>4.9 / 5 Rating (1,000+ Reviews)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Local Bangalore SEO Keywords Strip */}
        <div className="py-4 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <span className="text-slate-300 font-bold text-xs uppercase tracking-wider shrink-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4af37]"></span>
              Popular Programmes in Bangalore:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { label: 'English Language Academy in Bangalore', href: '/courses/spoken-english-offline' },
                { label: 'Best English Speaking Classes in Bangalore', href: '/courses/spoken-english-offline' },
                { label: 'Spoken English Classes in Kammanahalli', href: '/courses/spoken-english-offline' },
                { label: 'IELTS Coaching in Bangalore', href: '/courses/ielts-preparation' },
                { label: 'PTE Coaching in Bangalore', href: '/courses/pte-preparation' },
                { label: 'OET Training Centres in Bangalore', href: '/courses/oet-preparation' },
                { label: 'German Language Classes in Bangalore', href: '/courses/german-language' },
                { label: 'French Language Classes in Bangalore', href: '/courses/french-language' },
                { label: 'English Classes for Kids in Bangalore', href: '/courses/kids-academic-english' },
              ].map((prog, idx) => (
                <Link
                  key={idx}
                  href={prog.href}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 hover:text-[#d4af37] text-slate-400 text-[11px] border border-white/5 transition-all"
                >
                  {prog.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Multi-Tier Symmetrical & Clean Alignment */}
        <div className="pt-5 pb-3 border-b border-white/5">
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-xs text-slate-400">
            <Link href="/our-trainers" className="hover:text-white transition-colors">Our Trainers</Link>
            <span className="text-white/20 select-none">•</span>
            <Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link>
            <span className="text-white/20 select-none">•</span>
            <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <span className="text-white/20 select-none">•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-white/20 select-none">•</span>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <span className="text-white/20 select-none">•</span>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <span className="text-white/20 select-none">•</span>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            <span className="text-white/20 select-none">•</span>
            <Link href="/admin/leads" className="text-[#d4af37] hover:underline font-semibold">Admissions Portal</Link>
          </div>
        </div>

        {/* Copyright & HostingBaba Credit Symmetrical Row */}
        <div className="pt-3 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Cambridge Academy of English, Bangalore. All Rights Reserved.</p>
          <div className="flex items-center gap-2 font-normal">
            <span>
              Designed &amp; Developed with <span className="text-rose-500">❤️</span> by
            </span>
            <a
              href="https://webhostingbaba.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white px-2 py-0.5 rounded shadow-sm hover:opacity-90 hover:scale-105 transition-all"
              title="HostingBaba"
            >
              <img
                src="/images/hosting-baba-logo.png"
                alt="HostingBaba"
                className="h-4 sm:h-5 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
