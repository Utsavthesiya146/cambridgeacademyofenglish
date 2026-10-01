'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo placeholder - using text to ensure it's always accessible and fast */}
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-gold font-bold text-xl group-hover:bg-navy-light transition-colors">
              C
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-navy leading-tight group-hover:text-navy-light transition-colors">Cambridge Academy</span>
              <span className="text-xs text-gold font-semibold tracking-wider uppercase">of English</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-navy transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-navy transition-colors">About Us</Link>
            <Link href="/courses" className="text-sm font-semibold text-slate-600 hover:text-navy transition-colors">Courses</Link>
            <Link href="/test" className="text-sm font-semibold text-slate-600 hover:text-navy transition-colors">Placement Test</Link>
            <Link href="/contact" className="btn btn-primary text-sm px-5 py-2">Contact Us</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-navy"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-b border-slate-100 py-4 px-4 flex flex-col gap-4">
          <Link href="/" onClick={toggleMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-navy rounded-md">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-navy rounded-md">About Us</Link>
          <Link href="/courses" onClick={toggleMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-navy rounded-md">Courses</Link>
          <Link href="/test" onClick={toggleMenu} className="block px-4 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-navy rounded-md">Placement Test</Link>
          <Link href="/contact" onClick={toggleMenu} className="block px-4 py-2 text-base font-medium text-navy bg-slate-50 rounded-md">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
