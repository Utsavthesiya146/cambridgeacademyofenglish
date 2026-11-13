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

            {/* Exam Preparation Standards */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
              <p className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                International Exam Preparation
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-300 font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#d4af37]">✓</span> British Council &amp; IDP IELTS Aligned
                </span>
                <span className="text-white/20">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#d4af37]">✓</span> CEFR International Standards
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[11px] font-bold text-white uppercase tracking-wider mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {[
                  {
                    name: 'Facebook',
                    url: 'https://www.facebook.com/cambridgeacademyofenglish/',
                    svg: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Instagram',
                    url: 'https://www.instagram.com/cambridge_academy_of_english/',
                    svg: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/cambridge-academy-of-english-384611105/',
                    svg: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Twitter (X)',
                    url: 'https://twitter.com/CAEIndia',
                    svg: (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'YouTube',
                    url: 'https://www.youtube.com/channel/UCRdBd4JLtRcqKTkyHWZJMKQ',
                    svg: (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                  },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-[#0a192f] text-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-md border border-white/10 hover:border-[#d4af37]"
                  >
                    {s.svg}
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
                href="https://search.google.com/local/writereview?placeid=ChIJ-ZTkoiYXrj4RKGNuprTxD7M"
                target="_blank"
                rel="noopener noreferrer"
                title="Read and write verified Google reviews for Cambridge Academy of English"
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
