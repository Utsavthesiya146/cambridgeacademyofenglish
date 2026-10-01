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
          <ul className="flex gap-6 font-medium tracking-wide">
            <li><Link href="/" className="hover:text-accent transition-colors">Cambridge Academy Group</Link></li>
            <li><span className="text-white">Cambridge Academy of English</span></li>
            <li><Link href="/" className="hover:text-accent transition-colors">Cambridge Academy Online</Link></li>
          </ul>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2"><span className="text-accent">📞</span> 080-40943580</span>
            <Link href="/login" className="flex items-center gap-2 hover:text-accent transition-colors font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/85 backdrop-blur-xl shadow-lg py-2' : 'bg-white py-4'}`}>
        <div className="container-custom flex justify-between items-center">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative overflow-hidden rounded-xl bg-primary p-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img src="/images/logo.png" alt="Cambridge Academy" className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="text-xl font-bold text-primary tracking-tight group-hover:text-primary-light transition-colors">Cambridge Academy</span>
              <span className="text-xs text-accent font-semibold tracking-widest uppercase">of English</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {['About', 'Courses', 'Admission', 'Extra', 'Contact', 'Certificate'].map((item) => (
              <div key={item} className="relative group px-4 py-2 cursor-pointer">
                <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors flex items-center gap-1">
                  {item}
                  {['About', 'Courses', 'Admission', 'Extra'].includes(item) && (
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </span>
                
                {/* Mega Menu Dropdown Example for Courses */}
                {item === 'Courses' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 p-6 grid grid-cols-2 gap-6 z-50">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Popular Programs</h4>
                      <ul className="space-y-3">
                        <li><Link href="/courses/learn-english-speaking-course-online" className="block text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 p-2 rounded-lg transition-colors">Learn English Speaking Online</Link></li>
                        <li><Link href="/courses/class-room-english-course" className="block text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 p-2 rounded-lg transition-colors">Spoken English Classes</Link></li>
                        <li><Link href="/courses/exam-preparation-course" className="block text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 p-2 rounded-lg transition-colors">Exam Preparation (IELTS/PTE)</Link></li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex flex-col justify-center items-center text-center">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-3">⭐</div>
                      <h5 className="font-bold text-primary mb-1">Not sure which course?</h5>
                      <p className="text-xs text-slate-500 mb-4">Take our free 20-minute assessment test.</p>
                      <Link href="/test" className="text-xs font-bold text-accent hover:text-accent-hover uppercase tracking-wider">Start Test →</Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-4">
            <Link href="/book" className="hidden md:inline-flex btn-premium">
              Book your course
            </Link>
            
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
