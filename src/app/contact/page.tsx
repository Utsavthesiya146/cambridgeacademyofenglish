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
    <div className="bg-white">
      <div className="bg-navy py-16 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Get in touch with our counselors for course details, batch timings, and fee structures.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">Send an Enquiry</h2>
            
            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200">
                <h4 className="font-bold text-lg mb-2">Message Sent Successfully!</h4>
                <p>Thank you for reaching out. Our team will contact you shortly.</p>
                <p className="text-sm mt-4 opacity-75">(Note: This is a demo. No real message was sent.)</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors" placeholder="9876543210" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Course of Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors bg-white">
                    <option>Spoken English</option>
                    <option>IELTS / PTE Preparation</option>
                    <option>Foreign Languages</option>
                    <option>Corporate Training</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full py-4 text-lg">Submit Enquiry</button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-navy mb-8">Visit Our Campus</h2>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-8">
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Address</h4>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                  No 87, 2nd Floor, Nehru Road,<br/>
                  Kammanahalli, Bangalore - 560084<br/>
                  Karnataka, India
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Phone & Email</h4>
                <p className="text-lg text-slate-700 font-medium mb-1">080-40943580</p>
                <p className="text-lg text-slate-700 font-medium mb-1">8970506004</p>
                <p className="text-lg text-slate-700 font-medium text-navy">info@cambridgeacademyofenglish.com</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Working Hours</h4>
                <p className="text-lg text-slate-700 font-medium">Monday - Saturday: 9:00 AM - 9:00 PM</p>
                <p className="text-lg text-slate-700 font-medium">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
