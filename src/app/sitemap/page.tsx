import Link from 'next/link';

export const metadata = {
  title: 'Sitemap | Cambridge Academy of English',
  description: 'Sitemap for Cambridge Academy of English website.',
};

export default function SitemapPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary pt-24 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container-custom relative z-10 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Sitemap</h1>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Find your way around the Cambridge Academy of English website.
          </p>
        </div>
      </div>

      <div className="container-custom relative mt-8 z-20 fade-in-up stagger-1">
        <div className="glass-card bg-white p-8 md:p-12 shadow-2xl rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-4 border-b border-slate-100 pb-2">Main Pages</h3>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
                <li><Link href="/admission" className="hover:text-accent transition-colors">Admission</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                <li><Link href="/certificate" className="hover:text-accent transition-colors">Certificate Verification</Link></li>
                <li><Link href="/book" className="hover:text-accent transition-colors">Book a Course</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4 border-b border-slate-100 pb-2">Top Courses</h3>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><Link href="/courses/learn-english-speaking-course-online" className="hover:text-accent transition-colors">Spoken English</Link></li>
                <li><Link href="/courses/ielts-coaching-in-bangalore" className="hover:text-accent transition-colors">IELTS & PTE Preparation</Link></li>
                <li><Link href="/courses/foreign-language-courses" className="hover:text-accent transition-colors">Foreign Languages</Link></li>
                <li><Link href="/courses/Diploma-in-English-Language" className="hover:text-accent transition-colors">Diploma in English Language</Link></li>
                <li><Link href="/courses/teacher-training" className="hover:text-accent transition-colors">Teacher Training</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4 border-b border-slate-100 pb-2">Legal & Info</h3>
              <ul className="space-y-2 text-slate-600 font-medium">
                <li><Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/refund-policy" className="hover:text-accent transition-colors">Refund Policy</Link></li>
                <li><Link href="/info" className="hover:text-accent transition-colors">Important Information</Link></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
