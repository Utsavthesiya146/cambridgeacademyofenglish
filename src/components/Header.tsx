'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Ultra Minimal */}
      <div className="bg-primary text-slate-300 text-xs py-2 hidden lg:block border-b border-white/10">
        <div className="container-custom flex justify-between items-center">
          <ul className="flex gap-4 font-medium tracking-wide">
            <li><Link href="/" className="hover:text-accent transition-colors">Cambridge Academy Group</Link></li>
            <li><span className="text-white font-bold">Cambridge Academy of English</span></li>
            <li><Link href="/" className="hover:text-accent transition-colors">Cambridge Academy Online</Link></li>
            <li><Link href="/" className="hover:text-accent transition-colors">The Cambridge Academy Communication</Link></li>
          </ul>
          <div className="flex gap-6 items-center">
            <Link href="/login" className="flex items-center gap-2 hover:text-accent transition-colors font-medium bg-white/10 px-3 py-1 rounded-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-500 border-b border-slate-100 ${isScrolled ? "bg-white/90 backdrop-blur-2xl shadow-sm py-1" : "bg-white py-2"}`}>
        <div className="container-custom">
          
          {/* Secondary Header Details */}
          <div className="hidden lg:flex justify-between items-center mb-2 pb-2 border-b border-slate-100">
             <div className="text-xs text-slate-500">
               <div id="google_translate_element">Select Language</div>
             </div>
             <div className="flex items-center gap-8">
                <div className="text-sm text-slate-700 font-medium flex items-center gap-4">
                  <span className="text-primary font-bold">Call us:</span>
                  <a href="tel:080-40943580" className="hover:text-accent transition-colors font-bold">080-40943580</a>
                  <a href="tel:8970506004" className="hover:text-accent transition-colors font-bold">8970506004</a>
                  <a href="tel:9620806004" className="hover:text-accent transition-colors font-bold">9620806004</a>
                </div>
                <div className="relative">
                  <input type="text" placeholder="Search..." className="text-xs px-4 py-2 border border-slate-200 rounded-full bg-slate-50 focus:outline-none focus:border-primary focus:bg-white transition-colors w-48" />
                  <svg className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
             </div>
          </div>

          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/images/logo.png" alt="Cambridge Academy" className="h-auto w-44 sm:w-52 lg:w-60 object-contain transition-transform duration-300 group-hover:scale-105" />
              <div className="hidden sm:flex flex-col border-l-2 border-slate-200 pl-3">
                <span className="text-xl lg:text-2xl font-black text-primary tracking-tight group-hover:text-primary/80 transition-colors leading-tight">Cambridge Academy</span>
                <span className="text-[0.6rem] lg:text-[0.65rem] text-accent font-bold tracking-[0.2em] uppercase">Bringing Language to Life</span>
              </div>
            </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            
            <div className="relative group px-3 py-2 cursor-pointer">
              <Link href="/about" className="text-[15px] font-semibold text-slate-700 group-hover:text-primary transition-colors flex items-center gap-1.5">
                About
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl border-t-2 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                <ul className="flex flex-col py-2">
                  <li><Link href="/about/vision-mision" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Vision & Mission</Link></li>
                  <li><Link href="/about/values-of-cambridge" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Values of Cambridge</Link></li>
                </ul>
              </div>
            </div>

            <div className="relative group px-3 py-2 cursor-pointer">
              <Link href="/courses" className="text-[15px] font-semibold text-slate-700 group-hover:text-primary transition-colors flex items-center gap-1.5">
                Courses
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              <div className="absolute top-full left-0 mt-0 w-80 bg-white shadow-xl border-t-2 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                <ul className="flex flex-col py-2">
                  <li><Link href="/courses/learn-english-speaking-course-online" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Learn English Speaking Course Online</Link></li>
                  <li><Link href="/courses/class-room-english-course" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Spoken English Classes</Link></li>
                  <li><Link href="/courses/exam-preparation-course" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Exam Preparation Course</Link></li>
                  <li><Link href="/courses/foreign-language-courses" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Foreign Language Courses</Link></li>
                  <li><Link href="/courses/teacher-training" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Teacher Training Course</Link></li>
                  <li><Link href="/courses/cambridge-exam" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Cambridge Exam</Link></li>
                </ul>
              </div>
            </div>

            <div className="relative group px-3 py-2 cursor-pointer">
              <Link href="/admission" className="text-[15px] font-semibold text-slate-700 group-hover:text-primary transition-colors flex items-center gap-1.5">
                Admission
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              <div className="absolute top-full left-0 mt-0 w-72 bg-white shadow-xl border-t-2 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                <ul className="flex flex-col py-2">
                  <li><Link href="/admission/foreign-students" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Admission Form For Foreign Students</Link></li>
                  <li><Link href="/admission/indian-students" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Admission Form For Indian Students</Link></li>
                  <li><Link href="/admission/terms-process" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Admission Terms and Process</Link></li>
                  <li><Link href="/admission/academic-extracts" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">Academic Extracts</Link></li>
                </ul>
              </div>
            </div>

            <div className="relative group px-3 py-2 cursor-pointer">
              <Link href="/extra" className="text-[15px] font-semibold text-slate-700 group-hover:text-primary transition-colors flex items-center gap-1.5">
                Extra
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-xl border-t-2 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                <ul className="flex flex-col py-2 max-h-96 overflow-y-auto">
                  <li><Link href="/extra/general" className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">General Information</Link></li>
                  {['Thailand', 'Saudi Arabia', 'Iran', 'Iraq', 'Turkey', 'Korea', 'Yemen', 'Japan', 'Kuwait', 'Bahrain', 'Egypt'].map(country => (
                    <li key={country}><Link href={`/extra/${country.toLowerCase().replace(' ', '-')}`} className="block px-6 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors font-medium border-b border-slate-50 last:border-0">{country}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="px-3 py-2 cursor-pointer">
              <Link href="/contact" className="text-[15px] font-semibold text-slate-700 group-hover:text-primary transition-colors flex items-center gap-1.5">
                Contact
              </Link>
            </div>
            
            <div className="px-3 py-2 cursor-pointer">
              <Link href="/certificate" className="text-[15px] font-semibold text-slate-700 group-hover:text-primary transition-colors flex items-center gap-1.5">
                Certificate
              </Link>
            </div>
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <Link href="/book" className="hidden md:inline-flex bg-primary text-white font-bold tracking-wide text-sm px-8 py-3.5 rounded-full hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">Book Your Course</Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 rounded-xl bg-slate-50 text-primary hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl pt-24 px-6 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {['About', 'Courses', 'Admission', 'Extra', 'Contact', 'Certificate'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-2xl font-bold text-white hover:text-accent transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </Link>
            ))}
            <hr className="border-white/10 my-4" />
            <Link href="/book" className="btn-premium w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Book your course
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

