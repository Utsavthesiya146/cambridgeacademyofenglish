import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-400 py-16 border-t-[6px] border-accent text-sm relative mt-20">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4 pr-8">
            <Link href="/" className="flex items-center gap-4 group mb-6 inline-flex">
              <div className="relative overflow-hidden rounded-xl bg-white p-2 shadow-lg group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <img src="/images/logo.png" alt="Cambridge Academy" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">Cambridge Academy</span>
                <span className="text-xs text-accent font-semibold tracking-widest uppercase">of English</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8">
              India's premier English Language & Foreign Language Training Institute in Kammanahalli, Bangalore. Empowering global communication since 2010.
            </p>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">CONNECT WITH US</h4>
            <ul className="flex gap-4">
              {['FB', 'TW', 'IG', 'LI', 'YT'].map(social => (
                <li key={social}>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-lg">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Request for PO/Invoice</a></li>
              <li><Link href="/terms-conditions" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Refund Policy</Link></li>
              <li><Link href="/info" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Course Info&apos;s</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">Global Presence</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
              <div className="flex items-center gap-2"><span className="text-lg">🇮🇳</span> INDIA</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇸🇦</span> Saudi Arabia</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇾🇪</span> Yemen</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇹🇷</span> Turkey</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇳🇬</span> Nigeria</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇯🇴</span> Jordan</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇰🇷</span> Korea</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇹🇭</span> Thailand</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs">WEEKLY NEWSLETTER</h4>
            <p className="text-xs mb-4">Subscribe to receive English learning tips and updates.</p>
            <form className="flex mb-8">
              <input type="email" placeholder="Email Address" className="px-4 py-3 w-full bg-white/5 border border-white/10 rounded-l-lg text-white outline-none focus:border-accent transition-colors" />
              <button className="bg-accent text-primary font-bold px-6 py-3 rounded-r-lg hover:bg-accent-hover transition-colors">Go</button>
            </form>

            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">WE ACCEPT</h4>
            <div className="flex flex-wrap gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="px-3 py-1 bg-white rounded text-primary font-bold text-xs">Visa</span>
              <span className="px-3 py-1 bg-white rounded text-primary font-bold text-xs">Mastercard</span>
              <span className="px-3 py-1 bg-white rounded text-primary font-bold text-xs">PayPal</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p className="text-slate-500">© 2024 Cambridgeacademyofenglish. All Rights Reserved</p>
          <div className="flex gap-6 text-slate-500">
            <Link href="/sitemap" className="hover:text-white transition-colors">Site map</Link>
            <Link href="/blog/feed" className="hover:text-white transition-colors">RSS - Posts</Link>
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar (Fixed) */}
      <div className="fixed bottom-0 left-0 w-full bg-primary-light/90 backdrop-blur-lg border-t border-white/10 py-3 px-4 hidden md:block z-40 translate-y-full hover:translate-y-0 transition-transform duration-300">
        <div className="container-custom flex justify-center gap-12">
          <button className="text-white hover:text-accent flex items-center gap-2 font-medium text-sm transition-colors">
            <span className="text-lg">✉️</span> Drop A Query
          </button>
          <button className="text-white hover:text-accent flex items-center gap-2 font-medium text-sm transition-colors">
            <span className="text-lg">📞</span> Request A Call Back
          </button>
          <a href="mailto:info@cambridgeacademyofenglish.com" className="text-white hover:text-accent flex items-center gap-2 font-medium text-sm transition-colors">
            <span className="text-lg">📧</span> info@cambridgeacademyofenglish.com
          </a>
        </div>
      </div>
      
      {/* Decorative Tab to show bottom bar on hover */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-primary-light text-white px-6 py-1 rounded-t-xl text-xs font-bold tracking-widest cursor-pointer hidden md:flex items-center gap-2 hover:bg-accent hover:text-primary transition-colors z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
        <span>CONTACT US</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
      </div>
    </footer>
  );
}
