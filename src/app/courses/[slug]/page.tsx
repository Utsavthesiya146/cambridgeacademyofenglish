import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { COURSES_DATA, CourseDetail } from '@/data/coursesData';
import EnquiryForm from '@/components/EnquiryForm';
import CallbackForm from '@/components/CallbackForm';
import { CourseSchema, FAQSchema, BreadcrumbSchema } from '@/components/StructuredData';

export async function generateStaticParams() {
  return Object.keys(COURSES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES_DATA[slug];

  if (!course) {
    return {
      title: 'Course Not Found | Cambridge Academy of English',
    };
  }

  const siteUrl = 'https://cambridgeacademyofenglish.vercel.app';
  const canonicalUrl = `${siteUrl}/courses/${course.slug}`;

  return {
    title: course.metaTitle,
    description: course.metaDescription,
    keywords: course.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: course.metaTitle,
      description: course.metaDescription,
      url: canonicalUrl,
      siteName: 'Cambridge Academy of English',
      images: [
        {
          url: `${siteUrl}${course.heroImage}`,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.metaTitle,
      description: course.metaDescription,
      images: [`${siteUrl}${course.heroImage}`],
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course: CourseDetail | undefined = COURSES_DATA[slug];

  if (!course) {
    notFound();
  }

  const canonicalUrl = `https://cambridgeacademyofenglish.vercel.app/courses/${course.slug}`;

  return (
    <>
      {/* Structured Data Schemas */}
      <CourseSchema
        name={course.title}
        description={course.metaDescription}
        url={canonicalUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://cambridgeacademyofenglish.vercel.app' },
          { name: 'Courses', url: 'https://cambridgeacademyofenglish.vercel.app/courses' },
          { name: course.shortTitle, url: canonicalUrl },
        ]}
      />
      <FAQSchema items={course.faqs} />

      <div className="overflow-hidden bg-slate-50 text-slate-800">
        {/* 1. HERO SECTION - CLEAN & FOCUSED */}
        <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center bg-[#0a192f] text-white pt-28 pb-16 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#1e3a8a]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10 w-full">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-300">
              <Link href="/" className="hover:text-[#d4af37] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/courses" className="hover:text-[#d4af37] transition-colors">
                Courses
              </Link>
              <span>/</span>
              <span className="text-[#d4af37] font-semibold">{course.categoryName}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#d4af37] text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md">
                  <span>★</span>
                  <span>{course.categoryName}</span>
                  <span className="text-white/40">•</span>
                  <span className="text-white font-medium">{course.mode}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4 drop-shadow-md">
                  {course.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed mb-6 max-w-2xl">
                  {course.tagline}
                </p>

                {/* Quick Highlights Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 text-xs font-semibold">
                  <div className="bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                    <p className="text-slate-400 text-[10px] uppercase font-bold">Duration</p>
                    <p className="text-white mt-0.5">{course.duration}</p>
                  </div>
                  <div className="bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                    <p className="text-slate-400 text-[10px] uppercase font-bold">Format</p>
                    <p className="text-white mt-0.5">{course.mode}</p>
                  </div>
                  <div className="bg-white/10 border border-white/10 rounded-xl p-3 backdrop-blur-md col-span-2 sm:col-span-1">
                    <p className="text-slate-400 text-[10px] uppercase font-bold">Experience</p>
                    <p className="text-[#d4af37] mt-0.5 font-bold">21 Years of Excellence</p>
                  </div>
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#enrolment-form"
                    className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#b89628] text-[#0a192f] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                  >
                    Enquire Now &amp; Book Batch
                  </a>
                  <a
                    href={`https://wa.me/918970506004?text=${encodeURIComponent(
                      `Hello Cambridge Academy, I am interested in ${course.title}. Please share batch timings and details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-sm flex items-center gap-2"
                  >
                    <span>💬</span> WhatsApp Admissions
                  </a>
                </div>
              </div>

              {/* Right Side Visual Banner */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] group">
                  <img
                    src={course.heroImage}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
                      Cambridge Academy of English
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      Bangalore Campus &bull; Certified Instructors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MAIN CONTENT & SIDEBAR GRID */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Comprehensive Course Details */}
              <div className="lg:col-span-7 space-y-16">
                {/* Course Introduction */}
                <div>
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                    Course Overview
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a192f] mt-1 mb-6">
                    About {course.title}
                  </h2>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                    {course.intro}
                  </p>
                </div>

                {/* Who Should Join? */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h3 className="text-xl font-bold text-[#0a192f] mb-4 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#0a192f] flex items-center justify-center text-sm font-black">
                      👥
                    </span>
                    Who Should Join This Course?
                  </h3>
                  <ul className="space-y-3">
                    {course.whoShouldJoin.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="text-emerald-500 font-bold text-base leading-none mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Course Objectives */}
                <div>
                  <h3 className="text-xl font-bold text-[#0a192f] mb-4 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-amber-100 text-[#d4af37] flex items-center justify-center text-sm font-black">
                      🎯
                    </span>
                    Course Objectives
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.objectives.map((obj, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm hover:border-[#d4af37]/50 transition-colors"
                      >
                        <span className="text-xs font-bold text-[#d4af37] block mb-1">
                          Objective 0{idx + 1}
                        </span>
                        <p className="text-sm text-slate-700 font-medium leading-snug">{obj}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What Students Will Learn */}
                <div className="bg-[#0a192f] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"></div>
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0a192f] flex items-center justify-center text-sm font-black">
                      ⚡
                    </span>
                    What You Will Master
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {course.whatYouLearn.map((skill, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 text-sm text-slate-200">
                        <span className="w-5 h-5 rounded-full bg-white/10 text-[#d4af37] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          ★
                        </span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Curriculum / Modules */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                        Step-by-Step Learning
                      </span>
                      <h3 className="text-2xl font-extrabold text-[#0a192f] mt-1">
                        Curriculum &amp; Training Modules
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-slate-400 bg-white px-3 py-1.5 rounded-full border border-slate-200">
                      {course.curriculum.length} Core Modules
                    </span>
                  </div>

                  <div className="space-y-4">
                    {course.curriculum.map((mod, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                              Phase {idx + 1}
                            </span>
                            <h4 className="text-lg font-bold text-[#0a192f] mt-0.5">
                              {mod.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1 mb-4">
                              {mod.description}
                            </p>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-100">
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Key Topics Covered:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {mod.topics.map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-lg border border-slate-200/60"
                              >
                                &bull; {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training Methodology */}
                <div className="bg-slate-100/70 p-8 rounded-3xl border border-slate-200">
                  <h3 className="text-xl font-bold text-[#0a192f] mb-3 flex items-center gap-2">
                    <span>🔬</span> Cambridge Communicative Methodology
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {course.methodology}
                  </p>
                </div>

                {/* Trainer Information & Qualifications */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#0a192f] text-[#d4af37] flex items-center justify-center text-3xl font-black flex-shrink-0 shadow-lg">
                    🎓
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                      World-Class Faculty
                    </span>
                    <h4 className="text-lg font-bold text-[#0a192f] mt-0.5 mb-2">
                      Experienced &amp; Certified Trainers
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {course.trainerInfo}
                    </p>
                  </div>
                </div>

                {/* Frequently Asked Questions */}
                <div>
                  <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                    Got Questions?
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0a192f] mt-1 mb-6">
                    Frequently Asked Questions
                  </h3>

                  <div className="space-y-4">
                    {course.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm"
                      >
                        <h4 className="text-base font-bold text-[#0a192f] mb-2 flex items-start gap-2">
                          <span className="text-[#d4af37] font-black">Q.</span>
                          <span>{faq.question}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials (if available) */}
                {course.testimonials && course.testimonials.length > 0 && (
                  <div>
                    <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                      Student Feedback
                    </span>
                    <h3 className="text-2xl font-extrabold text-[#0a192f] mt-1 mb-6">
                      What Our Students Say
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                      {course.testimonials.map((t, idx) => (
                        <div
                          key={idx}
                          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative"
                        >
                          <div className="flex items-center gap-1 text-amber-400 text-sm mb-3">
                            {'★'.repeat(t.rating)}
                          </div>
                          <p className="text-slate-700 text-sm italic leading-relaxed mb-4">
                            &ldquo;{t.comment}&rdquo;
                          </p>
                          <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                            <div>
                              <p className="font-bold text-xs text-[#0a192f]">{t.name}</p>
                              <p className="text-[10px] text-slate-400">{t.location}</p>
                            </div>
                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                              Verified Student
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Sticky Enquiry Card & Instant Callback */}
              <div className="lg:col-span-5 space-y-8">
                <div id="enrolment-form" className="sticky top-28 space-y-6">
                  {/* Dedicated Course Enquiry Form */}
                  <EnquiryForm
                    initialCourse={course.title}
                    source={`Landing Page: ${course.slug}`}
                    compact={false}
                  />

                  {/* Instant Callback Form */}
                  <CallbackForm initialCourse={course.title} />

                  {/* Campus Address & Fast Contact Card */}
                  <div className="bg-[#0a192f] text-white p-6 rounded-2xl shadow-xl">
                    <p className="text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-2">
                      Need Direct Assistance?
                    </p>
                    <h4 className="text-base font-bold text-white mb-4">
                      Talk with our Academic Director
                    </h4>
                    <div className="space-y-3 text-xs text-slate-300">
                      <p className="flex items-center gap-2">
                        <span>📍</span> No 87, 2nd Floor, Nehru Road, Kammanahalli, Bangalore - 560084
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📞</span>
                        <a href="tel:08040943580" className="hover:text-white font-semibold">080-40943580</a> |{' '}
                        <a href="tel:8970506004" className="hover:text-white font-semibold">8970506004</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>⏰</span> Mon - Sat: 9:00 AM – 9:00 PM | Sun: By Appointment
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                      <a
                        href="https://maps.google.com/?q=Cambridge+Academy+of+English+Kammanahalli+Bangalore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#d4af37] hover:underline font-semibold"
                      >
                        Get Campus Directions →
                      </a>
                      <span className="text-[10px] text-slate-400">21 Yrs of Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EXPLORE OTHER COURSES STRIP */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                  Browse Catalog
                </span>
                <h3 className="text-2xl font-bold text-[#0a192f] mt-1">
                  Explore Related Programmes
                </h3>
              </div>
              <Link
                href="/courses"
                className="mt-4 sm:mt-0 text-xs font-bold text-[#0a192f] hover:text-[#d4af37] transition-colors"
              >
                View All Courses →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(COURSES_DATA)
                .filter((c) => c.slug !== course.slug)
                .slice(0, 4)
                .map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/courses/${rel.slug}`}
                    className="group bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#d4af37] transition-all hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#d4af37] uppercase tracking-wider block mb-1">
                        {rel.categoryName}
                      </span>
                      <h4 className="text-sm font-bold text-[#0a192f] group-hover:text-[#d4af37] transition-colors line-clamp-2">
                        {rel.shortTitle}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 font-normal">
                        {rel.tagline}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#0a192f]">
                      <span>{rel.mode}</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
