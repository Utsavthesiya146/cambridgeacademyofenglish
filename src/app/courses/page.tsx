'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CoursesPage() {
  const [filter, setFilter] = useState('all');

  const courses = [
    { 
      title: 'Learn English Speaking Online', 
      category: 'online', 
      badge: 'Online Live', 
      desc: 'Elevate speaking skills with live interactive guidance from expert mentors.',
      img: '/images/course-online.jpg',
      link: '/courses/learn-english-speaking-course-online'
    },
    { 
      title: 'Spoken English Classes (Campus)', 
      category: 'spoken', 
      badge: 'Classroom', 
      desc: 'Boost confidence with immersive classroom sessions and vocabulary drills.',
      img: '/images/course-spoken.jpg',
      link: '/courses/class-room-english-course'
    },
    { 
      title: 'Exam Prep (IELTS / PTE / TOEFL)', 
      category: 'exam', 
      badge: '8.5 Band Target', 
      desc: 'Comprehensive test preparation designed to maximize scores with mock exams.',
      img: '/images/course-exam.jpg',
      link: '/courses/exam-preparation-course'
    },
    { 
      title: 'Foreign Language Training', 
      category: 'foreign', 
      badge: '7 Languages', 
      desc: 'Learn Spanish, German, French, Italian, Japanese, Chinese, or Arabic.',
      img: '/images/course-foreign.jpg',
      link: '/courses/foreign-language-courses-in-bangalore-india'
    },
    { 
      title: 'TEFL / TESOL Teacher Training', 
      category: 'teacher', 
      badge: 'Certification', 
      desc: 'Empower your educational career with international teaching certification.',
      img: '/images/course-teacher.jpg',
      link: '/courses/teacher-training-in-banglore'
    },
    { 
      title: 'Cambridge Exam Preparation', 
      category: 'cambridge', 
      badge: 'Credentials', 
      desc: 'Specialized coaching for Cambridge English Qualifications (B2 First, C1 Advanced).',
      img: '/images/course-cambridge.jpg',
      link: '/courses/Cambridge-Exam'
    },
  ];

  const filteredCourses = filter === 'all' ? courses : courses.filter(c => c.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Hero */}
      <div className="bg-primary pt-24 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container-custom relative z-10 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Our Premium Courses</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Discover tailored programs designed to accelerate your fluency, whether for professional growth, exam excellence, or personal development.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container-custom mt-12 mb-12 fade-in-up stagger-1">
        <div className="flex flex-wrap gap-4 justify-center">
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
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${filter === btn.id ? 'bg-primary text-white shadow-lg scale-105' : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <div key={idx} className="glass-card p-3 flex flex-col group fade-in-up stagger-2">
              <Link href={course.link} className="relative h-64 block overflow-hidden rounded-[1.25rem]">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url(${course.img})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                  {course.badge}
                </div>
              </Link>
              
              <div className="px-6 py-8 flex flex-col flex-grow">
                <Link href={course.link}>
                  <h3 className="text-2xl font-extrabold text-slate-800 mb-3 tracking-tight group-hover:text-accent transition-colors">{course.title}</h3>
                </Link>
                <p className="text-slate-500 text-sm mb-8 flex-grow leading-relaxed">{course.desc}</p>
                <Link href={course.link} className="btn-premium-outline w-full group-hover:bg-primary group-hover:text-white">
                  Explore Course
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-medium">
            No courses found for this category.
          </div>
        )}
      </div>
    </div>
  );
}

