'use client';

import { useState } from 'react';
import { trackFormSubmission, trackCallbackRequest } from '@/lib/analytics';

interface CallbackFormProps {
  initialCourse?: string;
}

export default function CallbackForm({
  initialCourse = 'Spoken English Offline (Classroom)',
}: CallbackFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9 AM - 12 PM)');
  const [course, setCourse] = useState(initialCourse);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          course,
          preferredTime,
          type: 'callback',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          leadSource: 'Quick Callback Widget',
          honeypot,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        trackFormSubmission(course, 'Callback Request');
        trackCallbackRequest(course);
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Failed to request callback.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center text-emerald-900">
        <span className="text-3xl">📞</span>
        <h4 className="font-bold text-base mt-2">Callback Scheduled!</h4>
        <p className="text-xs text-emerald-700 mt-1">
          Our senior counsellor will call you on <strong>{phone}</strong> during {preferredTime}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
        <h4 className="text-sm font-bold text-[#0a192f] uppercase tracking-wider">
          Request an Instant Callback
        </h4>
      </div>

      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <input
          type="text"
          required
          placeholder="Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a192f]"
        />
      </div>

      <div>
        <input
          type="tel"
          required
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a192f]"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <select
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="w-full px-2.5 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a192f] bg-white text-slate-700"
          >
            <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
            <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
            <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
            <option value="Immediate / As soon as possible">As soon as possible</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Course Name"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0a192f]"
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="text-[11px] text-rose-600 font-medium">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-2.5 bg-[#0a192f] hover:bg-[#162447] text-white text-xs font-bold rounded-lg transition-colors shadow-sm disabled:opacity-50"
      >
        {status === 'loading' ? 'Scheduling...' : 'Request Callback'}
      </button>
    </form>
  );
}

