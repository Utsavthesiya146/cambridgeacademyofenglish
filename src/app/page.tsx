import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/images/slider1.jpg')" }}
        ></div>
        <div className="container-custom relative z-20 text-center text-white pt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
            Cambridge Academy of English
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gold drop-shadow-md">
            India’s No.1 English Language Teaching Academy
          </h2>
          <Link href="/courses/learn-english-speaking-course-online" className="btn bg-red-600 hover:bg-red-700 text-white border-none px-8 py-3 text-lg rounded shadow-lg transition-transform hover:scale-105">
            Book your course
          </Link>
        </div>
      </section>

      {/* 2. Benefits Bar */}
      <section className="bg-white py-8 border-b border-slate-200 shadow-sm relative z-30 -mt-6 mx-4 md:mx-auto max-w-6xl rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center divide-x divide-slate-100">
          <div className="px-2 flex flex-col items-center">
            <span className="text-3xl mb-2 text-gold">🏆</span>
            <p className="text-sm font-semibold text-navy">Over 14+ Year’s of experience</p>
          </div>
          <div className="px-2 flex flex-col items-center">
            <span className="text-3xl mb-2 text-gold">⭐</span>
            <p className="text-sm font-semibold text-navy">Rated Excellent based on 1000+ reviews</p>
          </div>
          <div className="px-2 flex flex-col items-center">
            <span className="text-3xl mb-2 text-gold">🎓</span>
            <p className="text-sm font-semibold text-navy">All our faculties are highly qualified</p>
          </div>
          <div className="px-2 flex flex-col items-center">
            <span className="text-3xl mb-2 text-gold">🎯</span>
            <p className="text-sm font-semibold text-navy">Intensive teaching method</p>
          </div>
          <div className="px-2 flex flex-col items-center col-span-2 md:col-span-1">
            <span className="text-3xl mb-2 text-gold">📍</span>
            <p className="text-sm font-semibold text-navy">Bangalore Location</p>
          </div>
        </div>
      </section>

      {/* 3. Course Finder */}
      <section className="py-12 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-navy mb-6">Find the right course for you....</h2>
          <div className="bg-navy p-6 rounded-lg shadow-md">
            <form className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm">I would like to join</label>
                <select className="p-2 rounded text-slate-800 outline-none border-none">
                  <option value="">choose your goal</option>
                  <option value="3">Learn English Speaking Course Online</option>
                  <option value="4">Spoken English Classes</option>
                  <option value="5">Exam Preparation Course</option>
                  <option value="6">Foreign Language Courses</option>
                  <option value="29">Teacher Training Course</option>
                  <option value="32">Cambridge Exam</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm">My English level is</label>
                <select className="p-2 rounded text-slate-800 outline-none border-none">
                  <option value="">choose your level</option>
                  <option value="beginner">beginner</option>
                  <option value="intermediate">intermediate</option>
                  <option value="advanced">advanced</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm">I prefer to study</label>
                <select className="p-2 rounded text-slate-800 outline-none border-none">
                  <option value="">choose location</option>
                  <option value="location_online">online</option>
                  <option value="location_classroom">classroom</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm">My age is</label>
                <select className="p-2 rounded text-slate-800 outline-none border-none">
                  <option value="">tell us your age</option>
                  <option value="age_7_13">7-13</option>
                  <option value="age_18_19">18-19</option>
                  <option value="age_20_29">20-29</option>
                  <option value="age_31_plus">over 30</option>
                </select>
              </div>
              <div>
                <button type="button" className="bg-green-600 hover:bg-green-700 text-white p-2 rounded w-full font-medium transition-colors">
                  View courses
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Trustpilot / Google Reviews Bar */}
      <section className="bg-white py-6 border-y border-slate-200">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-700 text-sm md:text-base">
            98% of our students rate their experience and teaching as 'Great' or 'Excellent'. 
            <a href="#" className="font-bold text-navy hover:underline ml-1">Read the latest reviews on Google.</a>
          </p>
          <div className="flex items-center gap-2">
            <div className="flex text-orange-500">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="font-medium text-slate-800">Google ratings</span>
          </div>
        </div>
      </section>

      {/* 5. Course Categories */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-navy/90 z-0"></div>
        <div className="container-custom relative z-10">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Course categories</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Learn English Speaking Course Online in Bangalore',
                desc: 'Cambridge Academy of English offers a certified English Speaking Course in Kammanahalli, Bangalore, India.',
                img: '/images/course-online.jpg',
                link: '/courses/learn-english-speaking-course-online'
              },
              {
                title: 'Spoken English Classes in Bangalore',
                desc: 'We can assist you with spoken English training if you lack fluency in English and feel weak in spoken communication.',
                img: '/images/course-spoken.jpg',
                link: '/courses/class-room-english-course'
              },
              {
                title: 'Exam Preparation Course in Bangalore',
                desc: 'Exam Preparation Training in Bangalore | Best IELTS Coaching In Bangalore to improve your listening, reading, and speaking skills.',
                img: '/images/course-exam.jpg',
                link: '/courses/exam-preparation-course'
              },
              {
                title: 'Foreign Language Courses in Bangalore',
                desc: 'Learn Spanish, German, French, Italian, Japanese, Chinese and Arabic Courses with Best Faculties and Native Speakers.',
                img: '/images/course-foreign.jpg',
                link: '/courses/foreign-language-courses-in-bangalore-india'
              },
              {
                title: 'Teacher Training Course in Bangalore',
                desc: 'Discover how these courses can empower you to excel in the field of education and take your skills to the next level.',
                img: '/images/course-teacher.jpg',
                link: '/courses/teacher-training-in-banglore'
              },
              {
                title: 'Cambridge Exam',
                desc: 'English exam training in Bangalore | Cambridge English',
                img: '/images/course-cambridge.jpg',
                link: '/courses/Cambridge-Exam'
              }
            ].map((course, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg group">
                <Link href={course.link} className="block relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${course.img})` }}></div>
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
                </Link>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-navy mb-3 line-clamp-2 hover:text-red-600 transition-colors">
                    <Link href={course.link}>{course.title}</Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3">{course.desc}</p>
                  <div className="mt-auto">
                    <Link href={course.link} className="inline-block border-2 border-navy text-navy font-medium px-4 py-2 rounded hover:bg-navy hover:text-white transition-colors">
                      View courses
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Upcoming Courses & Events */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy">Upcoming courses and events</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { date: 'Starting every Monday', name: 'General English 30+' },
              { date: 'Starting every Monday', name: 'Intensive General English' },
              { date: 'Starting every Monday', name: 'Business & Professional English' },
              { date: '26th September', name: 'Managing Virtual Teams' },
              { date: '9th October', name: 'Professional Writing Skills' },
              { date: '4 and 5 November', name: 'Developing Intercultural Competence' },
            ].map((evt, idx) => (
              <div key={idx} className="bg-white border-l-4 border-gold p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-red-600 mb-2">{evt.date}</p>
                <p className="font-bold text-navy">{evt.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Checklist / Why Cambridge */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">Why Cambridge Academy of English?</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Excellent Infrastructure and interactive classrooms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Authorized partner from British council, IDP & Cambridge ELT exam preparations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Proven 8.5 bands training methods</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Vast experience in conducting corporate training & Teachers workshop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Flexible class timings and Professional teaching environment</span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Training in smaller groups with intensive attention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Students from 18 different countries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Unique and exclusive tips and techniques for better results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Regular and weekend batches for students and working employees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-slate-700">Highly qualified, certified and experienced faculties</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Free Online Test Section */}
      <section className="py-16 bg-navy text-white relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gold">Free online English test</h2>
              <p className="font-bold text-xl mb-2">What is your level of English?</p>
              <p className="font-bold text-xl mb-6">Find out your English level in just 20 minutes.</p>
              <ul className="list-disc pl-5 space-y-3 mb-8 text-slate-200">
                <li>Questions get easier or harder according to how well you do. If your English is very good you will answer more difficult questions.</li>
                <li>You will be able to see the correct answers to the questions after you answer them.</li>
              </ul>
              <Link href="/test" className="inline-block border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-3 rounded transition-colors">
                Online English Test
              </Link>
            </div>
            <div className="hidden md:block">
              <img src="/images/slider2.jpg" alt="Online Test" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. From the Blog */}
      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-navy text-center mb-10">From the blog</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-48 bg-slate-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-navy group-hover:text-red-600 transition-colors">Mastering the IELTS Exam: Your Comprehensive Guide</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-48 bg-slate-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-navy group-hover:text-red-600 transition-colors">Mastering the TOEFL Test: Your Ultimate Guide</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="h-48 bg-slate-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-navy group-hover:text-red-600 transition-colors">Excelling in NEET: Medical Coaching Institute</h3>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="border-2 border-navy text-navy font-bold px-8 py-2 rounded hover:bg-navy hover:text-white transition-colors">All Blogs</button>
          </div>
        </div>
      </section>

      {/* 10. Summary Stats */}
      <section className="py-12 bg-navy-dark text-white text-center">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl font-bold text-gold mb-2">75+</div>
            <div className="text-sm uppercase tracking-wider text-slate-300">Best courses</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold mb-2">100+</div>
            <div className="text-sm uppercase tracking-wider text-slate-300">Best teachers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold mb-2">18</div>
            <div className="text-sm uppercase tracking-wider text-slate-300">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold mb-2">185,625</div>
            <div className="text-sm uppercase tracking-wider text-slate-300">Learners</div>
          </div>
        </div>
      </section>
    </>
  );
}
