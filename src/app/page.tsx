import Link from 'next/link';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 1. Hero Banner - Cinematic & Premium */}
      <section className="relative min-h-[auto] md:min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-primary/80 to-slate-900 z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center opacity-40 animate-[pulse_10s_ease-in-out_infinite]" style={{ backgroundImage: "url('/images/slider1.jpg')" }}></div>
        </div>

        <div className="container-custom relative z-20 w-full pt-32 pb-20 md:pb-40 text-center md:text-left flex flex-col md:flex-row items-center gap-12 fade-in-up">
          <div className="max-w-3xl flex-1">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping relative"><span className="absolute inset-0 bg-accent rounded-full animate-none"></span></span>
              <span className="text-xs font-bold tracking-widest text-white uppercase">14+ Years of Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Master <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#FFE066] to-white">English Fluency</span> <br className="hidden sm:block" />
              With Experts
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl font-normal leading-relaxed drop-shadow-md">
              India's premier academy for spoken English, IELTS, PTE, and foreign language training. Certified trainers based in Bangalore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-start">
              <Link href="/book" className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-white text-primary font-bold rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 text-center text-lg">
                Book Your Course
              </Link>
              <Link href="/test" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40 text-center text-lg hover:-translate-y-1">
                Take Placement Test
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block flex-1 relative w-full h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-[3rem] transform rotate-3 scale-105 blur-lg"></div>
            <img src="/images/slider3.jpg" alt="Students Learning" className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white/10" />
            
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce" style={{animationDuration: '3s'}}>
               <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-3xl">⭐</div>
               <div>
                 <p className="font-bold text-slate-800 text-lg">4.9/5 Rating</p>
                 <p className="text-sm text-slate-500 font-medium">From 1000+ Students</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Benefits Bar & Course Finder Section */}
      <section className="bg-white relative overflow-hidden pb-24 pt-8 md:pt-0">
        
        {/* Overlapping Benefits Bar - Inside the white section to prevent background gaps */}
        <div className="relative z-30 mb-16 md:-mt-16 md:mb-24 container-custom fade-in-up stagger-1">
          <div className="glass-card bg-white/90 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-6 text-center md:divide-x md:divide-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100/50">
            {[
              { icon: '🏆', text: 'Over 14+ Years of experience' },
              { icon: '⭐', text: 'Rated Excellent on 1000+ reviews' },
              { icon: '🎓', text: 'Highly qualified certified faculties' },
              { icon: '🎯', text: 'Intensive teaching methodology' },
              { icon: '📍', text: 'Premium Bangalore Location' }
            ].map((item, idx) => (
              <div key={idx} className="px-4 flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-300">
                <span className="text-4xl mb-3">{item.icon}</span>
                <p className="text-sm font-bold text-primary">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Course Finder Background Decoration */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="container-custom relative z-10 fade-in-up stagger-2">
          <div className="max-w-4xl mx-auto glass-dark p-10 shadow-2xl relative overflow-hidden rounded-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-3xl font-bold text-white mb-8">Find the right course for you</h2>
            
            <form action="/courses" method="GET" className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 text-xs uppercase tracking-wider font-semibold">I would like to join</label>
                <select className="bg-white/10 border-b-2 border-white/20 text-white p-3 outline-none focus:border-accent transition-colors appearance-none">
                  <option value="" className="text-primary">choose your goal</option>
                  <option value="3" className="text-primary">Learn English Speaking Course Online</option>
                  <option value="4" className="text-primary">Spoken English Classes</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 text-xs uppercase tracking-wider font-semibold">My English level is</label>
                <select className="bg-white/10 border-b-2 border-white/20 text-white p-3 outline-none focus:border-accent transition-colors appearance-none">
                  <option value="" className="text-primary">choose your level</option>
                  <option value="beginner" className="text-primary">beginner</option>
                  <option value="intermediate" className="text-primary">intermediate</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 text-xs uppercase tracking-wider font-semibold">I prefer to study</label>
                <select className="bg-white/10 border-b-2 border-white/20 text-white p-3 outline-none focus:border-accent transition-colors appearance-none">
                  <option value="" className="text-primary">choose location</option>
                  <option value="online" className="text-primary">online</option>
                  <option value="classroom" className="text-primary">classroom</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-300 text-xs uppercase tracking-wider font-semibold">My age is</label>
                <select className="bg-white/10 border-b-2 border-white/20 text-white p-3 outline-none focus:border-accent transition-colors appearance-none">
                  <option value="" className="text-primary">tell us your age</option>
                  <option value="adult" className="text-primary">18+</option>
                </select>
              </div>
              <div>
                <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-3 rounded shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Trustpilot / Google Reviews */}
      <section className="bg-slate-50 py-8 border-y border-slate-200">
        <div className="container-custom flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-1 text-accent text-2xl">
            ★★★★★
          </div>
          <p className="text-slate-700 font-medium text-lg">
            98% of our students rate their experience as &apos;Excellent&apos;. 
            <a href="https://www.google.com/search?q=cambridge+academy+of+english+bangalore#lrd=0x3bae16790a383d47:0xe2a381ef8d6cc865,1,,," target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-accent ml-2 underline decoration-accent decoration-2 underline-offset-4 transition-colors">Read Google Reviews</a>
          </p>
        </div>
      </section>

      {/* 5. Course Categories - Bento Grid */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Course Categories</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 text-lg">Master the language with our diverse, expertly crafted training programs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Learn English Speaking Online',
                desc: 'Certified English Speaking Course via live interactive sessions.',
                img: '/images/course-online.jpg',
                link: '/courses/learn-english-speaking-course-online'
              },
              {
                title: 'Spoken English Classes',
                desc: 'Assist you with spoken English training if you lack fluency and confidence.',
                img: '/images/course-spoken.jpg',
                link: '/courses/class-room-english-course'
              },
              {
                title: 'Exam Preparation (IELTS/PTE)',
                desc: 'Best coaching to improve your listening, reading, and speaking skills for 8.5+ bands.',
                img: '/images/course-exam.jpg',
                link: '/courses/exam-preparation-course'
              },
              {
                title: 'Foreign Language Courses',
                desc: 'Learn Spanish, German, French, Italian, Japanese, Chinese and Arabic.',
                img: '/images/course-foreign.jpg',
                link: '/courses/foreign-language-courses-in-bangalore-india'
              },
              {
                title: 'Teacher Training',
                desc: 'Empower yourself to excel in the field of education.',
                img: '/images/course-teacher.jpg',
                link: '/courses/teacher-training-in-banglore'
              },
              {
                title: 'Cambridge Exam',
                desc: 'Specialized English exam training for Cambridge English certifications.',
                img: '/images/course-cambridge.jpg',
                link: '/courses/Cambridge-Exam'
              }
            ].map((course, idx) => (
              <Link key={idx} href={course.link} className="group block relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out" style={{ backgroundImage: `url(${course.img})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{course.title}</h3>
                    <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{course.desc}</p>
                    <span className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider">
                      Explore Course <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Upcoming Courses & Events */}
      <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 md:gap-4 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-4xl font-extrabold mb-4">Upcoming Events</h2>
              <div className="w-20 h-1.5 bg-accent rounded-full"></div>
            </div>
            <Link href="/courses" className="inline-block text-accent hover:text-white font-bold transition-colors">View full calendar →</Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { date: 'Every Monday', name: 'Intensive General English', type: 'Weekly' },
              { date: '26th Sept', name: 'Managing Virtual Teams', type: 'Workshop' },
              { date: '4-5 Nov', name: 'Intercultural Competence', type: 'Seminar' },
            ].map((evt, idx) => (
              <div key={idx} className="glass-dark p-6 border-l-4 border-l-accent hover:-translate-y-1 transition-transform cursor-pointer group">
                <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs font-bold uppercase tracking-wider mb-4 text-slate-300">{evt.type}</span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{evt.name}</h3>
                <p className="text-slate-400 flex items-center gap-2"><span>🗓</span> {evt.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Checklist / Why Cambridge */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-6">Why choose <br/><span className="text-accent">Cambridge Academy?</span></h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are an authorized partner for British Council, IDP & Cambridge ELT exam preparations with proven 8.5 band training methods.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                {[
                  "Excellent Infrastructure",
                  "Proven 8.5 bands training methods",
                  "Students from 18 different countries",
                  "British Council IELTS Registration Centre",
                  "Highly qualified, certified & experienced faculties",
                  "Flexible timings & small group attention",
                  "Vast experience in corporate & teacher training",
                  "Interactive classrooms and modern teaching aids",
                  "Customized courses for all age groups",
                  "Specialized focus on speaking and listening",
                  "Comprehensive study materials provided",
                  "Regular mock tests and assessments",
                  "Dedicated doubt-clearing sessions",
                  "Lifetime support for alumni"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-slate-50 hover:border-accent/30 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5 text-xs">✓</div>
                    <span className="font-medium text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
              <img src="/images/slider3.jpg" alt="Students" className="rounded-3xl shadow-2xl w-full h-[400px] md:h-[600px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Genuine Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
            <h2 className="text-4xl font-extrabold text-primary mb-4">What Our Students Say</h2>
            <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Soo Jung', country: 'Korea', text: 'Cambridge Academy of English provided me with an excellent environment to improve my English. The teachers are incredibly supportive.' },
              { name: 'Geunduk Jeon', country: 'Korea', text: 'The methodology and infrastructure are amazing. I highly recommend it to anyone looking to master the language.' },
              { name: 'Hyoungmi Min', country: 'Korea', text: 'I had a wonderful experience. The interactive classes really helped boost my confidence in speaking English.' },
              { name: 'Shin Bomsoo', country: 'Korea', text: 'The trainers are highly qualified and very patient. I achieved my target band score easily with their guidance.' },
              { name: 'Tenzin Ngodup', country: 'Tibet', text: 'A great place to learn! Meeting students from 18 different countries gave me a truly international experience.' },
              { name: 'Omar', country: 'Yemen', text: 'I am so grateful for the small group attention and the dedicated doubt-clearing sessions. It made a huge difference.' },
              { name: 'Esmail', country: 'Iran', text: 'The flexible timings allowed me to study while managing my work. Best English academy in Bangalore without a doubt.' },
              { name: 'Edris', country: 'Iran', text: 'Their proven training methods for IELTS are exceptional. I felt fully prepared on the day of my exam.' },
              { name: 'Mohammed Farooq', country: 'Iran', text: 'Excellent study materials and regular mock tests helped me track my progress continuously. Highly recommended!' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow relative">
                <div className="text-accent text-4xl absolute top-6 right-6 opacity-30">"</div>
                <div className="flex text-accent text-sm mb-4">★★★★★</div>
                <p className="text-slate-600 mb-6 relative z-10 text-sm leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{testimonial.name}</h4>
                    <span className="text-xs text-slate-500 font-medium">{testimonial.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Free Online Test Section - Immersive */}
      <section className="py-32 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/slider2.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay z-0"></div>
        
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 bg-accent text-primary font-bold rounded-full text-sm uppercase tracking-wider mb-6">Free Assessment</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">What is your level of English?</h2>
          <p className="text-xl text-slate-300 mb-10 font-light">
            Find out your English level in just 20 minutes with our adaptive online test. Get instant results and personalized course recommendations.
          </p>
          <Link href="/test" className="btn-premium text-lg px-10 py-4 shadow-[0_0_30px_rgba(212,175,55,0.6)]">
            Start Online Test Now
          </Link>
        </div>
      </section>

      {/* 10. Summary Stats */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">75+</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Best Courses</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">100+</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Best Teachers</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">18</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Countries</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">185k</div>
              <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Learners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


