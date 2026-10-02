import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Cambridge Academy of English',
  description: 'Privacy Policy of Cambridge Academy of English',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container-custom max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Privacy Policy</h1>
          <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p className="text-lg">
            At Cambridge Academy of English, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">1</span>
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, or otherwise contact us.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li><strong className="text-primary">Personal Data:</strong> Name, email address, phone number, and other contact details.</li>
              <li><strong className="text-primary">Usage Data:</strong> Information on how the website is accessed and used, including IP addresses, browser types, and pages visited.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">2</span>
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect or receive for various purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li>To facilitate account creation and logon process.</li>
              <li>To send administrative information to you.</li>
              <li>To fulfill and manage your orders, registrations, and payments.</li>
              <li>To respond to your inquiries and offer support.</li>
              <li>To improve our website and marketing efforts.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">3</span>
              Disclosure of Your Information
            </h2>
            <p className="mb-4">
              We may share information we have collected about you in certain situations:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-accent">
              <li><strong className="text-primary">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
              <li><strong className="text-primary">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">4</span>
              Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm">5</span>
              Contact Us
            </h2>
            <p className="mb-6">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
              <h3 className="text-xl font-bold text-primary mb-4 relative z-10">Cambridge Academy of English</h3>
              <div className="space-y-3 relative z-10 text-slate-700">
                <p className="flex items-start gap-3">
                  <span className="mt-1 text-accent">📍</span>
                  <span>Kammanahalli, Bangalore, India</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-accent">✉️</span>
                  <span>
                    Email: <a href="mailto:info@cambridgeacademyofenglish.com" className="text-primary hover:text-accent font-medium transition-colors">info@cambridgeacademyofenglish.com</a>
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="mt-1 text-accent">📞</span>
                  <span className="flex flex-col">
                    <span>Phone:</span>
                    <span className="font-medium">080-40943580, 8970506004, 9620806004</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
