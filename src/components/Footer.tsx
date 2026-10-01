import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#233766] text-slate-300 py-12 border-t-4 border-gold text-sm relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase">CONNECT</h4>
            <ul className="flex gap-4">
              <li><a href="https://www.facebook.com/cambridgeacademyofenglish/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold text-lg">FB</a></li>
              <li><a href="https://twitter.com/CAEIndia" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold text-lg">TW</a></li>
              <li><a href="https://www.instagram.com/cambridge_academy_of_english/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold text-lg">IG</a></li>
              <li><a href="https://www.linkedin.com/in/cambridge-academy-of-english-384611105/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold text-lg">LI</a></li>
              <li><a href="https://www.youtube.com/channel/UCRdBd4JLtRcqKTkyHWZJMKQ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold text-lg">YT</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase">Request for PO/Invoice</h4>
            <a href="#" className="inline-block p-4 bg-white/10 rounded hover:bg-white/20 transition-colors">📄 Invoice</a>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase">WEEKLY NEWSLETTER</h4>
            <form className="flex">
              <input type="email" placeholder="Email Address" className="px-3 py-2 w-full text-navy outline-none" />
              <button className="bg-gold text-navy font-bold px-3 py-2">Go</button>
            </form>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase">WE ACCEPT</h4>
            <div className="flex flex-wrap gap-2 text-white">
              <span>Paypal</span> | <span>Amex</span> | <span>Maestro</span> | <span>Mastercard</span> | <span>Visa</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8 text-center text-slate-400">
          <div><span className="mr-2">🇮🇳</span> INDIA</div>
          <div><span className="mr-2">🇸🇦</span> Saudi Arabia</div>
          <div><span className="mr-2">🇾🇪</span> Yemen</div>
          <div><span className="mr-2">🇹🇷</span> Turkey</div>
          <div><span className="mr-2">🇳🇬</span> Nigeria</div>
          <div><span className="mr-2">🇯🇴</span> Jordan</div>
          <div><span className="mr-2">🇨🇮</span> Ivory Coast</div>
          <div><span className="mr-2">🇮🇷</span> Iran</div>
          <div><span className="mr-2">🇲🇳</span> Mongolia</div>
          <div><span className="mr-2">🇰🇷</span> Korea</div>
          <div><span className="mr-2">🇹🇭</span> Thailand</div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <ul className="flex flex-wrap gap-4 text-slate-400">
            <li><Link href="/terms-conditions" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy & Disclaimer</Link></li>
            <li><Link href="/refund-policy" className="hover:text-white">Cancellation & Refund Policy</Link></li>
            <li><Link href="/sitemap" className="hover:text-white">Site map</Link></li>
            <li><Link href="/info" className="hover:text-white">Course Info's</Link></li>
            <li><Link href="/blog/feed" className="hover:text-white">RSS - Posts</Link></li>
          </ul>
          <p className="text-slate-400">© 2020 Cambridgeacademyofenglish. All Rights Reserved</p>
        </div>
      </div>

      {/* Floating Bottom Bar (Fixed) */}
      <div className="fixed bottom-0 left-0 w-full bg-navy border-t border-navy-light py-3 px-4 hidden md:block z-40">
        <div className="container-custom flex justify-center gap-8">
          <button className="bg-navy text-white hover:text-gold flex items-center gap-2">
            <span>✉️</span> Drop A Query
          </button>
          <button className="text-white hover:text-gold flex items-center gap-2">
            <span>📞</span> Request A Call Back
          </button>
          <a href="mailto:info@cambridgeacademyofenglish.com" className="text-white hover:text-gold flex items-center gap-2">
            <span>📧</span> info@cambridgeacademyofenglish.com
          </a>
        </div>
      </div>
    </footer>
  );
}
