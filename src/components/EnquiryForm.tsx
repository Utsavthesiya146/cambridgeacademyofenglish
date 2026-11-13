'use client';

import { useState } from 'react';
import { trackFormSubmission, trackCourseEnquiry, trackWhatsAppClick } from '@/lib/analytics';

interface EnquiryFormProps {
  initialCourse?: string;
  source?: string;
  compact?: boolean;
}

const COURSES_LIST = [
  'Spoken English Online',
  'Spoken English Offline (Classroom)',
  'IELTS Preparation (Academic / General)',
  'PTE Academic Preparation',
  'OET Preparation (Occupational English)',
  'CELPIP Preparation',
  'TOEFL iBT Preparation',
  'LanguageCert International ESOL',
  'CAE Preparation (C1 Advanced)',
  'CPE Preparation (C2 Proficiency)',
  'General English for Adults',
  'Professional English for Workplace',
  'Business Communication',
  'Diploma in English Language (Foreign Nationals)',
  'Master Diploma in English Language',
  'TEFL / TESOL Teacher Training',
  'TKT – Teaching Knowledge Test',
  'German Language (A1-B2)',
  'French Language (DELF A1-B2)',
  'Spanish Language (DELE A1-B2)',
  'Chinese (Mandarin) Language',
  'Kids Academic English',
  'A2 Key for Schools (KET)',
  'B1 Preliminary for Schools (PET)',
];

export default function EnquiryForm({
  initialCourse = 'Spoken English Offline (Classroom)',
  source = 'Course Landing Page',
  compact = false,
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: initialCourse,
    learningMode: 'Offline',
    message: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'enquiry',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          leadSource: source,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        trackFormSubmission(formData.course, 'Enquiry Form');
        trackCourseEnquiry(formData.course, typeof window !== 'undefined' ? window.location.href : '');
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network connection error. Please connect with us directly on WhatsApp.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
          ✓
        </div>
        <h3 className="text-xl font-bold text-emerald-900 mb-2">Enquiry Received!</h3>
        <p className="text-sm text-emerald-700 leading-relaxed max-w-md mx-auto mb-6">
          Thank you, <strong>{formData.name}</strong>. Our senior academic counselor will call you shortly on <strong>{formData.phone}</strong> to guide you through batch timings, syllabus, and course details.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={`https://wa.me/918970506004?text=${encodeURIComponent(
              `Hi, I just submitted an enquiry for ${formData.course}. Name: ${formData.name}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('Enquiry Success Screen')}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#25D366] text-white font-bold rounded-xl text-xs hover:bg-[#20ba59] transition-colors"
          >
            💬 Fast-Track on WhatsApp
          </a>
          <button
            onClick={() => {
              setStatus('idle');
              setFormData({ ...formData, name: '', phone: '', email: '', message: '' });
            }}
            className="px-6 py-2.5 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 rounded-xl transition-colors"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 ${
        compact ? 'max-w-md' : 'w-full'
      }`}
    >
      <div className="mb-6">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#0a192f] px-3 py-1 rounded-full inline-block mb-2">
          Admissions Open 2026
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-[#0a192f]">
          Enquire About This Course
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Get personal counselling, syllabus breakdown, and batch schedule.
        </p>
      </div>

      {/* Spam Honeypot - hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_check">Leave empty</label>
        <input
          id="website_check"
          type="text"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a192f] bg-slate-50/50"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Mobile Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="10-digit mobile"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a192f] bg-slate-50/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a192f] bg-slate-50/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Course Interested In <span className="text-rose-500">*</span>
            </label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full px-3 py-2.5 text-xs font-medium border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a192f] bg-white text-slate-800"
            >
              {COURSES_LIST.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Preferred Learning Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Offline', 'Online'].map((mode) => (
                <button
                  type="button"
                  key={mode}
                  onClick={() => setFormData({ ...formData, learningMode: mode })}
                  className={`py-2 text-xs font-bold rounded-xl border transition-all text-center ${
                    formData.learningMode === mode
                      ? 'bg-[#0a192f] text-white border-[#0a192f]'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {mode === 'Offline' ? '🏫 Campus' : '💻 Online'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Questions / Specific Requirements
          </label>
          <textarea
            rows={3}
            placeholder="Let us know your current level, target exam score, or preferred schedule..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0a192f] bg-slate-50/50"
          ></textarea>
        </div>

        {status === 'error' && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3.5 bg-gradient-to-r from-[#0a192f] to-[#162447] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              Submitting Enquiry...
            </>
          ) : (
            'Book My Free Consultation Session →'
          )}
        </button>

        <p className="text-[10px] text-center text-slate-400">
          🔒 100% Privacy Guaranteed. Your details are safe and never shared with third parties.
        </p>
      </div>
    </form>
  );
}

