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
      <div className="bg-primary text-slate-300 text-[11px] py-1.5 hidden lg:block border-b border-white/10">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div id="google_translate_element" className="scale-90 origin-left">Select Language</div>
            <ul className="flex gap-4 font-medium tracking-wide border-l border-white/20 pl-4">
              <li><Link href="/" className="hover:text-accent transition-colors">Cambridge Academy Group</Link></li>
              <li><Link href="/" className="hover:text-accent transition-colors">Cambridge Academy Online</Link></li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-3">
              <span className="text-accent/80 font-bold">Call us:</span>
              <a href="tel:080-40943580" className="hover:text-white transition-colors">080-40943580</a>
              <a href="tel:8970506004" className="hover:text-white transition-colors">8970506004</a>
              <a href="tel:9620806004" className="hover:text-white transition-colors">9620806004</a>
            </div>
            <div className="relative">
              <input type="text" placeholder="Search..." className="text-[10px] px-3 py-1 border border-white/20 rounded-full bg-white/5 text-white focus:outline-none focus:bg-white/10 transition-colors w-32" />
            </div>
            <Link href="/login" className="flex items-center gap-1.5 hover:text-accent transition-colors font-medium bg-white/10 px-3 py-1 rounded-full text-[10px]">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 border-b border-slate-100 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-1.5" : "bg-white py-2"}`}>
        <div className="container-custom">
          
          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/images/logo.png" alt="Cambridge Academy" className="h-auto w-36 sm:w-44 lg:w-52 object-contain transition-transform duration-300 group-hover:scale-105" />
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
            <Link href="/book" className="hidden md:inline-flex bg-primary text-white font-bold tracking-wide text-xs px-5 py-2.5 rounded-full hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">Book Your Course</Link>
            
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

