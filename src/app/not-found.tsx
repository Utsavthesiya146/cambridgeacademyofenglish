import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-[70vh] flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-primary mb-4 tracking-tighter opacity-10">404</h1>
        <div className="relative -mt-16 md:-mt-20 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Page Not Found</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <p className="text-slate-600 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="bg-primary text-white hover:bg-primary-light transition-colors font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-md shadow-lg flex items-center gap-2">
            <span>←</span> Back to Homepage
          </Link>
          <Link href="/courses" className="bg-white text-primary border border-slate-200 hover:border-accent hover:text-accent transition-colors font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-md shadow-sm">
            View Our Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
