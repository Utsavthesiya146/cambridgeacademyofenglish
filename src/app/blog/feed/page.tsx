import Link from 'next/link';

export const metadata = {
  title: 'RSS Posts | Cambridge Academy of English',
  description: 'Blog feeds and latest updates from Cambridge Academy of English.',
};

export default function BlogFeedPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-primary pt-24 pb-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container-custom relative z-10 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Blog Updates</h1>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Stay tuned for our latest articles, English learning tips, and news.
          </p>
        </div>
      </div>

      <div className="container-custom relative -mt-8 z-20 fade-in-up stagger-1">
        <div className="glass-card bg-white p-8 md:p-16 shadow-2xl rounded-3xl text-center">
          <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
            📰
          </div>
          <h2 className="text-3xl font-extrabold text-primary mb-4">No Posts Available Yet</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
            We are currently working on curating high-quality content for our students. Check back soon for exciting English learning tips, news, and academy updates!
          </p>
          <Link href="/" className="btn-premium inline-block px-8 py-3">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
