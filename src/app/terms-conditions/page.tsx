import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | Cambridge Academy of English',
  description: 'Terms and Conditions of Cambridge Academy of English',
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container-custom max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Terms & Conditions</h1>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p className="text-lg">
            Welcome to Cambridge Academy of English. These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">1</span>
              Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing this website and enrolling in our courses, we assume you accept these terms and conditions in full. Do not continue to use Cambridge Academy of English's website or services if you do not accept all of the terms and conditions stated on this page.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">2</span>
              Course Enrollment & Fees
            </h2>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>All course fees must be paid in full before the commencement of the course unless an installment plan has been explicitly agreed upon in writing.</li>
              <li>Fees once paid are non-transferable to another individual.</li>
              <li>We reserve the right to change our fee structure at any time, but this will not affect students who have already enrolled and paid.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">3</span>
              Code of Conduct
            </h2>
            <p className="mb-4">
              Students are expected to maintain a professional and respectful demeanor at all times. Any form of harassment, discrimination, or disruptive behavior may result in immediate dismissal from the course without a refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
