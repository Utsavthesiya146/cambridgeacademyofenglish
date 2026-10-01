'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full bg-white shadow-sm border-b border-slate-200 z-50 sticky top-0">
      {/* Top Bar */}
      <div className="bg-slate-100 border-b border-slate-200 hidden md:block">
        <div className="container-custom flex justify-between items-center py-2 text-xs font-medium text-slate-600">
          <ul className="flex gap-4">
            <li><Link href="/" className="hover:text-navy">Cambridge Academy Group</Link></li>
            <li><Link href="/" className="hover:text-navy font-bold text-navy">Cambridge Academy of English</Link></li>
            <li><Link href="/" className="hover:text-navy">Cambridge Academy Online</Link></li>
            <li><Link href="/" className="hover:text-navy">The Cambridge Academy Communication</Link></li>
          </ul>
          <Link href="/login" className="flex items-center gap-1 hover:text-navy">
            <span>🚪</span> Login
          </Link>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="container-custom py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex flex-col">
          <Link href="/">
            <img src="/images/logo.png" alt="Cambridge Academy of English" className="h-16 object-contain" />
          </Link>
          <span className="text-sm font-semibold text-slate-600 mt-1">Bringing Language to Life</span>
        </div>

        {/* Contact & CTA */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm text-slate-700 font-medium hidden md:block">
            <strong>Call us:</strong> <a href="tel:080-40943580" className="hover:text-navy ml-1">080-40943580</a> | <a href="tel:8970506004" className="hover:text-navy">8970506004</a> | <a href="tel:9620806004" className="hover:text-navy">9620806004</a>
          </p>
          <div className="flex gap-4 items-center">
            <div className="relative hidden md:block">
              <input type="text" placeholder="Search..." className="border border-slate-300 rounded px-3 py-1 text-sm outline-none focus:border-navy" />
            </div>
            <Link href="/book" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded shadow-md transition-colors text-sm">
              Book your course
            </Link>
            <button className="md:hidden text-navy" onClick={toggleMenu} aria-label="Toggle mobile menu">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-navy text-white hidden md:block">
        <div className="container-custom">
          <ul className="flex items-center text-sm font-medium">
            <li className="relative group px-4 py-3 hover:bg-navy-light cursor-pointer">
              <Link href="/about">About ▼</Link>
              <div className="absolute top-full left-0 bg-white text-navy shadow-lg w-48 hidden group-hover:block border-t-2 border-gold z-50">
                <Link href="/about" className="block px-4 py-2 hover:bg-slate-100">Vision & Mission</Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-slate-100">Values of Cambridge</Link>
              </div>
            </li>
            <li className="relative group px-4 py-3 hover:bg-navy-light cursor-pointer">
              <Link href="/courses">Courses ▼</Link>
              <div className="absolute top-full left-0 bg-white text-navy shadow-lg w-72 hidden group-hover:block border-t-2 border-gold z-50">
                <Link href="/courses/learn-english-speaking-course-online" className="block px-4 py-2 hover:bg-slate-100">Learn English Speaking Online</Link>
                <Link href="/courses/class-room-english-course" className="block px-4 py-2 hover:bg-slate-100">Spoken English Classes</Link>
                <Link href="/courses/exam-preparation-course" className="block px-4 py-2 hover:bg-slate-100">Exam Preparation Course</Link>
                <Link href="/courses/foreign-language-courses-in-bangalore-india" className="block px-4 py-2 hover:bg-slate-100">Foreign Language Courses</Link>
                <Link href="/courses/teacher-training-in-banglore" className="block px-4 py-2 hover:bg-slate-100">Teacher Training Course</Link>
                <Link href="/courses/Cambridge-Exam" className="block px-4 py-2 hover:bg-slate-100">Cambridge Exam</Link>
              </div>
            </li>
            <li className="relative group px-4 py-3 hover:bg-navy-light cursor-pointer">
              <span>Admission ▼</span>
            </li>
            <li className="relative group px-4 py-3 hover:bg-navy-light cursor-pointer">
              <span>Extra ▼</span>
            </li>
            <li className="px-4 py-3 hover:bg-navy-light cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="px-4 py-3 hover:bg-navy-light cursor-pointer">
              <Link href="/certificate">Certificate</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy text-white flex flex-col py-2 border-t border-navy-light">
          <Link href="/about" onClick={toggleMenu} className="px-6 py-3 border-b border-navy-light">About</Link>
          <Link href="/courses" onClick={toggleMenu} className="px-6 py-3 border-b border-navy-light">Courses</Link>
          <Link href="/contact" onClick={toggleMenu} className="px-6 py-3 border-b border-navy-light">Contact</Link>
        </div>
      )}
    </header>
  );
}
