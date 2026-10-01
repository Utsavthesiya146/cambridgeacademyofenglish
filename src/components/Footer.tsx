import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-slate-300 py-16 border-t-4 border-gold">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-navy font-bold text-xl">
                C
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">Cambridge Academy</span>
                <span className="text-xs text-gold font-semibold tracking-wider uppercase">of English</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              India&apos;s premier English Language & Foreign Language Training Institute in Kammanahalli, Bangalore. Empowering students since 2010.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="text-sm hover:text-gold transition-colors">Courses</Link></li>
              <li><Link href="/test" className="text-sm hover:text-gold transition-colors">Placement Test</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Programs</h4>
            <ul className="space-y-3">
              <li><Link href="/courses" className="text-sm hover:text-gold transition-colors">Spoken English</Link></li>
              <li><Link href="/courses" className="text-sm hover:text-gold transition-colors">IELTS & PTE Coaching</Link></li>
              <li><Link href="/courses" className="text-sm hover:text-gold transition-colors">Foreign Languages</Link></li>
              <li><Link href="/courses" className="text-sm hover:text-gold transition-colors">Corporate Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-sm">No 87, 2nd Floor, Nehru Road, Kammanahalli, Bangalore - 560084</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="text-sm">080-40943580<br/>8970506004</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-sm">Mon - Sat: 9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Cambridge Academy of English. All Rights Reserved. (Demo Site)</p>
          <div className="flex gap-4">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
