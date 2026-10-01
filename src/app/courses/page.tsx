'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CoursesPage() {
  const [filter, setFilter] = useState('all');

  const courses = [
    { title: 'Learn English Speaking Online', category: 'online', badge: 'Online Live', desc: 'Elevate speaking skills with live interactive guidance from expert mentors.' },
    { title: 'Spoken English Classes (Campus)', category: 'spoken', badge: 'Classroom', desc: 'Boost confidence with immersive classroom sessions and vocabulary drills.' },
    { title: 'Exam Prep (IELTS / PTE / TOEFL)', category: 'exam', badge: '8.5 Band Target', desc: 'Comprehensive test preparation designed to maximize scores with mock exams.' },
    { title: 'Foreign Language Training', category: 'foreign', badge: '7 Languages', desc: 'Learn Spanish, German, French, Italian, Japanese, Chinese, or Arabic.' },
    { title: 'TEFL / TESOL Teacher Training', category: 'teacher', badge: 'Certification', desc: 'Empower your educational career with international teaching certification.' },
    { title: 'Cambridge Exam Preparation', category: 'cambridge', badge: 'Credentials', desc: 'Specialized coaching for Cambridge English Qualifications (B2 First, C1 Advanced).' },
  ];

  const filteredCourses = filter === 'all' ? courses : courses.filter(c => c.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="bg-navy py-16 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Courses</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover tailored programs designed to accelerate your fluency, whether for professional growth, exam excellence, or personal development.
          </p>
        </div>
      </div>

      <div className="container-custom mt-12 mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { id: 'all', label: 'All Courses' },
            { id: 'online', label: 'Online Spoken' },
            { id: 'spoken', label: 'Campus Spoken' },
            { id: 'exam', label: 'Exam Prep' },
            { id: 'foreign', label: 'Foreign Languages' },
            { id: 'teacher', label: 'Teacher Training' }
          ].map(btn => (
            <button 
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${filter === btn.id ? 'bg-navy text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              <div className="h-48 bg-slate-200 relative">
                 <div className="absolute top-4 left-4 bg-navy text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{course.badge}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-navy mb-3">{course.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{course.desc}</p>
                <Link href="/contact" className="btn btn-outline w-full py-2">Enquire Now</Link>
              </div>
            </div>
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No courses found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
