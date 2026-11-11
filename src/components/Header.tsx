'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { trackPhoneCall } from '@/lib/analytics';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCounsellingModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-counselling-modal', {
          detail: { course: 'General Enquiry / Free Counselling' },
        })
      );
    }
  };

  const handlePhoneClick = (num: string) => {
    trackPhoneCall(num);
  };

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0a192f] text-slate-300 text-[11px] py-1.5 hidden lg:block border-b border-white/10">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div id="google_translate_element" className="scale-90 origin-left">
              Select Language
            </div>
            <div className="flex items-center gap-2 border-l border-white/20 pl-4 text-[#d4af37] font-semibold tracking-wide">
              <span>★</span>
              <span>21 Years of Excellence in English Language Training</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5 text-slate-300">
              <span className="text-[#d4af37] font-bold">Bangalore Admissions:</span>
              <a
                href="tel:08040943580"
                onClick={() => handlePhoneClick('08040943580')}
                className="hover:text-white transition-colors"
              >
                080-40943580
              </a>
              <span className="text-white/20">|</span>
              <a
                href="tel:8970506004"
                onClick={() => handlePhoneClick('8970506004')}
                className="hover:text-white transition-colors"
              >
                8970506004
              </a>
              <span className="text-white/20">|</span>
              <a
                href="tel:9620806004"
                onClick={() => handlePhoneClick('9620806004')}
                className="hover:text-white transition-colors"
              >
                9620806004
              </a>
            </div>

            <Link
              href="/admin/leads"
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors font-medium bg-white/10 px-2.5 py-0.5 rounded-full text-[10px]"
            >
              🔒 Admin
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR - ONE SINGLE LINE */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-slate-100 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
            : 'bg-white py-2.5'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center">
            
            {/* Logo Area: Official Logo Only without extra side text */}
            <Link
              href="/"
              className="flex items-center group flex-shrink-0 mr-3 xl:mr-6"
              aria-label="Cambridge Academy of English Home"
            >
              <img
                src="/images/logo.png"
                alt="Cambridge Academy of English"
                className="h-9 sm:h-10 lg:h-11 xl:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Menu: Single Horizontal Line */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-nowrap whitespace-nowrap">
              <Link
                href="/"
                className="px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-semibold text-slate-700 hover:text-[#0a192f] transition-colors whitespace-nowrap"
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group px-2 xl:px-2.5 py-1.5">
                <Link
                  href="/about"
                  className="text-[13px] xl:text-[14px] font-semibold text-slate-700 group-hover:text-[#0a192f] transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  About Us
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-[#0a192f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 p-3 z-50">
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0a192f] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Academy Overview &amp; 21 Years
                  </Link>
                  <Link
                    href="/about/vision-mision"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0a192f] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Vision &amp; Mission
                  </Link>
                  <Link
                    href="/about/values-of-cambridge"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0a192f] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Values of Cambridge
                  </Link>
                  <Link
                    href="/#founder"
                    className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0a192f] hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Founder Profile
                  </Link>
                </div>
              </div>

              {/* Courses Megamenu Dropdown */}
              <div className="relative group px-2 xl:px-2.5 py-1.5">
                <Link
                  href="/courses"
                  className="text-[13px] xl:text-[14px] font-semibold text-slate-700 group-hover:text-[#0a192f] transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  Courses
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-[#0a192f]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                <div className="absolute top-full -left-48 w-[820px] bg-white shadow-2xl rounded-3xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 p-6 z-50 grid grid-cols-3 gap-6">
                  {/* Column 1: Spoken & Exam Prep */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                        Spoken English
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>
                          <Link href="/courses/spoken-english-online" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            Spoken English Online
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/spoken-english-offline" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            Spoken English Offline (Campus)
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                        Exam Preparation
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>
                          <Link href="/courses/ielts-preparation" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            IELTS Preparation (Academic/General)
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/pte-preparation" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            PTE Academic Preparation
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/oet-preparation" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            OET for Healthcare
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/celpip-preparation" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            CELPIP Preparation (Canada PR)
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/toefl-preparation" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            TOEFL iBT Preparation
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/languagecert-preparation" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            LanguageCert International ESOL
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/cae-preparation" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            C1 Advanced (CAE)
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/cpe-preparation" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            C2 Proficiency (CPE)
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Adults & Foreign Nationals */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                        English for Adults
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>
                          <Link href="/courses/general-english" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            General English Course
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/professional-english" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            Professional Workplace English
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/business-communication" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            Business Communication
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                        Foreign Nationals
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>
                          <Link href="/courses/diploma-in-english-language" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            Diploma in English Language
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/master-diploma-in-english-language" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            Master Diploma in English Language
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                        English for Teachers
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>
                          <Link href="/courses/teacher-training" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            TEFL / TESOL Teacher Training
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/tkt-preparation" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            Cambridge TKT Preparation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Foreign Languages & Kids */}
                  <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div>
                      <p className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                        Foreign Languages
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>
                          <Link href="/courses/german-language" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            🇩🇪 German (A1-B2)
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/french-language" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            🇫🇷 French (DELF A1-B2)
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/spanish-language" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            🇪🇸 Spanish (DELE A1-B2)
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/chinese-mandarin-language" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            🇨🇳 Chinese Mandarin (HSK)
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-200">
                      <p className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider mb-2">
                        English for Kids
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        <li>
                          <Link href="/courses/kids-academic-english" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            Kids Academic English
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/a2-key-for-schools" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            A2 Key for Schools (KET)
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/b1-preliminary-for-schools" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            B1 Preliminary for Schools (PET)
                          </Link>
                        </li>
                        <li>
                          <Link href="/courses/ket-for-schools" className="hover:text-[#0a192f] hover:font-bold block py-1">
                            KET for Schools Info
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/courses"
                        className="text-[11px] font-bold text-[#0a192f] hover:text-[#d4af37] block text-center py-2 bg-white rounded-lg border border-slate-200 shadow-sm"
                      >
                        View Full Course Catalog →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/#trainers"
                className="px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-semibold text-slate-700 hover:text-[#0a192f] transition-colors whitespace-nowrap"
              >
                Our Trainers
              </Link>

              <Link
                href="/#success-stories"
                className="px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-semibold text-slate-700 hover:text-[#0a192f] transition-colors whitespace-nowrap"
              >
                Success Stories
              </Link>

              <Link
                href="/#testimonials"
                className="px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-semibold text-slate-700 hover:text-[#0a192f] transition-colors whitespace-nowrap"
              >
                Testimonials
              </Link>

              <Link
                href="/contact"
                className="px-2.5 xl:px-3 py-1.5 text-[13px] xl:text-[14px] font-semibold text-slate-700 hover:text-[#0a192f] transition-colors whitespace-nowrap"
              >
                Contact Us
              </Link>
            </nav>

            {/* Header Right Actions: Neatly Aligned on the Right */}
            <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
              <button
                onClick={openCounsellingModal}
                className="hidden sm:inline-flex items-center justify-center px-4 xl:px-5 py-2 xl:py-2.5 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] text-xs font-black rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
              >
                Enquire Now
              </button>

              <a
                href="https://wa.me/918970506004?text=Hello%20Cambridge%20Academy%20of%20English%2C%20I%20would%20like%20to%20enquire%20about%20course%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center justify-center px-3.5 py-2 xl:py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-full shadow-sm transition-colors gap-1.5 whitespace-nowrap"
              >
                <span>💬</span> WhatsApp
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-[#0a192f] focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* 3. MOBILE NAVIGATION DRAWER */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 max-h-[85vh] overflow-y-auto px-4 py-6 shadow-2xl">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                About Us
              </Link>

              {/* Courses Accordion */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown('courses')}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
                >
                  <span>Courses</span>
                  <span className="text-slate-400">
                    {openMobileDropdown === 'courses' ? '▲' : '▼'}
                  </span>
                </button>

                {openMobileDropdown === 'courses' && (
                  <div className="pl-4 pr-2 py-2 space-y-2 bg-slate-50 rounded-xl mt-1 text-xs">
                    <p className="font-bold text-[#d4af37] uppercase text-[10px] tracking-wider pt-1">
                      Spoken English
                    </p>
                    <Link
                      href="/courses/spoken-english-online"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Spoken English Online
                    </Link>
                    <Link
                      href="/courses/spoken-english-offline"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Spoken English Offline
                    </Link>

                    <p className="font-bold text-[#d4af37] uppercase text-[10px] tracking-wider pt-2">
                      Exam Preparation
                    </p>
                    <Link
                      href="/courses/ielts-preparation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; IELTS Preparation
                    </Link>
                    <Link
                      href="/courses/pte-preparation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; PTE Academic Preparation
                    </Link>
                    <Link
                      href="/courses/oet-preparation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; OET for Healthcare
                    </Link>
                    <Link
                      href="/courses/celpip-preparation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; CELPIP (Canada PR)
                    </Link>
                    <Link
                      href="/courses/toefl-preparation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; TOEFL iBT Preparation
                    </Link>
                    <Link
                      href="/courses/languagecert-preparation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; LanguageCert ESOL
                    </Link>
                    <Link
                      href="/courses/cae-preparation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; C1 Advanced (CAE)
                    </Link>
                    <Link
                      href="/courses/cpe-preparation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; C2 Proficiency (CPE)
                    </Link>

                    <p className="font-bold text-[#d4af37] uppercase text-[10px] tracking-wider pt-2">
                      Adults &amp; Corporate
                    </p>
                    <Link
                      href="/courses/general-english"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; General English Course
                    </Link>
                    <Link
                      href="/courses/professional-english"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Professional English
                    </Link>
                    <Link
                      href="/courses/business-communication"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Business Communication
                    </Link>

                    <p className="font-bold text-[#d4af37] uppercase text-[10px] tracking-wider pt-2">
                      Foreign Nationals &amp; Teachers
                    </p>
                    <Link
                      href="/courses/diploma-in-english-language"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Diploma in English
                    </Link>
                    <Link
                      href="/courses/master-diploma-in-english-language"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Master Diploma in English
                    </Link>
                    <Link
                      href="/courses/teacher-training"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; TEFL Teacher Training
                    </Link>
                    <Link
                      href="/courses/tkt-preparation"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Cambridge TKT Preparation
                    </Link>

                    <p className="font-bold text-[#d4af37] uppercase text-[10px] tracking-wider pt-2">
                      Foreign Languages &amp; Kids
                    </p>
                    <Link
                      href="/courses/german-language"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; German Language (A1-B2)
                    </Link>
                    <Link
                      href="/courses/french-language"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; French Language (A1-B2)
                    </Link>
                    <Link
                      href="/courses/spanish-language"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Spanish Language (A1-B2)
                    </Link>
                    <Link
                      href="/courses/chinese-mandarin-language"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Chinese Mandarin
                    </Link>
                    <Link
                      href="/courses/kids-academic-english"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; Kids Academic English
                    </Link>
                    <Link
                      href="/courses/a2-key-for-schools"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 text-slate-700 hover:text-[#0a192f]"
                    >
                      &bull; A2 Key for Schools (KET)
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/#trainers"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Our Trainers
              </Link>

              <Link
                href="/#success-stories"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Student Success Stories
              </Link>

              <Link
                href="/#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Testimonials
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Contact Us
              </Link>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openCounsellingModal();
                  }}
                  className="w-full py-3 bg-[#d4af37] text-[#0a192f] font-black rounded-xl text-xs uppercase tracking-wider text-center"
                >
                  Enquire Now / Free Counselling
                </button>
                <a
                  href="https://wa.me/918970506004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] text-white font-bold rounded-xl text-xs text-center flex items-center justify-center gap-2"
                >
                  <span>💬</span> WhatsApp Admissions
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
