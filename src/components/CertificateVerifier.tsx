'use client';

import { useState } from 'react';

interface VerificationData {
  status: 'VALID' | 'NOT_FOUND' | 'REVOKED' | 'INVALID';
  certificateNumber?: string;
  studentName?: string;
  courseName?: string;
  issueDate?: string;
  issuingInstitution?: string;
  message: string;
  verifiedAt: string;
}

export default function CertificateVerifier() {
  const [certNumber, setCertNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationData | null>(null);
  const [error, setError] = useState('');

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = certNumber.trim();
    if (!clean) {
      setError('Please enter a certificate registration number.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/verify-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateNumber: clean }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setResult(data.result);
      } else {
        setError(data.error || 'Verification query failed. Please check network connection.');
      }
    } catch {
      setError('Network connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setCertNumber('');
    setResult(null);
    setError('');
  };

  return (
    <div className="w-full">
      <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            type="text"
            value={certNumber}
            onChange={(e) => setCertNumber(e.target.value)}
            placeholder="Enter Certificate No. (e.g. CAE/2024/00123)"
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/20 transition-all font-mono text-sm text-slate-900 placeholder:text-slate-400"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || !certNumber.trim()}
          className="px-8 py-3.5 bg-[#0a192f] hover:bg-[#132a4a] text-white font-bold text-sm rounded-xl shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Checking Registry...</span>
            </>
          ) : (
            <>
              <span>🔍</span>
              <span>Verify Certificate</span>
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold animate-fade-in">
          ⚠️ {error}
        </div>
      )}

      {/* VERIFICATION RESULT CARD */}
      {result && (
        <div className="mt-6 animate-fade-in">
          {result.status === 'VALID' && (
            <div className="bg-emerald-50/90 border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl flex-shrink-0 shadow">
                  ✓
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white mb-2">
                    Official &bull; Valid Certificate
                  </span>
                  <h3 className="text-xl font-extrabold text-emerald-950">
                    Official Credential Verified
                  </h3>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    This certificate is authentic and officially registered with Cambridge Academy of English.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-emerald-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-emerald-800 font-semibold uppercase tracking-wider text-[10px]">
                    Certificate Serial No.
                  </span>
                  <span className="font-mono font-bold text-slate-900 text-sm">
                    {result.certificateNumber}
                  </span>
                </div>
                <div>
                  <span className="block text-emerald-800 font-semibold uppercase tracking-wider text-[10px]">
                    Candidate Full Name
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {result.studentName}
                  </span>
                </div>
                <div>
                  <span className="block text-emerald-800 font-semibold uppercase tracking-wider text-[10px]">
                    Course / Programme
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {result.courseName}
                  </span>
                </div>
                <div>
                  <span className="block text-emerald-800 font-semibold uppercase tracking-wider text-[10px]">
                    Issue Date
                  </span>
                  <span className="font-medium text-slate-800 text-sm">
                    {result.issueDate
                      ? new Date(result.issueDate).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })
                      : 'Verified on Record'}
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <span className="block text-emerald-800 font-semibold uppercase tracking-wider text-[10px]">
                    Issuing Authority
                  </span>
                  <span className="font-bold text-[#0a192f] text-sm">
                    {result.issuingInstitution || 'Cambridge Academy of English, Bangalore'}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-emerald-200/60 flex items-center justify-between text-[11px] text-emerald-700">
                <span>Verified at: {new Date(result.verifiedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</span>
                <button
                  onClick={handleReset}
                  className="font-bold underline hover:text-emerald-900"
                >
                  Verify Another Certificate
                </button>
              </div>
            </div>
          )}

          {result.status === 'NOT_FOUND' && (
            <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 sm:p-8 text-left shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center text-2xl flex-shrink-0 font-bold">
                  !
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-200 text-amber-900 mb-2">
                    Record Not Found
                  </span>
                  <h3 className="text-xl font-extrabold text-amber-950">
                    No Matching Certificate Found
                  </h3>
                  <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                    We could not find an institutional record matching serial number <strong className="font-mono">{result.certificateNumber}</strong>.
                  </p>
                  <p className="text-xs text-amber-700 mt-2 leading-relaxed">
                    Please double-check the spelling, prefixes, and hyphens from your official physical certificate. If you completed your course recently, your certificate details may take up to 48 hours to synchronize.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href="mailto:info@cambridgeacademyofenglish.com"
                      className="inline-block px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg transition-colors"
                    >
                      Email Academic Registrar &rarr;
                    </a>
                    <button
                      onClick={handleReset}
                      className="text-xs font-bold text-amber-900 underline"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {(result.status === 'REVOKED' || result.status === 'INVALID') && (
            <div className="bg-rose-50 border-2 border-rose-500 rounded-2xl p-6 sm:p-8 text-left shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center text-2xl flex-shrink-0 font-bold">
                  ✕
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-rose-600 text-white mb-2">
                    {result.status === 'REVOKED' ? 'Certificate Revoked' : 'Invalid Certificate'}
                  </span>
                  <h3 className="text-xl font-extrabold text-rose-950">
                    {result.status === 'REVOKED'
                      ? 'This Certificate Has Been Officially Revoked'
                      : 'Certificate Number Marked Invalid'}
                  </h3>
                  <p className="text-xs text-rose-800 mt-1 leading-relaxed">
                    {result.message}
                  </p>
                  <div className="mt-4 pt-3 border-t border-rose-200/80 text-xs text-rose-700">
                    Serial: <strong className="font-mono">{result.certificateNumber}</strong> &bull; For administrative inquiries, contact the Examination Controller at <a href="mailto:info@cambridgeacademyofenglish.com" className="font-bold underline">info@cambridgeacademyofenglish.com</a>.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
