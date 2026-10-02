import Link from 'next/link';

export const metadata = {
  title: 'Login | Cambridge Academy of English',
  description: 'Login to your Cambridge Academy of English student account.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 py-20">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container-custom relative z-10 fade-in-up">
        <div className="max-w-md mx-auto">
          {/* Logo Area */}
          <div className="text-center mb-10">
            <Link href="/" className="inline-block group">
              <div className="bg-white p-3 rounded-2xl shadow-md inline-block mb-4 group-hover:shadow-lg transition-all">
                <img src="/images/logo.png" alt="Cambridge Academy" className="h-16 w-auto object-contain" />
              </div>
              <h2 className="text-3xl font-black text-primary tracking-tight">Welcome Back</h2>
              <p className="text-slate-500 mt-2">Log in to your student dashboard</p>
            </Link>
          </div>

          {/* Login Form Card */}
          <div className="glass-card bg-white/90 backdrop-blur-xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary"></div>

            <form action="#" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide text-xs">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors sm:text-sm" 
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide text-xs">Password</label>
                  <Link href="/forgot-password" className="text-xs font-semibold text-primary hover:text-accent transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors sm:text-sm" 
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input 
                  id="remember-me" 
                  name="remember-me" 
                  type="checkbox" 
                  className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded cursor-pointer accent-accent" 
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 cursor-pointer">
                  Remember me
                </label>
              </div>

              <div>
                <button 
                  type="submit" 
                  className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-primary bg-accent hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 uppercase tracking-wider"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                Don't have an account?{' '}
                <Link href="/register" className="font-bold text-primary hover:text-accent transition-colors">
                  Contact Admissions
                </Link>
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-slate-400">
            <Link href="/" className="hover:text-primary transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
