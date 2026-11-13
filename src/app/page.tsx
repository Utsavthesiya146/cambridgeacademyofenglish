'use client';

import { useState } from 'react';
import Link from 'next/link';
import EnquiryForm from '@/components/EnquiryForm';
import CallbackForm from '@/components/CallbackForm';
import { FAQSchema } from '@/components/StructuredData';

export default function Home() {
  const [activeCourseTab, setActiveCourseTab] = useState<'spoken' | 'exam' | 'adults' | 'international' | 'teachers' | 'foreign' | 'kids'>('spoken');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const openCounsellingModal = (courseName?: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-counselling-modal', {
          detail: { course: courseName || 'General Enquiry / Free Counselling' },
        })
      );
    }
  };

  const HOMEPAGE_FAQS = [
    {
      question: 'Why is Cambridge Academy of English considered India’s No 1 Language Academy?',
      answer:
        'With 21 years of proven excellence in Bangalore, Cambridge Academy of English has trained over 25,000 learners from across India and 18+ international countries. We are an authorized British Council and IDP registration partner, offering certified Cambridge and CELTA/TESOL faculty, modern speech labs, and an immersive communicative methodology that produces fluent, confident speakers.',
    },
    {
      question: 'What courses are offered at Cambridge Academy of English?',
      answer:
        'We offer dedicated programmes across seven categories: Spoken English (Online & Offline), International Exam Preparation (IELTS, PTE, OET, CELPIP, TOEFL, LanguageCert, CAE, CPE), English for Adults (General, Professional, Business Communication), Foreign Nationals Immersion (Diploma & Master Diploma), English for Teachers (TEFL/TESOL & TKT), Foreign Languages (German, French, Spanish, Mandarin Chinese), and English for Kids (Phonics, Academic English, A2 Key for Schools, B1 Preliminary).',
    },
    {
      question: 'Are online classes available for learners outside Bangalore?',
      answer:
        'Yes! All our Spoken English, Exam Preparation (IELTS/PTE), and Foreign Language courses are available via live, interactive online video classrooms with real-time mentor interaction, breakout sessions, and speech drills.',
    },
    {
      question: 'How do I book a free level assessment or counselling session?',
      answer:
        'You can book your free 1-on-1 counselling session directly through our website by clicking the "Book a Free Counselling Session" button, calling us at 080-40943580, or messaging our admissions helpline on WhatsApp at +91 8970506004.',
    },
    {
      question: 'Where is your Bangalore campus located and what are the working hours?',
      answer:
        'Our campus is centrally located at No 87, 2nd Floor, Nehru Road, Kammanahalli, Bangalore, Karnataka - 560084, India. We are open Monday to Saturday from 9:00 AM to 9:00 PM, and on Sundays by appointment.',
    },
  ];

  return (
    <>
      <FAQSchema items={HOMEPAGE_FAQS} />

      <div className="overflow-hidden">
        {/* 1. HERO SECTION - CLEAN & PREMIUM */}
        <section className="relative flex items-center justify-center bg-[#0a192f] text-white pt-16 sm:pt-20 pb-12 sm:pb-14 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1e3a8a]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-20 w-full pt-2 sm:pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Hero Copy */}
              <div className="lg:col-span-7 text-center lg:text-left fade-in-up">
                {/* Main Tagline */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#d4af37]/40 backdrop-blur-md mb-4 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-ping relative">
                    <span className="absolute inset-0 bg-[#d4af37] rounded-full animate-none"></span>
                  </span>
                  <span className="text-[11px] font-black tracking-widest text-[#d4af37] uppercase">
                    India’s No 1 Language Academy
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 leading-[1.18] tracking-tight drop-shadow-xl">
                  Speak with Confidence.{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#ffe066] to-white block sm:inline">
                    Communicate with Excellence.
                  </span>
                </h1>

                {/* Experience Statement */}
                <p className="text-lg sm:text-xl text-[#d4af37] font-bold mb-3 drop-shadow-md">
                  21 Years of Excellence in English Language Training
                </p>

                {/* Supporting Description */}
                <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                  Transforming communication skills through expert-led training, internationally aligned programmes and personalised learning.
                </p>

                {/* 3 Prominent Homepage Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center lg:justify-start">
                  {/* Button 1: Explore Courses */}
                  <a
                    href="#courses"
                    className="w-full sm:w-auto px-6 py-3 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-black rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 text-center text-xs uppercase tracking-wider"
                  >
                    Explore Courses
                  </a>

                  {/* Button 2: WhatsApp Us for Course Details */}
                  <a
                    href="https://wa.me/918970506004?text=Hello%20Cambridge%20Academy%20of%20English%2C%20I%20would%20like%20to%20get%20course%20details%20and%20batch%20timings."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 text-center text-xs flex items-center justify-center gap-2"
                  >
                    <span>💬</span> WhatsApp Us for Course Details
                  </a>

                  {/* Button 3: Book a Free Counselling Session */}
                  <button
                    onClick={() => openCounsellingModal()}
                    className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40 text-center text-xs hover:-translate-y-0.5"
                  >
                    Book a Free Counselling Session
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37] font-bold">✓</span> British Council &amp; IDP Partner
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37] font-bold">✓</span> 25,000+ Alumni
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37] font-bold">✓</span> Students from 18+ Countries
                  </div>
                </div>
              </div>

              {/* Right Hero Image Showcase Card */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative">
                  {/* Decorative Glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37] to-[#1e3a8a] rounded-3xl blur-xl opacity-30"></div>

                  {/* Main Image Frame */}
                  <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-[#0a192f]">
                    <img
                      src="/images/hero-classroom.jpg"
                      alt="Students in a modern interactive English language classroom at Cambridge Academy of English"
                      className="w-full h-[380px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent"></div>

                    {/* Floating Rating Badge */}
                    <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 flex items-center justify-between shadow-xl text-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-xl text-amber-500 font-black">
                          ★
                        </div>
                        <div>
                          <p className="font-extrabold text-slate-900 text-xs sm:text-sm">4.9/5 Rating</p>
                          <p className="text-[10px] text-slate-500 font-medium">1,000+ Google Reviews</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full">
                        Verified Academy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT CAMBRIDGE ACADEMY OF ENGLISH */}
        <section id="about" className="py-10 md:py-14 bg-white relative">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-6 space-y-3.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0a192f] text-[11px] font-bold uppercase tracking-wider">
                  <span>🏛️</span> Institutional Profile
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight leading-tight">
                  About Cambridge Academy of English
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Founded in Bangalore, <strong>Cambridge Academy of English</strong> has stood as a pioneer in communicative language training, academic English, and international examination coaching for over 21 years.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Our core mission is to bridge cultural and linguistic boundaries, equipping students, corporate executives, doctors, engineers, and international scholars with the verbal fluency, syntactic precision, and personal confidence needed to excel on the global stage.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {[
                    { title: 'Communicative Pedagogy', desc: 'Focus on active speaking drills rather than dry grammar rules.' },
                    { title: 'Certified Master Trainers', desc: 'Cambridge and CELTA/TESOL certified mentors with 10+ years experience.' },
                    { title: 'Personalized Learning', desc: 'Small batch sizes with individualized diagnostic evaluation.' },
                    { title: 'Global Recognition', desc: 'Authorized British Council and IDP registration associate.' },
                  ].map((feat, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                      <div>
                        <p className="font-bold text-xs text-[#0a192f] mb-0.5">✓ {feat.title}</p>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="px-5 py-2.5 bg-[#0a192f] text-white font-bold rounded-full text-xs hover:bg-[#162447] transition-all shadow-md"
                  >
                    Read Full Academy Story →
                  </Link>
                  <button
                    onClick={() => openCounsellingModal()}
                    className="px-5 py-2.5 border border-slate-300 text-slate-700 font-bold rounded-full text-xs hover:bg-slate-50 transition-all"
                  >
                    Book Campus Tour
                  </button>
                </div>
              </div>

              {/* Campus Showcase Collage */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3 sm:space-y-4 flex flex-col justify-between">
                    <div className="overflow-hidden rounded-2xl shadow-md">
                      <img
                        src="/images/slider1.jpg"
                        alt="Classroom interactive session at Cambridge Academy of English"
                        className="object-cover w-full h-44 sm:h-52 lg:h-56 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="bg-[#0a192f] text-white p-4 sm:p-5 rounded-2xl shadow-md border border-slate-800">
                      <p className="text-2xl sm:text-3xl font-black text-[#d4af37]">21+</p>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-0.5">
                        Years of Legacy in Bangalore
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Established 2005 • Kammanahalli
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 flex flex-col justify-between">
                    <div className="bg-[#d4af37] text-[#0a192f] p-4 sm:p-5 rounded-2xl shadow-md">
                      <p className="text-2xl sm:text-3xl font-black">25,000+</p>
                      <p className="text-xs font-bold uppercase tracking-wider mt-0.5">
                        Successful Students Trained
                      </p>
                      <p className="text-[11px] text-[#0a192f]/80 mt-0.5 font-medium">
                        Across India &amp; 18+ Countries
                      </p>
                    </div>
                    <div className="overflow-hidden rounded-2xl shadow-md">
                      <img
                        src="/images/hero.jpg"
                        alt="Language learning laboratory at Cambridge Academy of English"
                        className="object-cover w-full h-44 sm:h-52 lg:h-56 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 21 YEARS OF EXCELLENCE */}
        <section className="py-10 md:py-14 bg-slate-900 text-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-white/10 px-4 py-1.5 rounded-full inline-block mb-2">
                Milestones &amp; Track Record
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                21 Years of Educational Excellence
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Since 2005, Cambridge Academy of English has set the benchmark for language instruction in South India.
              </p>
            </div>

            {/* Metrics Counter Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { number: '21+', label: 'Years of Experience', sub: 'Established language leader in Bangalore' },
                { number: '25,000+', label: 'Alumni Worldwide', sub: 'Working in top MNCs & global universities' },
                { number: '18+', label: 'Countries Represented', sub: 'Diverse international student body' },
                { number: '98.4%', label: 'First-Time Exam Pass Rate', sub: 'In IELTS, PTE, OET, and Cambridge exams' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors"
                >
                  <p className="text-3xl sm:text-4xl font-black text-[#d4af37] mb-1">{stat.number}</p>
                  <p className="text-xs sm:text-sm font-bold text-white mb-0.5">{stat.label}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE US? */}
        <section className="py-10 md:py-14 bg-slate-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-2">
                The Cambridge Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight">
                Why Choose Cambridge Academy of English?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Here is why thousands of professionals, students, and international learners trust us for their communication transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  icon: '🗣️',
                  title: 'Communicative Methodology',
                  desc: 'We discard tedious memorization. 80% of class time is dedicated to live speech, debate, and roleplays.',
                },
                {
                  icon: '👨‍🏫',
                  title: 'Cambridge Certified Faculty',
                  desc: 'All trainers are CELTA, TESOL, or Cambridge certified with extensive cross-cultural teaching backgrounds.',
                },
                {
                  icon: '🎯',
                  title: 'Personalized Diagnostic Coaching',
                  desc: 'Detailed entry level tests ensure you are placed in the right batch with custom milestone milestones.',
                },
                {
                  icon: '👥',
                  title: 'Small Batch Sizes',
                  desc: 'Strictly limited batch sizes guarantee that every student receives dedicated speaking time and mentor critique.',
                },
                {
                  icon: '⏰',
                  title: 'Flexible Schedules',
                  desc: 'Morning, evening, and weekend batches designed specifically around corporate and college hours.',
                },
                {
                  icon: '🏢',
                  title: 'Modern Bangalore Campus',
                  desc: 'Centrally located on Nehru Road, Kammanahalli, equipped with speech labs, computer suites, and library.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-2xl mb-2.5 block">{item.icon}</span>
                  <h3 className="text-base font-bold text-[#0a192f] mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OUR COURSES (INTERACTIVE OVERVIEW & TABS) */}
        <section id="courses" className="py-10 md:py-14 bg-white border-t border-slate-200">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                  Academic Directory
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight mt-1">
                  Our Comprehensive Courses
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-xl">
                  Dedicated landing pages for every programme. Select a category below to explore curriculums and learning outcomes.
                </p>
              </div>

              <Link
                href="/courses"
                className="mt-3 md:mt-0 px-5 py-2 bg-[#0a192f] text-white text-xs font-bold rounded-full hover:bg-[#162447] transition-colors"
              >
                Browse All 24 Landing Pages →
              </Link>
            </div>

            {/* Course Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-6">
              {[
                { id: 'spoken', label: '1. Spoken English' },
                { id: 'exam', label: '2. Examination Prep' },
                { id: 'adults', label: '3. English for Adults' },
                { id: 'international', label: '4. Foreign Nationals' },
                { id: 'teachers', label: '5. For Teachers' },
                { id: 'foreign', label: '6. Foreign Languages' },
                { id: 'kids', label: '7. English for Kids' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCourseTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    activeCourseTab === tab.id
                      ? 'bg-[#0a192f] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Tab Content Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCourseTab === 'spoken' && (
                <>
                  <CourseCard
                    title="Spoken English Online Course"
                    tag="Online Live"
                    duration="4 to 8 Weeks"
                    desc="Interactive video seminars for fluency, sentence structure, pronunciation, and confidence building from home."
                    slug="spoken-english-online"
                    onEnquire={() => openCounsellingModal('Spoken English Online')}
                  />
                  <CourseCard
                    title="Spoken English Offline (Bangalore Campus)"
                    tag="Campus Kammanahalli"
                    duration="4 to 12 Weeks"
                    desc="Immersive in-person speech labs, debate sessions, interview drills, and daily spoken practice in Bangalore."
                    slug="spoken-english-offline"
                    onEnquire={() => openCounsellingModal('Spoken English Offline')}
                  />
                  <CourseCard
                    title="Advanced Spoken English & Voice Training"
                    tag="Fluency & Accent Lab"
                    duration="6 to 8 Weeks"
                    desc="Intensive voice modulation, British/American accent neutralization, debate rhetoric, and corporate presentation mastery."
                    slug="advanced-spoken-english"
                    onEnquire={() => openCounsellingModal('Advanced Spoken English')}
                  />
                </>
              )}

              {activeCourseTab === 'exam' && (
                <>
                  <CourseCard
                    title="IELTS Preparation (Academic & General)"
                    tag="Target Band 8.0+"
                    duration="4 to 8 Weeks"
                    desc="Authorized British Council & IDP registration partner. Official past papers and individual writing assessments."
                    slug="ielts-preparation"
                    onEnquire={() => openCounsellingModal('IELTS Preparation')}
                  />
                  <CourseCard
                    title="PTE Academic Preparation"
                    tag="Target 79+"
                    duration="3 to 6 Weeks"
                    desc="Master Pearson's automated scoring algorithm with proven Describe Image and Write Essay templates."
                    slug="pte-preparation"
                    onEnquire={() => openCounsellingModal('PTE Preparation')}
                  />
                  <CourseCard
                    title="OET for Healthcare Professionals"
                    tag="Grade B Guarantee"
                    duration="4 to 8 Weeks"
                    desc="Healthcare-specific communication for doctors and nurses targeting UK NMC and GMC registration."
                    slug="oet-preparation"
                    onEnquire={() => openCounsellingModal('OET Preparation')}
                  />
                  <CourseCard
                    title="CELPIP Preparation (Canada PR)"
                    tag="Target CLB 9+"
                    duration="3 to 6 Weeks"
                    desc="Computer-delivered test strategies for Canadian immigration Express Entry and PNP applicants."
                    slug="celpip-preparation"
                    onEnquire={() => openCounsellingModal('CELPIP Preparation')}
                  />
                  <CourseCard
                    title="TOEFL iBT Preparation"
                    tag="Target 105+"
                    duration="4 to 6 Weeks"
                    desc="Updated shortened TOEFL format preparation for top American, Canadian, and global universities."
                    slug="toefl-preparation"
                    onEnquire={() => openCounsellingModal('TOEFL Preparation')}
                  />
                  <CourseCard
                    title="C1 Advanced (CAE) Preparation"
                    tag="Cambridge Exam"
                    duration="8 to 12 Weeks"
                    desc="Prestigious high-level Cambridge qualification with permanent lifetime validity worldwide."
                    slug="cae-preparation"
                    onEnquire={() => openCounsellingModal('C1 Advanced CAE')}
                  />
                </>
              )}

              {activeCourseTab === 'adults' && (
                <>
                  <CourseCard
                    title="General English for Adults"
                    tag="Everyday Confidence"
                    duration="6 to 12 Weeks"
                    desc="Comfortable, supportive learning for adults wanting conversational confidence in social and travel settings."
                    slug="general-english"
                    onEnquire={() => openCounsellingModal('General English')}
                  />
                  <CourseCard
                    title="Professional Workplace English"
                    tag="Corporate Success"
                    duration="6 to 8 Weeks"
                    desc="High-impact meeting communication, executive presentations, diplomatic emails, and client interactions."
                    slug="professional-english"
                    onEnquire={() => openCounsellingModal('Professional English')}
                  />
                  <CourseCard
                    title="Business Communication"
                    tag="Executive Track"
                    duration="6 to 10 Weeks"
                    desc="Strategic negotiations, investor pitches, commercial proposals, and boardroom leadership in English."
                    slug="business-communication"
                    onEnquire={() => openCounsellingModal('Business Communication')}
                  />
                </>
              )}

              {activeCourseTab === 'international' && (
                <>
                  <CourseCard
                    title="Diploma in English Language (Foreign Nationals)"
                    tag="Full Immersion"
                    duration="3 to 6 Months"
                    desc="Designed for international students from 18+ nations. Visa documentation support and cultural orientation."
                    slug="diploma-in-english-language"
                    onEnquire={() => openCounsellingModal('Diploma in English')}
                  />
                  <CourseCard
                    title="Master Diploma in English Language"
                    tag="Postgraduate Level"
                    duration="6 Months to 1 Year"
                    desc="Advanced scholarly research, thesis writing, and international oratory for diplomatic and academic fellows."
                    slug="master-diploma-in-english-language"
                    onEnquire={() => openCounsellingModal('Master Diploma in English')}
                  />
                  <CourseCard
                    title="Advanced Diploma in English Language"
                    tag="Academic Immersion"
                    duration="6 Months"
                    desc="Intensive linguistic immersion, academic research writing, debate fluency, and university readiness for international scholars."
                    slug="advanced-diploma-in-english-language"
                    onEnquire={() => openCounsellingModal('Advanced Diploma in English')}
                  />
                </>
              )}

              {activeCourseTab === 'teachers' && (
                <>
                  <CourseCard
                    title="TEFL / TESOL Teacher Training"
                    tag="120-Hr Certificate"
                    duration="4 to 8 Weeks"
                    desc="Get certified to teach English globally. Communicative methodology and observed live teaching practice."
                    slug="teacher-training"
                    onEnquire={() => openCounsellingModal('TEFL Teacher Training')}
                  />
                  <CourseCard
                    title="Cambridge TKT Preparation"
                    tag="Cambridge Credential"
                    duration="4 to 6 Weeks"
                    desc="Teaching Knowledge Test Modules 1, 2, and 3 preparation for school educators seeking international certification."
                    slug="tkt-preparation"
                    onEnquire={() => openCounsellingModal('Cambridge TKT')}
                  />
                  <CourseCard
                    title="Train the Trainer & Corporate Coach"
                    tag="Executive Faculty"
                    duration="4 to 8 Weeks"
                    desc="Advanced corporate soft skills, voice & accent coaching, and adult communicative training pedagogy."
                    slug="corporate-trainer-certification"
                    onEnquire={() => openCounsellingModal('Train the Trainer')}
                  />
                </>
              )}

              {activeCourseTab === 'foreign' && (
                <>
                  <CourseCard
                    title="German Language (A1, A2, B1, B2)"
                    tag="🇩🇪 Goethe Aligned"
                    duration="8 to 10 Weeks/Level"
                    desc="Learn German with certified linguists for university study in Germany and Opportunity Card (Chancenkarte)."
                    slug="german-language"
                    onEnquire={() => openCounsellingModal('German Language')}
                  />
                  <CourseCard
                    title="French Language (DELF A1-B2)"
                    tag="🇫🇷 TEF Canada"
                    duration="8 to 10 Weeks/Level"
                    desc="Master French for global diplomacy and secure up to 50 additional Canadian Express Entry CRS points."
                    slug="french-language"
                    onEnquire={() => openCounsellingModal('French Language')}
                  />
                  <CourseCard
                    title="Spanish Language (DELE A1-B2)"
                    tag="🇪🇸 Instituto Cervantes"
                    duration="8 to 10 Weeks/Level"
                    desc="Learn the world's second most spoken native language with communicative Hispanic methodology."
                    slug="spanish-language"
                    onEnquire={() => openCounsellingModal('Spanish Language')}
                  />
                  <CourseCard
                    title="Chinese Mandarin Language (HSK 1-4)"
                    tag="🇨🇳 Global Trade"
                    duration="8 to 12 Weeks/Level"
                    desc="Master Mandarin tones, Pinyin, and Hanzi characters for international business and trade."
                    slug="chinese-mandarin-language"
                    onEnquire={() => openCounsellingModal('Chinese Mandarin')}
                  />
                  <CourseCard
                    title="Japanese Language (JLPT N5, N4, N3)"
                    tag="🇯🇵 JLPT Aligned"
                    duration="8 to 12 Weeks/Level"
                    desc="Master Hiragana, Katakana, and essential Kanji for IT engineering careers and higher study in Japan."
                    slug="japanese-language"
                    onEnquire={() => openCounsellingModal('Japanese Language')}
                  />
                  <CourseCard
                    title="Arabic Language (Conversational & Business)"
                    tag="🇦🇪 Gulf Careers"
                    duration="6 to 10 Weeks"
                    desc="Practical spoken Arabic and modern business vocabulary for professionals working across UAE, Saudi Arabia, and GCC nations."
                    slug="arabic-language"
                    onEnquire={() => openCounsellingModal('Arabic Language')}
                  />
                </>
              )}

              {activeCourseTab === 'kids' && (
                <>
                  <CourseCard
                    title="Kids Academic English (Young Learners)"
                    tag="Ages 6-14 Years"
                    duration="Ongoing / Term"
                    desc="Phonics, storytelling, grammar through play, and public speaking in a warm, child-friendly atmosphere."
                    slug="kids-academic-english"
                    onEnquire={() => openCounsellingModal('Kids Academic English')}
                  />
                  <CourseCard
                    title="Cambridge A2 Key for Schools (KET)"
                    tag="Cambridge English"
                    duration="6 to 10 Weeks"
                    desc="Build real-world English communication and international credentials for middle school students."
                    slug="a2-key-for-schools"
                    onEnquire={() => openCounsellingModal('A2 Key for Schools')}
                  />
                  <CourseCard
                    title="Cambridge B1 Preliminary for Schools (PET)"
                    tag="Intermediate"
                    duration="8 to 12 Weeks"
                    desc="Practical intermediate English qualification for high school students preparing for global pathways."
                    slug="b1-preliminary-for-schools"
                    onEnquire={() => openCounsellingModal('B1 Preliminary for Schools')}
                  />
                </>
              )}
            </div>
          </div>
        </section>

        {/* 6. ENGLISH LANGUAGE TRAINING PROGRAMMES (DEEP DIVE) */}
        <section className="py-10 md:py-14 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                  Core Foundation
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] mt-1 mb-4">
                  English Language Training Programmes
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Whether you are starting from basic phrases or refining advanced corporate articulation, our spoken English curriculum is structured around the Common European Framework of Reference (CEFR).
                </p>
                <div className="space-y-2.5">
                  {[
                    'Speech Lab Audio Drills: Neutralizing mother tongue influence and refining vowel phonetics.',
                    'Extempore & Impromptu Speaking: Eliminating mental hesitation during real-time speech production.',
                    'Conversational Vocabulary: Acquiring 1,500+ high-frequency everyday idioms, collocations, and phrases.',
                    'Interview & Placement Readiness: Mock HR interviews, group discussions, and telephone etiquette.',
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="text-[#d4af37] font-bold text-sm mt-0.5">★</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/courses/spoken-english-offline"
                    className="px-5 py-2.5 bg-[#0a192f] text-white font-bold rounded-full text-xs hover:bg-[#162447] transition-all"
                  >
                    Explore Campus Classes →
                  </Link>
                  <Link
                    href="/courses/spoken-english-online"
                    className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-full text-xs hover:bg-slate-50 transition-all"
                  >
                    Explore Online Classes →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-md">
                  <h3 className="text-base font-bold text-[#0a192f] mb-3">
                    Fluency Development Stages at Cambridge
                  </h3>
                  <div className="space-y-3">
                    {[
                      { stage: 'Stage 1: Hesitation Elimination', time: 'Weeks 1-2', focus: 'Breaking anxiety, voice projection, and everyday confidence.' },
                      { stage: 'Stage 2: Sentence Framing & Grammar', time: 'Weeks 3-4', focus: 'Thinking directly in English without native-language mental translation.' },
                      { stage: 'Stage 3: Advanced Vocabulary & Pronunciation', time: 'Weeks 5-8', focus: 'Phonetic articulation, idiomatic phrasing, and presentation skills.' },
                      { stage: 'Stage 4: Executive Mastery & Placement', time: 'Weeks 9-12', focus: 'Debates, corporate meetings, and professional interview simulations.' },
                    ].map((st, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-4">
                        <div>
                          <p className="font-bold text-xs text-[#0a192f]">{st.stage}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{st.focus}</p>
                        </div>
                        <span className="text-[10px] font-bold bg-[#d4af37]/20 text-[#0a192f] px-2.5 py-1 rounded-full whitespace-nowrap">
                          {st.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. EXAMINATION PREPARATION PROGRAMMES (IELTS, PTE, OET, CELPIP, TOEFL) */}
        <section className="py-10 md:py-14 bg-white border-t border-slate-200">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-2">
                Official Test Center Standards
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight">
                Examination Preparation Programmes
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Target high bands with official British Council, IDP, and Pearson certified trainers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                { title: 'IELTS Academic & General', target: 'Band 8.0+', desc: 'In-depth strategy for Listening, Reading, Task 1/2 Writing, and Speaking interviews.', link: '/courses/ielts-preparation' },
                { title: 'PTE Academic', target: 'Score 79+', desc: 'Automated AI scoring strategy, Read Aloud, Describe Image, and Repeat Sentence drills.', link: '/courses/pte-preparation' },
                { title: 'OET for Healthcare', target: 'Grade B+', desc: 'Clinical consultations, discharge letter writing, and medical audio comprehension.', link: '/courses/oet-preparation' },
                { title: 'CELPIP for Canada PR', target: 'CLB 9+', desc: '100% computer-based test strategies for Canadian Express Entry and PNP visas.', link: '/courses/celpip-preparation' },
              ].map((exam, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-[#d4af37] bg-white px-2 py-0.5 rounded-lg border border-slate-200">
                        {exam.target}
                      </span>
                      <span className="text-[11px] text-slate-400 font-bold">2026 Batch</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#0a192f] mb-1.5">{exam.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{exam.desc}</p>
                  </div>
                  <Link
                    href={exam.link}
                    className="w-full py-2 bg-[#0a192f] hover:bg-[#162447] text-white text-xs font-bold rounded-xl text-center transition-colors block"
                  >
                    View Exam Curriculum →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. ENGLISH FOR INTERNATIONAL STUDENTS */}
        <section className="py-10 md:py-14 bg-gradient-to-br from-[#0a192f] via-[#162447] to-[#0a192f] text-white relative overflow-hidden">
          <div className="container-custom relative z-10">
            {/* Centered Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-white/10 px-4 py-1.5 rounded-full inline-block mb-2 border border-white/10">
                International Learners Hub
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                English for Foreign Nationals &amp; International Students
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
                For over 21 years, our Kammanahalli campus has been the premier destination for foreign students from Saudi Arabia, Yemen, Oman, Bahrain, Egypt, Thailand, Japan, Korea, Turkey, and across Africa.
              </p>
            </div>

            {/* 3 Perfectly Aligned Equal-Height Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Card 1: Diploma in English */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-7 rounded-3xl flex flex-col justify-between hover:bg-white/15 transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/20 border border-[#d4af37]/30 flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
                    🎓
                  </div>
                  <h3 className="font-bold text-[#d4af37] text-lg sm:text-xl mb-2">
                    Diploma in English
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Structured 3 to 6-month immersion covering grammar, conversational fluency, pronunciation, and university readiness.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-200 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> CEFR A1 to B2 Proficiency Levels
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> Intensive Spoken Drills &amp; Accent Labs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> Daily 2-Hour Practical Immersion
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/courses/diploma-in-english-language"
                    className="block text-center w-full py-2.5 px-4 bg-white/10 hover:bg-[#d4af37] hover:text-[#0a192f] text-white text-xs font-bold rounded-xl transition-all border border-white/20"
                  >
                    View Diploma Syllabus →
                  </Link>
                </div>
              </div>

              {/* Card 2: Master Diploma in English */}
              <div className="bg-white/10 backdrop-blur-md border border-[#d4af37]/50 p-7 rounded-3xl flex flex-col justify-between relative shadow-2xl hover:bg-white/15 transition-all group">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#d4af37] text-[#0a192f] text-[10px] font-black uppercase tracking-wider shadow-md">
                  Advanced Track
                </span>
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/20 border border-[#d4af37]/30 flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
                    📜
                  </div>
                  <h3 className="font-bold text-[#d4af37] text-lg sm:text-xl mb-2">
                    Master Diploma in English
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Postgraduate academic research, thesis defense, literature analysis, professional rhetoric, and diplomatic discourse.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-200 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> Advanced Syntactic &amp; Lexical Mastery
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> Thesis Defense &amp; Debate Workshops
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> Career &amp; University Entrance Readiness
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/courses/master-diploma-in-english"
                    className="block text-center w-full py-2.5 px-4 bg-[#d4af37] text-[#0a192f] hover:bg-[#b89628] text-xs font-bold rounded-xl transition-all shadow-md"
                  >
                    View Master Syllabus →
                  </Link>
                </div>
              </div>

              {/* Card 3: International Student Welfare Support */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-7 rounded-3xl flex flex-col justify-between hover:bg-white/15 transition-all group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/20 border border-[#d4af37]/30 flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
                    🌐
                  </div>
                  <h3 className="font-bold text-[#d4af37] text-lg sm:text-xl mb-2">
                    International Welfare Support
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    Comprehensive relocation, legal, and academic support for seamless living in Kammanahalli, Bangalore.
                  </p>
                  <ul className="space-y-2.5 text-xs text-slate-200 border-t border-white/10 pt-4">
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> Official Admission &amp; Course Letters
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> Kammanahalli Local Accommodation Aid
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> FRRO Registration Guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> Multi-Cultural Student Community &amp; Events
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#d4af37]">✓</span> Indian University Entry Preparation
                    </li>
                  </ul>
                </div>
                <div className="pt-6">
                  <Link
                    href="/admission/foreign-students"
                    className="block text-center w-full py-2.5 px-4 bg-white/10 hover:bg-[#d4af37] hover:text-[#0a192f] text-white text-xs font-bold rounded-xl transition-all border border-white/20"
                  >
                    Admission Guidelines →
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action Buttons */}
            <div className="mt-8 text-center flex flex-wrap justify-center gap-3">
              <Link
                href="/admission/foreign-students"
                className="px-6 py-3 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-black rounded-full text-xs shadow-lg transition-all hover:-translate-y-0.5"
              >
                Apply for International Admissions →
              </Link>
              <button
                onClick={() => openCounsellingModal()}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-xs border border-white/20 transition-all"
              >
                Request Foreign Student Brochure
              </button>
            </div>
          </div>
        </section>

        {/* 9. ENGLISH FOR KIDS */}
        <section className="py-10 md:py-14 bg-white border-t border-slate-200">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-2">
                Young Learners Academy
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight">
                English for Kids (School Students)
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Inspiring early linguistic confidence, phonics, creative writing, and public speaking in a warm, child-centric setting.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: 'Kids Academic English',
                  target: 'Ages 6 to 14 Years',
                  desc: 'Phonics, word families, creative storytelling, school exam comprehension, and elocution practice.',
                  slug: 'kids-academic-english',
                },
                {
                  title: 'A2 Key for Schools (KET)',
                  target: 'Cambridge Certified',
                  desc: 'Internationally recognized Cambridge qualification for middle school students building real-world fluency.',
                  slug: 'a2-key-for-schools',
                },
                {
                  title: 'B1 Preliminary for Schools (PET)',
                  target: 'Intermediate Level',
                  desc: 'Advanced comprehension, essay writing, and paired discussions preparing high schoolers for global success.',
                  slug: 'b1-preliminary-for-schools',
                },
              ].map((k, idx) => (
                <div key={idx} className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <span className="px-2.5 py-0.5 bg-amber-100 text-[#0a192f] text-[10px] font-bold rounded-full inline-block mb-3">
                      {k.target}
                    </span>
                    <h3 className="text-lg font-bold text-[#0a192f] mb-1.5">{k.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{k.desc}</p>
                  </div>
                  <Link
                    href={`/courses/${k.slug}`}
                    className="w-full py-2.5 bg-[#0a192f] hover:bg-[#162447] text-white text-xs font-bold rounded-xl text-center transition-colors block"
                  >
                    View Program Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. PROFESSIONAL TRAINERS */}
        <section id="trainers" className="py-10 md:py-14 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-2">
                Expert Faculty
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight">
                Learn from Certified Senior Instructors
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Our trainers hold international CELTA, TESOL, and Cambridge qualifications with decades of collective pedagogical experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                {
                  name: 'Dr. Sarah Mathews',
                  role: 'Senior IELTS & OET Master Coach',
                  cred: 'CELTA, PhD in Applied Linguistics',
                  exp: '14+ Years Experience',
                  spec: 'Exam Preparation & Healthcare English',
                  img: '/images/faculty-sarah.jpg',
                },
                {
                  name: 'Prof. Rajesh Nair',
                  role: 'Head of Spoken English & Voice Coach',
                  cred: 'MA English, Cambridge DELTA Certified',
                  exp: '16+ Years Experience',
                  spec: 'Accent Neutralization & Speech Labs',
                  img: '/images/faculty-rajesh.jpg',
                },
                {
                  name: 'Madame Claire Dubois',
                  role: 'Senior French & European Linguist',
                  cred: 'DALF C2, Sorbonne University Alum',
                  exp: '11+ Years Experience',
                  spec: 'DELF & TEF Canada Preparation',
                  img: '/images/faculty-claire.jpg',
                },
                {
                  name: 'Herr Klaus Weber',
                  role: 'Lead German Language Instructor',
                  cred: 'Goethe-Zertifikat C2 Großes Diplom',
                  exp: '12+ Years Experience',
                  spec: 'German A1-B2 & Chancenkarte Prep',
                  img: '/images/faculty-klaus.jpg',
                },
              ].map((t, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-3 border-2 border-[#d4af37] bg-slate-100 flex items-center justify-center shadow-sm">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0a192f]">{t.name}</h3>
                  <p className="text-[11px] text-[#d4af37] font-semibold mt-0.5">{t.role}</p>
                  <p className="text-[10px] text-slate-500 mt-1.5">{t.cred}</p>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase">
                    {t.spec} &bull; {t.exp}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/our-trainers"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a192f] hover:bg-[#162447] text-white text-xs font-black uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Meet All Certified Faculty Members &amp; Credentials →
              </Link>
            </div>
          </div>
        </section>

        {/* 11. FOUNDER PROFILE */}
        <section id="founder" className="py-10 md:py-14 bg-white border-t border-slate-200">
          <div className="container-custom">
            <div className="bg-[#0a192f] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="lg:col-span-4 text-center lg:text-left">
                  <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-xl bg-slate-800">
                    <img
                      src="/images/faculty-director.jpg"
                      alt="Founder & Academic Director of Cambridge Academy of English"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[11px] uppercase tracking-widest text-[#d4af37] font-bold mt-3">
                    Founder &amp; Academic Director
                  </p>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    Director, Cambridge Academy of English
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    21+ Years of Leadership in English Language Education
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4af37] bg-white/10 px-3 py-1 rounded-full inline-block">
                    A Message from Our Leadership
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    &ldquo;Language is not merely grammar; it is the bridge to human opportunity.&rdquo;
                  </h2>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    When Cambridge Academy of English was established over 21 years ago in Kammanahalli, Bangalore, our founding vision was simple yet uncompromising: to provide world-class, internationally accredited language education that empowers every student to speak with unshakeable confidence.
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Over the last two decades, we have mentored thousands of Indian learners and international scholars from the Middle East, East Asia, and Africa. Today, Cambridge Academy stands as a testament to pedagogical excellence, personal mentorship, and transformative career growth.
                  </p>
                  <div className="pt-1">
                    <button
                      onClick={() => openCounsellingModal('Academic Director Consultation')}
                      className="px-5 py-2.5 bg-[#d4af37] text-[#0a192f] font-bold rounded-full text-xs hover:bg-[#b89628] transition-all shadow-md"
                    >
                      Schedule Personal Consultation with Director →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. STUDENT TESTIMONIALS */}
        <section id="testimonials" className="py-10 md:py-14 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-2">
                Student Testimonials
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight">
                Real Stories of Fluency &amp; Transformation
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Read how our programmes have empowered careers, boosted exam scores, and built confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  name: 'Soo Jung',
                  course: 'Communicative English',
                  loc: 'South Korea',
                  img: '/images/t1.jpg',
                  rating: 5,
                  comment:
                    'I studied Communicative English at Cambridge. Before I was able to speak English but not so fluently but now I gained a lot of skills in grammar and conversation which was a great advantage. Now I\'m able to give presentations and speak well.',
                },
                {
                  name: 'Geunduk Jeon',
                  course: 'Communicative English',
                  loc: 'South Korea',
                  img: '/images/t2.jpg',
                  rating: 5,
                  comment:
                    'Cambridge Academy of English had brought the best out of me .The ambience is amazing . The trainers and management are really supportive and friendly,One of the best decision I made in my life was joining a communicative English course at Cambridge.',
                },
                {
                  name: 'Omar',
                  course: 'Diploma in English Language',
                  loc: 'Yemen',
                  img: '/images/t6.jpg',
                  rating: 5,
                  comment:
                    'I’m from Yemen. I finished Diploma in English language. I used to feel very hard to learn English before but I got a very good support which helped me to learn English in a correct way and now I can say that I know English.',
                },
              ].map((t, idx) => (
                <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                      {'★'.repeat(t.rating)}
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm italic leading-relaxed mb-4">
                      &ldquo;{t.comment}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-[#d4af37]" />
                    <div>
                      <p className="font-bold text-xs text-[#0a192f]">{t.name}</p>
                      <p className="text-[10px] text-slate-400">{t.course} &bull; {t.loc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Campus Video Highlight */}
            <div className="mt-10 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm max-w-3xl mx-auto text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#0a192f] px-3 py-1 rounded-full text-white inline-block mb-3">
                Authentic Campus Life
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0a192f] mb-2">
                Watch Cambridge Academy in Action
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mb-5 max-w-xl mx-auto">
                Discover our interactive speech lab, group debates, and international student community in Kammanahalli, Bangalore.
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-black aspect-video max-w-2xl mx-auto">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/hero-classroom.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/campus-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-xs font-bold">
                <Link href="/testimonials" className="text-[#0a192f] hover:text-[#d4af37] underline">
                  Read All 9+ Verified International Reviews &rarr;
                </Link>
                <span className="text-slate-300">&bull;</span>
                <a
                  href="https://www.youtube.com/channel/UCRdBd4JLtRcqKTkyHWZJMKQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-[#d4af37]"
                >
                  📺 Official YouTube Channel &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 13. STUDENT SUCCESS STORIES */}
        <section id="success-stories" className="py-10 md:py-14 bg-white border-t border-slate-200">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Proven Results
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight mt-1">
                Student Success Stories
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Real milestones achieved by Cambridge Academy graduates across top institutions worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {[
                { title: 'Admitted to University of Manchester (UK)', student: 'Arjun Swaminathan', badge: 'IELTS Band 8.5', story: 'Cracked the IELTS Academic exam with 9 in Listening and 8.5 in Reading. Now pursuing MSc Data Science.' },
                { title: 'Registered NHS Nurse in London (UK)', student: 'Sister Ancy Philip', badge: 'OET Grade B (370 pts)', story: 'Cleared all 4 OET healthcare sub-tests on first attempt. Completed UK NMC registration seamlessly.' },
                { title: 'Secured Canadian PR via Express Entry', student: 'Manish & Neha Sharma', badge: 'CELPIP CLB 10', story: 'Maximized their CRS scores by scoring CLB 10 across all CELPIP modules following our test-prep sprint.' },
              ].map((c, idx) => (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="px-2.5 py-0.5 bg-[#0a192f] text-[#d4af37] text-[10px] font-bold rounded-full inline-block mb-2.5">
                      {c.badge}
                    </span>
                    <h3 className="text-sm font-bold text-[#0a192f] mb-1.5">{c.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{c.story}</p>
                  </div>
                  <p className="text-[11px] font-bold text-slate-500 border-t border-slate-200/60 pt-2.5">
                    Student: {c.student}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. INTERNATIONAL STUDENT ACHIEVEMENTS */}
        <section className="py-10 md:py-14 bg-slate-900 text-white relative">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                Global Footprint
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mt-1">
                International Student Achievements
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2">
                Over 21 years, we have welcomed students from across Asia, the Gulf, and Africa.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 text-center">
              {[
                { country: 'Saudi Arabia', flag: '🇸🇦', count: '5,000+ Students' },
                { country: 'Yemen', flag: '🇾🇪', count: '3,200+ Students' },
                { country: 'Thailand', flag: '🇹🇭', count: '1,800+ Students' },
                { country: 'Japan & Korea', flag: '🇯🇵🇰🇷', count: '1,200+ Students' },
                { country: 'UAE & Oman', flag: '🇦🇪🇴🇲', count: '2,500+ Students' },
                { country: 'African Nations', flag: '🌍', count: '3,000+ Students' },
              ].map((cty, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <span className="text-2xl block mb-1">{cty.flag}</span>
                  <p className="font-bold text-xs text-white">{cty.country}</p>
                  <p className="text-[10px] text-[#d4af37] font-semibold mt-0.5">{cty.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15. GOOGLE REVIEWS SECTION */}
        <section className="py-10 md:py-14 bg-white border-t border-slate-200">
          <div className="container-custom">
            <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xl text-amber-500 font-bold">★★★★★</span>
                  <span className="text-sm font-extrabold text-slate-900">4.9 / 5 Rating on Google</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0a192f] mb-1.5">
                  Trusted by 1,000+ Verified Google Reviews
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cambridge Academy of English is consistently rated as one of the highest-rated language academies in Bangalore for authentic student outcomes, supportive faculty, and communicative excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="https://maps.google.com/?q=Cambridge+Academy+of+English+Kammanahalli+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-[#0a192f] hover:bg-[#162447] text-white font-bold rounded-full text-xs shadow-md transition-all text-center"
                >
                  View All Google Reviews →
                </a>
                <a
                  href="https://maps.google.com/?q=Cambridge+Academy+of+English+Kammanahalli+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white border border-slate-300 text-slate-800 font-bold rounded-full text-xs hover:bg-slate-50 transition-all text-center"
                >
                  Leave a Google Review ★
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 16. FREQUENTLY ASKED QUESTIONS */}
        <section className="py-10 md:py-14 bg-slate-50 border-t border-slate-200">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] bg-[#0a192f] px-3.5 py-1.5 rounded-full text-white inline-block mb-2">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a192f] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
                Everything you need to know about admissions, batch schedules, and training formats.
              </p>
            </div>

            <div className="space-y-3">
              {HOMEPAGE_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#0a192f] hover:text-[#d4af37] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-slate-400 font-black text-base">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 sm:px-5 pb-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 17. CONTACT & ENQUIRY SECTION (WITH GOOGLE MAPS) */}
        <section id="contact-enquiry" className="py-10 md:py-14 bg-white border-t border-slate-200">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Campus Details & Interactive Google Maps */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                    Visit Our Campus
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#0a192f] mt-1 mb-4">
                    Contact Cambridge Academy
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Centrally located in Kammanahalli, Bangalore. Drop in for a free diagnostic assessment or speak directly with our senior educational advisors.
                  </p>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-bold text-[#0a192f]">Bangalore Campus Address</p>
                      <p className="text-slate-600 text-xs mt-0.5">
                        No 87, 2nd Floor, Nehru Road, Kammanahalli, Bangalore, Karnataka - 560084, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-bold text-[#0a192f]">Helpline Phone Numbers</p>
                      <p className="text-slate-600 text-xs mt-0.5">
                        <a href="tel:08040943580" className="font-semibold text-[#0a192f]">080-40943580</a> |{' '}
                        <a href="tel:8970506004" className="font-semibold text-[#0a192f]">8970506004</a> |{' '}
                        <a href="tel:9620806004" className="font-semibold text-[#0a192f]">9620806004</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-xl">⏰</span>
                    <div>
                      <p className="font-bold text-[#0a192f]">Working Hours</p>
                      <p className="text-slate-600 text-xs mt-0.5">
                        Monday – Saturday: 9:00 AM – 9:00 PM<br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Embedded Responsive Google Maps */}
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-64 w-full">
                  <iframe
                    title="Cambridge Academy of English Kammanahalli Bangalore Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.262534015509!2d77.6356!3d13.0125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1726a2e99447%3A0xb30ff134a66e6328!2sCambridge%20Academy%20of%20English!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Right Column: Full Student Enquiry Form */}
              <div className="lg:col-span-7">
                <EnquiryForm
                  initialCourse="Spoken English Offline (Classroom)"
                  source="Homepage Lead Section"
                  compact={false}
                />
              </div>
            </div>

            {/* Dedicated Instant Callback Section - Balanced 2-Column Banner */}
            <div className="mt-12 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Why Request a Callback / Benefits */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a192f] text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Fast Response • Within 15 Minutes
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a192f] tracking-tight">
                    Request an Instant Callback
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Short on time? Leave your mobile number and preferred time slot. Our senior academic counsellor will call you directly to discuss batch timings, course curriculums, and fee structures.
                  </p>

                  <div className="pt-1 space-y-2.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                      <span className="font-semibold">100% Free Consultation with Certified Master Trainer</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                      <span className="font-semibold">Personalized Diagnostic Level Evaluation</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                      <span className="font-semibold">Flexible morning, afternoon &amp; evening time slots</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                    <span className="font-bold text-[#0a192f]">Direct Admissions Helpline:</span>
                    <a href="tel:08040943580" className="font-bold text-[#0a192f] hover:text-[#d4af37]">080-40943580</a>
                    <span>|</span>
                    <a href="tel:8970506004" className="font-bold text-[#0a192f] hover:text-[#d4af37]">8970506004</a>
                    <span>|</span>
                    <a href="tel:9620806004" className="font-bold text-[#0a192f] hover:text-[#d4af37]">9620806004</a>
                  </div>
                </div>

                {/* Right Column: Callback Form */}
                <div className="lg:col-span-7">
                  <CallbackForm initialCourse="Spoken English / General Enquiry" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Subcomponent: Course Card
function CourseCard({
  title,
  tag,
  duration,
  desc,
  slug,
  onEnquire,
}: {
  title: string;
  tag: string;
  duration: string;
  desc: string;
  slug: string;
  onEnquire: () => void;
}) {
  return (
    <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-[#d4af37] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-white text-[#0a192f] text-[10px] font-bold rounded-full border border-slate-200">
            {tag}
          </span>
          <span className="text-[10px] font-semibold text-slate-400">⏳ {duration}</span>
        </div>
        <h3 className="text-base font-bold text-[#0a192f] group-hover:text-[#d4af37] transition-colors leading-snug">
          <Link href={`/courses/${slug}`}>{title}</Link>
        </h3>
        <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">{desc}</p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2">
        <Link
          href={`/courses/${slug}`}
          className="flex-1 py-2 bg-[#0a192f] hover:bg-[#162447] text-white text-xs font-bold rounded-xl text-center transition-colors"
        >
          View Landing Page
        </Link>
        <button
          onClick={onEnquire}
          className="px-3 py-2 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] text-xs font-bold rounded-xl transition-colors"
          title="Enquire About This Course"
        >
          Enquire
        </button>
      </div>
    </div>
  );
}
