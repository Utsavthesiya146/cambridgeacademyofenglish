'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TestPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      q: 'She ________ to the Cambridge English course every Tuesday and Thursday.',
      options: ['goes', 'going', 'go', 'is gone'],
      answer: 0,
    },
    {
      q: 'If I ________ more time, I would study another foreign language like German or French.',
      options: ['have', 'had', 'will have', 'would have'],
      answer: 1,
    },
    {
      q: 'By next year, our IELTS students ________ their preparation classes.',
      options: ['will complete', 'will have completed', 'completed', 'have complete'],
      answer: 1,
    },
    {
      q: 'The teacher recommended ________ English podcasts daily to improve listening comprehension.',
      options: ['listen', 'to listening', 'listening', 'to listen'],
      answer: 2,
    },
    {
      q: 'Which of the following expresses a polite professional request?',
      options: [
        'I want you to give me details.',
        'Could you please send me the course schedule?',
        'Send schedule now.',
        'Give schedule.',
      ],
      answer: 1,
    },
    {
      q: 'Hardly ________ entered the room when the presentation began.',
      options: ['he had', 'had he', 'did he', 'he did'],
      answer: 1,
    },
  ];

  const handleAnswer = (selectedIdx: number) => {
    if (selectedIdx === questions[currentIdx].answer) {
      setScore((prev) => prev + 1);
    }

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartTest = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsFinished(false);
    setLeadSubmitted(false);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const estimatedLevel =
        score >= 5
          ? 'Advanced (C1/C2)'
          : score >= 3
          ? 'Intermediate (B1/B2)'
          : 'Elementary (A1/A2)';
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadName,
          phone: leadPhone,
          course: `Placement Test Result: ${score}/${questions.length} [${estimatedLevel}]`,
          message: `Student took the 20-min placement test and scored ${score}/${questions.length}. Estimated level: ${estimatedLevel}.`,
          type: 'enquiry',
          pageUrl: typeof window !== 'undefined' ? window.location.href : '',
          leadSource: 'Online Placement Test',
        }),
      });
      setLeadSubmitted(true);
    } catch {
      // Still show complete
      setLeadSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const levelInfo =
    score >= 5
      ? {
          level: 'Advanced (CEFR C1/C2)',
          rec: 'IELTS Band 8.5 Masterclass / C1 Advanced (CAE) / Professional Executive English',
          desc: 'You demonstrate strong grammatical command and syntactic awareness. You are ready for high-band IELTS/PTE preparation or executive corporate communication.',
        }
      : score >= 3
      ? {
          level: 'Intermediate (CEFR B1/B2)',
          rec: 'Communicative Spoken English / IELTS 7+ Foundation / Business Communication',
          desc: 'You have a good functional grasp of everyday English, but need refinement in complex tenses, prepositional nuances, and spontaneous fluency.',
        }
      : {
          level: 'Elementary (CEFR A1/A2)',
          rec: 'Spoken English Foundation (Campus/Online) / General English for Adults',
          desc: 'We recommend starting with our speech lab foundations to build core sentence structures, vocabulary, and eliminate speaking hesitation.',
        };

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-4 py-1.5 rounded-full text-white inline-block mb-3">
            Quick Diagnostic Assessment
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a192f] mb-2 tracking-tight">
            Free Online English Proficiency Test
          </h1>
          <p className="text-slate-600 text-sm">
            Assess your grammatical accuracy and conversational readiness in 5 minutes.
          </p>
        </div>

        {!isFinished ? (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>
                Question {currentIdx + 1} of {questions.length}
              </span>
              <span className="text-[#d4af37]">CEFR Diagnostic</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 rounded-full h-2 mb-8">
              <div
                className="bg-[#d4af37] h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-[#0a192f] mb-8 leading-snug">
              {questions[currentIdx].q}
            </h2>

            <div className="flex flex-col gap-3">
              {questions[currentIdx].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className="text-left px-5 py-4 rounded-2xl border-2 border-slate-100 hover:border-[#d4af37] hover:bg-[#d4af37]/5 transition-all font-semibold text-sm text-slate-700 active:scale-[0.99]"
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 inline-flex items-center justify-center text-xs mr-3 font-bold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#d4af37] shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto text-4xl shadow-inner">
              🏆
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a192f] mb-2">
                Assessment Completed!
              </h2>
              <p className="text-base text-slate-600">
                Your Estimated Score:{' '}
                <strong className="text-2xl text-[#0a192f] font-black">
                  {score} / {questions.length}
                </strong>
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-200 space-y-3">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Estimated CEFR Proficiency:
                </p>
                <p className="text-lg font-black text-[#0a192f]">{levelInfo.level}</p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Recommended Course Pathway:
                </p>
                <p className="text-sm font-bold text-[#d4af37]">{levelInfo.rec}</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                {levelInfo.desc}
              </p>
            </div>

            {/* Lead Capture for Score Report */}
            {!leadSubmitted ? (
              <form onSubmit={handleLeadSubmit} className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/60 text-left space-y-3">
                <p className="font-bold text-xs text-[#0a192f] uppercase tracking-wider">
                  Get Detailed Diagnostic Report on WhatsApp:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    className="px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Number"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    className="px-3.5 py-2.5 text-xs border border-slate-200 rounded-xl bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 bg-[#0a192f] text-white font-bold rounded-xl text-xs hover:bg-[#162447] transition-colors disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Send My Detailed Report & Batch Options →'}
                </button>
              </form>
            ) : (
              <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl text-xs font-semibold">
                ✓ Report requested! Our senior academic advisor will send your detailed analysis on WhatsApp.
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <button
                onClick={restartTest}
                className="px-6 py-2.5 border border-slate-300 text-slate-700 font-bold rounded-full text-xs hover:bg-slate-50 transition-colors"
              >
                Retake Assessment
              </button>
              <Link
                href="/courses"
                className="px-6 py-2.5 bg-[#0a192f] text-white font-bold rounded-full text-xs hover:bg-[#162447] transition-colors"
              >
                Browse All Programmes
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
