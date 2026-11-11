'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COURSES_DATA, CourseDetail } from '@/data/coursesData';

const CATEGORIES = [
  { id: 'all', label: 'All Courses' },
  { id: 'spoken-english', label: 'Spoken English' },
  { id: 'exam-preparation', label: 'Exam Preparation' },
  { id: 'english-adults', label: 'English for Adults' },
  { id: 'foreign-nationals', label: 'Foreign Nationals' },
  { id: 'teacher-training', label: 'Teacher Training' },
  { id: 'foreign-languages', label: 'Foreign Languages' },
  { id: 'kids-english', label: 'English for Kids' },
];

export default function CoursesDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState('all');

  const allCourses: CourseDetail[] = Object.values(COURSES_DATA);

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesMode =
      selectedMode === 'all' ||
      (selectedMode === 'online' && (course.mode.includes('Online') || course.mode.includes('Both'))) ||
      (selectedMode === 'offline' && (course.mode.includes('Classroom') || course.mode.includes('Both')));

    return matchesCategory && matchesSearch && matchesMode;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* 1. HERO HEADER - Restored Premium Layout & Visual Richness */}
      <section className="bg-slate-900 pt-32 pb-20 text-center relative overflow-hidden text-white">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/95 via-[#0a192f]/85 to-slate-900 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/images/slider1.jpg')" }}
          ></div>
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#d4af37]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="container-custom relative z-10 fade-in-up">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping relative">
              <span className="absolute inset-0 bg-[#d4af37] rounded-full animate-none"></span>
            </span>
            <span>21 Years of Educational Excellence in Bangalore</span>
          </div>

          {/* Main Heading with Gradient Accent */}
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#ffe066] to-white">Premium Courses</span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-8 drop-shadow-md">
            Discover tailored programs designed to accelerate your fluency, whether for professional growth, exam excellence, or personal development.
          </p>

          {/* 4 Value Highlight Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-slate-200 mb-8 max-w-3xl mx-auto">
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/15">
              <span className="text-[#d4af37]">★</span> 25+ Specialized Programmes
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/15">
              <span className="text-[#d4af37]">🎯</span> British Council &amp; IDP Aligned
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/15">
              <span className="text-[#d4af37]">🌍</span> 18+ Nationalities
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/15">
              <span className="text-[#d4af37]">⭐</span> 4.9/5 Rating (1,000+ Reviews)
            </span>
          </div>

          {/* Premium Search Bar */}
          <div className="max-w-2xl mx-auto relative z-20">
            <div className="relative glass-dark p-1.5 sm:p-2 rounded-full border border-white/20 shadow-2xl backdrop-blur-xl flex items-center">
              <span className="pl-4 text-slate-400 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Search by course name, keyword, exam (e.g. IELTS, Spoken English, German)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-3 py-2 text-white placeholder-slate-400 text-sm focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-3 py-1 text-xs text-slate-400 hover:text-white rounded-full bg-white/10 mr-2 transition-colors shrink-0"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                className="px-5 sm:px-6 py-2.5 rounded-full bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] text-xs font-black uppercase tracking-wider transition-all shadow-md shrink-0"
              >
                Find Course
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTERS & CONTROLS */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 sm:top-20 z-30 shadow-sm backdrop-blur-md bg-white/95">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0a192f] text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mode Selector */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-medium">
              Showing <strong>{filteredCourses.length}</strong> programmes
            </span>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-medium">Format:</span>
              {[
                { id: 'all', label: 'All Modes' },
                { id: 'offline', label: '🏫 Campus' },
                { id: 'online', label: '💻 Online Live' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMode(m.id)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                    selectedMode === m.id
                      ? 'bg-[#d4af37] text-[#0a192f]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COURSES GRID */}
      <section className="container-custom pt-12">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
            <span className="text-5xl block mb-4">📚</span>
            <h3 className="text-xl font-bold text-slate-800">No matching courses found</h3>
            <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
              We could not find any programme matching &ldquo;{searchQuery}&rdquo;. Try another keyword or browse our full catalogue.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedMode('all');
              }}
              className="mt-6 px-6 py-2.5 bg-[#0a192f] text-white font-bold rounded-full text-xs hover:bg-[#162447] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((c) => (
              <div
                key={c.slug}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={c.heroImage}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 bg-[#0a192f]/90 text-[#d4af37] text-[11px] font-bold rounded-full backdrop-blur-md border border-[#d4af37]/30">
                        {c.categoryName}
                      </span>
                      <span className="px-2.5 py-0.5 bg-white/90 text-slate-800 text-[10px] font-bold rounded-full backdrop-blur-md">
                        {c.mode.includes('Both') ? 'Online & Campus' : c.mode}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-[11px] font-semibold text-slate-200">
                        ⏳ {c.duration}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0a192f] group-hover:text-[#d4af37] transition-colors line-clamp-2 leading-snug">
                      <Link href={`/courses/${c.slug}`}>{c.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {c.intro}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {c.benefits.slice(0, 2).map((b, bIdx) => (
                        <p key={bIdx} className="text-[11px] text-slate-500 flex items-center gap-1.5 truncate">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{b}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <Link
                    href={`/courses/${c.slug}`}
                    className="flex-1 py-2.5 bg-[#0a192f] hover:bg-[#162447] text-white text-xs font-bold rounded-xl text-center transition-colors shadow-sm"
                  >
                    View Details
                  </Link>
                  <a
                    href={`https://wa.me/918970506004?text=${encodeURIComponent(
                      `Hello Cambridge Academy, I would like to enquire about ${c.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center"
                    title="Enquire on WhatsApp"
                  >
                    💬
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. ADMISSIONS ASSISTANCE BANNER */}
      <section className="container-custom mt-20">
        <div className="bg-gradient-to-r from-[#0a192f] to-[#162447] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
              Unsure Which Course to Choose?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
              Book a Free Diagnostic Assessment &amp; Counselling
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our academic counselors will evaluate your current English proficiency level and recommend the ideal course track, batch timings, and timeline for your career or exam goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(
                    new CustomEvent('open-counselling-modal', {
                      detail: { course: 'General English / Diagnostic Assessment' },
                    })
                  );
                }
              }}
              className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-bold rounded-full text-xs shadow-lg transition-all hover:-translate-y-0.5"
            >
              Book Free Counselling Session
            </button>
            <a
              href="tel:08040943580"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-xs border border-white/20 transition-all text-center"
            >
              📞 Call 080-40943580
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
