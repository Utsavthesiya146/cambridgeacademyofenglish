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
      {/* 1. HERO HEADER - CLEAN & CONCISE */}
      <section className="bg-[#0a192f] pt-28 pb-14 text-center relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none"></div>
        <div className="container-custom relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#d4af37]/40 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
            <span>★</span> 21 Years of Educational Excellence in Bangalore
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-3 tracking-tight">
            Comprehensive Course Directory
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
            Explore 25 world-class English language, exam coaching, and foreign language programmes taught by Cambridge &amp; CELTA certified faculty in Bangalore and live online.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & FILTER CONTROLS (SEPARATE SECTION BELOW HERO) */}
      <section className="bg-white border-b border-slate-200 py-6 shadow-sm">
        <div className="container-custom">
          {/* Top row: Search Bar & Format Filter & Result count */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-4">
            <div className="relative flex-1 max-w-md">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search by course name (e.g. IELTS, Spoken English, German)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a192f] text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center justify-between md:justify-end gap-3 text-xs">
              <span className="text-slate-500 font-medium">
                Showing <strong>{filteredCourses.length}</strong> of <strong>{allCourses.length}</strong> programmes
              </span>
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                {[
                  { id: 'all', label: 'All Formats' },
                  { id: 'offline', label: '🏫 Campus' },
                  { id: 'online', label: '💻 Online Live' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMode(m.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedMode === m.id
                        ? 'bg-[#0a192f] text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0a192f] text-[#d4af37] shadow-md border border-[#d4af37]/40'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
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
