'use client';

import { useState, useEffect } from 'react';
import EnquiryForm from './EnquiryForm';

export default function CounsellingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetCourse, setTargetCourse] = useState('Spoken English Offline (Classroom)');

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ course?: string }>;
      if (customEvent.detail && customEvent.detail.course) {
        setTargetCourse(customEvent.detail.course);
      }
      setIsOpen(true);
    };

    window.addEventListener('open-counselling-modal', handleOpen);
    return () => window.removeEventListener('open-counselling-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center text-lg font-bold transition-colors z-10"
          aria-label="Close modal"
        >
          ✕
        </button>

        <EnquiryForm
          initialCourse={targetCourse}
          source="Counselling Popup Modal"
          compact={false}
        />
      </div>
    </div>
  );
}

