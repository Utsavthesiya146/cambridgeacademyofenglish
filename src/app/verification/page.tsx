import { Metadata } from 'next';
import CertificateVerifier from '@/components/CertificateVerifier';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Official Certificate Verification Portal | Cambridge Academy of English',
  description:
    'Verify authentic diplomas and certificates issued by Cambridge Academy of English. Enter your certificate serial number to confirm candidate credentials and CEFR alignment.',
  alternates: {
    canonical: 'https://cambridgeacademyofenglish.vercel.app/verification',
  },
};

export default function VerificationPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero */}
      <section className="bg-[#0a192f] pt-32 pb-20 text-center text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-[#d4af37] border border-white/20 mb-4 backdrop-blur-md">
            <span>🛡️</span> Institutional Credential Registry
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">
            Certificate Verification Portal
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Verify the authenticity of diplomas and certifications awarded by Cambridge Academy of English in Bangalore. Enter your unique serial number below.
          </p>
        </div>
      </section>

      {/* Verification Card */}
      <section className="container-custom max-w-3xl -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-[#0a192f] mb-1">
              Verify Issued Credential
            </h2>
            <p className="text-xs text-slate-500">
              Instant verification against our central institutional database
            </p>
          </div>

          <CertificateVerifier />

          {/* Authentic Diploma Sample Showcase */}
          <div className="mt-12 pt-8 border-t border-slate-200 text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#0a192f] px-3 py-1 rounded-full text-white inline-block mb-3">
              Institutional Authenticity
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#0a192f] mb-2">
              Official Cambridge Academy of English Diploma Sample
            </h3>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Authentic diplomas issued by Cambridge Academy of English feature unique serial registration numbers, institutional seal, and CEFR-aligned performance grading.
            </p>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white max-w-xl mx-auto">
              <img
                src="/images/certificates_11.jpg"
                alt="Official Diploma in English Language Teaching Sample - Cambridge Academy of English"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-[11px] text-slate-400 mt-2 italic text-center">
              Sample Diploma in English Language Teaching awarded upon formal program completion.
            </p>
          </div>

          {/* Support Helpline */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-500">
            For employer verification letters or historical archive validation, contact the Academic Registrar at{' '}
            <a
              href="mailto:info@cambridgeacademyofenglish.com"
              className="text-[#0a192f] font-bold hover:text-[#d4af37] underline"
            >
              info@cambridgeacademyofenglish.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

