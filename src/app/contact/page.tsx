'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <div className="bg-slate-50 overflow-hidden pb-24">
      
      {/* Header */}
      <div className="bg-primary pt-24 pb-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container-custom relative z-10 fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
            Get in touch with our counselors for course details, batch timings, and fee structures. We are here to help you start your journey.
          </p>
        </div>
      </div>

      <div className="container-custom relative -mt-10 z-20 fade-in-up stagger-1">
        <div className="glass-card bg-white p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row gap-16">
          
          {/* Form */}
          <div className="lg:w-3/5">
            <h2 className="text-3xl font-extrabold text-primary mb-2">Send an Enquiry</h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
            
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-200 fade-in-up">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 text-2xl">✓</div>
                <h4 className="font-bold text-xl mb-2">Message Sent Successfully!</h4>
                <p>Thank you for reaching out. Our team will contact you shortly.</p>
                <p className="text-sm mt-4 opacity-75 font-mono">(Note: This is a demo. No real message was sent.)</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-800" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Phone *</label>
                    <input type="tel" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-800" placeholder="9876543210" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Email *</label>
                    <input type="email" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-800" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Course of Interest</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-800 cursor-pointer">
                    <option>Spoken English</option>
                    <option>IELTS / PTE Preparation</option>
                    <option>Foreign Languages</option>
                    <option>Corporate Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-800 resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="btn-premium w-full py-4 text-lg shadow-[0_4px_15px_rgba(212,175,55,0.3)]">Submit Enquiry</button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="lg:w-2/5">
            <div className="bg-slate-50 p-10 rounded-3xl h-full border border-slate-100 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-primary mb-2">Visit Our Campus</h2>
              <div className="w-12 h-1 bg-primary rounded-full mb-10"></div>
              
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xl">📍</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Address</h4>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed">
                      No 87, 2nd Floor, Nehru Road,<br/>
                      Kammanahalli, Bangalore - 560084<br/>
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xl">📞</div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Phone & Email</h4>
                    <p className="text-lg text-slate-700 font-medium hover:text-accent transition-colors"><a href="tel:080-40943580">080-40943580</a></p>
                    <p className="text-lg text-slate-700 font-medium hover:text-accent transition-colors"><a href="tel:8970506004">8970506004</a></p>
                    <p className="text-base md:text-lg text-primary font-bold mt-2 hover:text-accent transition-colors break-all"><a href="mailto:info@cambridgeacademyofenglish.com">info@cambridgeacademyofenglish.com</a></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xl">🕒</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Working Hours</h4>
                    <p className="text-lg text-slate-700 font-medium">Mon - Sat: 9:00 AM - 9:00 PM</p>
                    <p className="text-lg text-slate-400 font-medium mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
