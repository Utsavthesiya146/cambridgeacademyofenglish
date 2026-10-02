import React from 'react';

export const metadata = {
  title: 'Refund Policy | Cambridge Academy of English',
  description: 'Refund Policy of Cambridge Academy of English',
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container-custom max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Refund Policy</h1>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p className="text-lg">
            At Cambridge Academy of English, we strive to provide the best possible learning experience. We understand that circumstances may change, and this policy outlines the conditions under which refunds may be granted.
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">1</span>
              General Refund Rules
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>Refund requests must be submitted in writing to our administrative office via email or physical letter.</li>
              <li>Registration fees are strictly non-refundable under any circumstances.</li>
              <li>Approved refunds will be processed within 14-21 working days to the original payment method.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">2</span>
              Course Cancellations by Student
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li><strong className="text-primary">Before Course Commencement:</strong> If a student cancels their enrollment at least 7 days before the course start date, a 90% refund of the tuition fee will be issued (excluding registration fee).</li>
              <li><strong className="text-primary">After Course Commencement:</strong> No refunds will be provided once the course has started, regardless of the student's attendance.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">3</span>
              Cancellations by the Academy
            </h2>
            <p className="mb-4">
              In the rare event that Cambridge Academy of English has to cancel a course, enrolled students will be offered the choice of a full refund or a transfer to an alternative course.
            </p>
          </div>
          
          <div className="mt-10 bg-primary/5 p-6 rounded-xl border border-primary/10">
             <p className="text-sm text-slate-700 italic">
               Note: This policy is subject to change. Please contact our administrative office for the most current information regarding refunds.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
