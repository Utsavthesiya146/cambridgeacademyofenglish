"use client";

import { useState } from "react";
import Link from "next/link";

export default function GeneralInformationPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const informationBlocks = [
    {
      title: "General",
      content: (
        <div className="space-y-4">
          <p>Please refer to our rules as they reflect our attitude towards English Learning and safety of our students while at our Academy and its environment. In extreme cases, failure to keep to these rules may lead to expulsion from the school.</p>
        </div>
      )
    },
    {
      title: "Admission",
      content: (
        <div className="space-y-4">
          <p>On arrival, we will provide you with a timetable detailing your classes and a map. However, we ask that you also refer to our welcome guide given to you upon registration.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Any student under 18 years will need signed parental consent.</li>
            <li>On your first day please bring: your passport/ID card.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Arrivals",
      content: (
        <div className="space-y-4">
          <p>Classes begin at 9:00am. So try to reach school 10 minutes prior to your classes. You are expected to arrive at classes on time.</p>
        </div>
      )
    },
    {
      title: "Attendance",
      content: (
        <div className="space-y-4">
          <p>Our requirement is that you must attend 100% of your classes. Our minimum requirement is that you attend 85% of your classes.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>If you are ill, you must ring the school to let us know.</li>
            <li>If your attendance drops below 85% you will not receive a leaving certificate.</li>
            <li>If your attendance drops below 85% you will be reported to the appropriate authorities.</li>
            <li>Any student absent for three days continuously will be removed from the class, and they may be asked to leave the academy.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Holiday",
      content: (
        <div className="space-y-4">
          <p>Holidays can only be taken after speaking to the principal.</p>
          <p>Under certain circumstances, students are allowed to take up to 2 weeks holiday if they are studying for a 6-month period, provided that they let the academy know well in advance.</p>
        </div>
      )
    },
    {
      title: "Progress",
      content: (
        <div className="space-y-4">
          <p>Your progress will be monitored continuously. Each week you will take a test on Friday to review the material covered during the week. Based on the result of your performance, you may be upgraded to the next level.</p>
        </div>
      )
    },
    {
      title: "Exams",
      content: (
        <div className="space-y-4">
          <p>We provide exams preparation classes which are included in our General English Intensive course. If you would like to know which exam is right for you, or which ones you can take at our school, please speak to your teacher, or the principal.</p>
        </div>
      )
    },
    {
      title: "Certificates",
      content: (
        <div className="space-y-4">
          <p>Providing you have met our attendance requirement (minimum 85%), you will receive a Cambridge Academy of English certificate at the end of your course.</p>
        </div>
      )
    }
  ];

  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen pb-24">
      <section className="relative py-24 bg-primary text-white mb-12">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">General Information</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Important guidelines and information for students at Cambridge Academy of English.
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">Rules & Regulations</h2>
          
          <div className="space-y-4">
            {informationBlocks.map((block, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full flex justify-between items-center p-5 text-left font-semibold transition-colors ${
                    openIndex === index 
                      ? 'bg-primary text-white' 
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-lg">{block.title}</span>
                  {openIndex === index ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                    {block.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-primary mb-4">Need more help?</h3>
            <p className="text-slate-600 mb-6">
              If you have any other questions regarding your time at Cambridge Academy of English, our team is always ready to assist you.
            </p>
            <Link 
              href="/contact" 
              className="inline-block py-3 px-8 bg-accent text-white rounded-xl font-bold hover:bg-primary transition-colors shadow-md"
            >
              Contact Administration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
