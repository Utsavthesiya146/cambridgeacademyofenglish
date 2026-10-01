'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function TestPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = [
    {
      q: "She ________ to the Cambridge English course every Tuesday and Thursday.",
      options: ["goes", "going", "go", "is gone"],
      answer: 0
    },
    {
      q: "If I ________ more time, I would study another foreign language like German or French.",
      options: ["have", "had", "will have", "would have"],
      answer: 1
    },
    {
      q: "By next year, our IELTS students ________ their preparation classes.",
      options: ["will complete", "will have completed", "completed", "have complete"],
      answer: 1
    },
    {
      q: "The teacher recommended ________ English podcasts daily to improve listening comprehension.",
      options: ["listen", "to listening", "listening", "to listen"],
      answer: 2
    },
    {
      q: "Which of the following expresses a polite professional request?",
      options: ["I want you to give me details.", "Could you please send me the course schedule?", "Send schedule now.", "Give schedule."],
      answer: 1
    }
  ];

  const handleAnswer = (selectedIdx: number) => {
    if (selectedIdx === questions[currentIdx].answer) {
      setScore(score + 1);
    }
    
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restartTest = () => {
    setCurrentIdx(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Free Online English Test</h1>
          <p className="text-slate-600">Evaluate your English grammar and vocabulary level in just a few minutes. (Demo version)</p>
        </div>

        {!isFinished ? (
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 text-sm font-semibold text-navy">
              <span>Question {currentIdx + 1} of {questions.length}</span>
              <span className="text-gold">20-Min Assessment</span>
            </div>
            
            <div className="w-full bg-slate-100 rounded-full h-2 mb-8">
              <div 
                className="bg-gold h-2 rounded-full transition-all duration-300" 
                style={{ width: `${((currentIdx) / questions.length) * 100}%` }}
              ></div>
            </div>

            <h3 className="text-xl font-medium text-slate-800 mb-8">{questions[currentIdx].q}</h3>
            
            <div className="flex flex-col gap-4">
              {questions[currentIdx].options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className="text-left px-6 py-4 rounded-xl border-2 border-slate-100 hover:border-gold hover:bg-gold/5 transition-all font-medium text-slate-700"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 border-2 border-gold shadow-lg text-center">
            <div className="w-20 h-20 bg-gold-light text-gold rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
              🏆
            </div>
            <h3 className="text-3xl font-bold text-navy mb-4">Assessment Complete!</h3>
            <p className="text-lg text-slate-600 mb-8">
              Your Estimated Score: <strong className="text-navy">{score} / {questions.length}</strong>
            </p>

            <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Recommended Level</h4>
              <p className="text-xl font-bold text-gold mb-4">
                {score >= 4 ? 'Advanced (C1/C2)' : score >= 2 ? 'Intermediate (B1/B2)' : 'Beginner (A1/A2)'}
              </p>
              
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Suggested Program</h4>
              <p className="text-lg text-navy font-medium">
                {score >= 4 ? 'IELTS 8.5 Band Preparation' : score >= 2 ? 'Communicative Spoken English' : 'Spoken English Foundation'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={restartTest} className="btn btn-outline">Retake Test</button>
              <Link href="/courses" className="btn btn-primary">Browse Courses</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
