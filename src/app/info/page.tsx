import React from 'react';

export const metadata = {
  title: 'Course Information | Cambridge Academy of English',
  description: 'Detailed information about our English language courses.',
};

export default function CourseInfo() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container-custom max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Course Information</h1>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p className="text-lg text-center">
            Detailed information about our course structure, timings, and batches will be updated here soon.
          </p>
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 shadow-sm mt-10 text-center">
             <p className="text-slate-700 font-medium mb-6 text-lg">In the meantime, you can explore our courses directly:</p>
             <a href="/courses" className="inline-block bg-accent text-primary font-bold px-8 py-4 rounded-xl hover:bg-accent/90 transition-all hover:-translate-y-1 shadow-lg">
               View All Courses
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
