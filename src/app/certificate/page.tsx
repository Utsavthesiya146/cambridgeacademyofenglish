export default function CertificatePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/slider3.jpg')" }}></div>
        <div className="container-custom relative z-20 pt-20 text-center fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
            Verify Your Certificate
          </h1>
          <p className="text-xl text-slate-300 font-light drop-shadow-md max-w-2xl mx-auto">
            Authenticity and excellence guaranteed. Enter your unique certificate ID below to verify your Cambridge Academy of English credentials.
          </p>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-24 bg-slate-50 relative -mt-20 z-30">
        <div className="container-custom max-w-3xl">
          <div className="glass-card bg-white p-6 md:p-14 shadow-2xl fade-in-up stagger-1">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-primary mb-2">Certificate Verification</h2>
              <p className="text-slate-500">Ensure the validity of your awarded certificate</p>
            </div>
            
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Certificate Registration No.</label>
                <input 
                  type="text" 
                  placeholder="e.g. CAE/2024/00123" 
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all font-medium text-slate-800"
                />
              </div>
              <button type="button" className="btn-premium w-full shadow-[0_4px_15px_rgba(212,175,55,0.3)]">
                Verify Now
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-500">
                Facing issues? Contact support at <a href="mailto:info@cambridgeacademyofenglish.com" className="text-primary font-bold hover:text-accent break-all">info@cambridgeacademyofenglish.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
