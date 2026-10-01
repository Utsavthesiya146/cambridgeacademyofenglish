import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cambridge Academy of English",
  description: "Learn about the teaching methodology, faculty, and legacy of Cambridge Academy of English in Bangalore.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="container-custom text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">About Cambridge Academy</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Since 2010, we have been Bangalore&apos;s premier institute for English language acquisition, exam preparation, and foreign language training.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Mission & Vision</h2>
            <p className="text-slate-700 mb-8 leading-relaxed">
              We combine world-class infrastructure, personalized attention, and proven communicative methodologies to help students achieve linguistic excellence. Whether you are aiming for a band 8.5 in IELTS or learning a new foreign language, our certified faculty ensures you reach your goals.
            </p>

            <h2 className="text-3xl font-bold text-navy mb-6 mt-12">Institutional Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-navy text-xl mb-3">Authorized Partner</h4>
                <p className="text-slate-600">Official registration partner for British Council, IDP, and Cambridge ELT exam preparations.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-navy text-xl mb-3">Proven Methods</h4>
                <p className="text-slate-600">Time-tested tips and techniques to help candidates achieve top scores on IELTS and PTE.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-navy text-xl mb-3">Intensive Small Batches</h4>
                <p className="text-slate-600">Focused instruction in smaller group sizes guaranteeing personalized attention.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-navy text-xl mb-3">Global Community</h4>
                <p className="text-slate-600">A diverse, multicultural learning ecosystem with students from 18+ countries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
