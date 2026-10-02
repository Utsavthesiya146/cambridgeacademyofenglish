import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-24 border-t-[6px] border-accent text-sm relative mt-20">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4 pr-8">
            <Link href="/" className="flex items-center gap-3 group mb-6 inline-flex">
              <div className="bg-white rounded-xl p-2 shadow-lg group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <img src="/images/logo.png" alt="Cambridge Academy" className="h-12 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">Cambridge Academy</span>
                <span className="text-xs text-accent font-bold tracking-[0.2em] uppercase">of English</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8">
              India's premier English Language & Foreign Language Training Institute in Kammanahalli, Bangalore. Empowering global communication since 2010.
            </p>
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">CONNECT WITH US</h4>
            <ul className="flex gap-4">
              <li>
                <a href="https://www.facebook.com/cambridgeacademyofenglish/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/CAEIndia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cambridge_academy_of_english/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cambridge-academy-of-english-384611105/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCRdBd4JLtRcqKTkyHWZJMKQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary hover:border-accent hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" /></svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Request for PO/Invoice</a></li>
              <li><Link href="/terms-conditions" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Refund Policy</Link></li>
              <li><Link href="/info" className="hover:text-accent transition-colors flex items-center gap-2"><span className="text-accent/50 text-xs">▹</span> Course Info&apos;s</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">Global Presence</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
              <div className="flex items-center gap-2"><span className="text-lg">🇮🇳</span> INDIA</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇸🇦</span> Saudi Arabia</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇾🇪</span> Yemen</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇹🇷</span> Turkey</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇳🇬</span> Nigeria</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇯🇴</span> Jordan</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇨🇮</span> Ivory Coast</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇮🇷</span> Iran</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇲🇳</span> Mongolia</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇰🇷</span> Korea</div>
              <div className="flex items-center gap-2"><span className="text-lg">🇹🇭</span> Thailand</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">WEEKLY NEWSLETTER</h4>
            <p className="text-xs mb-4">Subscribe to receive English learning tips and updates.</p>
            <form action="/contact" method="GET" className="flex mb-8">
              <input type="email" placeholder="Email Address" className="px-4 py-3 w-full bg-white/5 border border-white/10 rounded-l-lg text-white outline-none focus:border-accent transition-colors" />
              <button className="bg-accent text-primary font-bold px-6 py-3 rounded-r-lg hover:bg-accent-hover transition-colors">Go</button>
            </form>

            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-xs">WE ACCEPT</h4>
            <div className="flex flex-wrap gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="px-3 py-1 bg-white rounded text-primary font-bold text-xs">Visa</span>
              <span className="px-3 py-1 bg-white rounded text-primary font-bold text-xs">Mastercard</span>
              <span className="px-3 py-1 bg-white rounded text-primary font-bold text-xs">PayPal</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs font-medium">
          <p className="text-slate-500">© 2020 Cambridgeacademyofenglish. All Rights Reserved</p>
          
          <div className="flex items-center gap-2 text-slate-400 text-[13px] bg-white/5 px-5 py-2.5 rounded-full border border-white/10 shadow-md">
            Designed & Developed with <span className="text-red-500 animate-pulse text-sm">♥️</span> by 
            <a href="https://webhostingbaba.com/" target="_blank" rel="noopener noreferrer" className="ml-1 hover:scale-105 transition-transform flex items-center">
              <img src="/images/hosting-baba-logo.png" alt="Hosting Baba" className="h-6 w-auto object-contain rounded-sm" />
            </a>
          </div>

          <div className="flex gap-6 text-slate-500">
            <Link href="/sitemap" className="hover:text-white transition-colors">Site map</Link>
            <Link href="/blog/feed" className="hover:text-white transition-colors">RSS - Posts</Link>
          </div>
        </div>
      </div>

      {/* Floating Bottom Contact Section */}
      <div className="fixed bottom-0 left-0 w-full z-50 hidden md:flex flex-col items-center group">
        {/* Decorative Tab */}
        <div className="bg-primary-light text-white px-6 py-1.5 rounded-t-xl text-xs font-bold tracking-widest cursor-pointer flex items-center gap-2 group-hover:bg-accent group-hover:text-primary transition-all duration-300 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
          <span>CONTACT US</span>
          <svg className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path></svg>
        </div>

        {/* Expanding Content */}
        <div className="w-full max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-500 ease-in-out">
          <div className="w-full bg-primary-light/95 backdrop-blur-lg border-t border-accent py-3 px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
            <div className="container-custom flex justify-center gap-12">
              <Link href="/contact" className="text-white hover:text-accent flex items-center gap-2 font-medium text-sm transition-colors">
                <span className="text-lg">✉️</span> Drop A Query
              </Link>
              <a href="tel:080-40943580" className="text-white hover:text-accent flex items-center gap-2 font-medium text-sm transition-colors">
                <span className="text-lg">📞</span> Request A Call Back
              </a>
              <a href="mailto:info@cambridgeacademyofenglish.com" className="text-white hover:text-accent flex items-center gap-2 font-medium text-sm transition-colors">
                <span className="text-lg">📧</span> info@cambridgeacademyofenglish.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



