import Link from 'next/link';
import { notFound } from 'next/navigation';

const courses = {
  'learn-english-speaking-course-online': {
    title: 'Learn English Speaking Course Online',
    subtitle: 'Certified English Speaking Course via live interactive sessions.',
    img: '/images/course-online.jpg',
    content: 'Elevate your speaking skills with live interactive guidance from expert mentors. Our online English speaking courses are designed for professionals, students, and anyone looking to communicate with confidence globally. Flexible timings, small batches, and a highly interactive curriculum ensure you achieve fluency from the comfort of your home.',
    duration: '2 - 3 Months',
    level: 'Beginner to Advanced',
    format: 'Online Live Sessions'
  },
  'class-room-english-course': {
    title: 'Spoken English Classes (Campus)',
    subtitle: 'Assist you with spoken English training if you lack fluency and confidence.',
    img: '/images/course-spoken.jpg',
    content: 'Immerse yourself in our dynamic classroom environment located in Kammanahalli, Bangalore. Boost your confidence with immersive classroom sessions, vocabulary drills, group discussions, and public speaking exercises. Perfect for learners who prefer face-to-face interaction and real-time feedback from our certified trainers.',
    duration: '2 - 3 Months',
    level: 'Beginner to Advanced',
    format: 'Classroom Training'
  },
  'exam-preparation-course': {
    title: 'Exam Preparation (IELTS/PTE)',
    subtitle: 'Best coaching to improve your listening, reading, writing and speaking skills.',
    img: '/images/course-exam.jpg',
    content: 'Our specialized IELTS, PTE, and TOEFL preparation courses are crafted to help you achieve your desired band scores (8.5+). With intensive practice tests, proven strategies, and expert feedback, we ensure you are fully prepared to excel in your global education or immigration journey.',
    duration: '4 - 8 Weeks',
    level: 'Intermediate to Advanced',
    format: 'Online & Classroom'
  },
  'foreign-language-courses-in-bangalore-india': {
    title: 'Foreign Language Courses',
    subtitle: 'Learn Spanish, German, French, Italian, Japanese, Chinese and Arabic.',
    img: '/images/course-foreign.jpg',
    content: 'Broaden your horizons by learning a new language. We offer comprehensive courses in Spanish, German, French, Italian, Japanese, Chinese, and Arabic. Taught by native and highly proficient speakers, our language courses cover reading, writing, listening, and speaking to prepare you for global opportunities.',
    duration: '3 - 6 Months',
    level: 'Beginner (A1) to Advanced (C1)',
    format: 'Online & Classroom'
  },
  'teacher-training-in-banglore': {
    title: 'Teacher Training Course',
    subtitle: 'Empower yourself to excel in the field of education.',
    img: '/images/course-teacher.jpg',
    content: 'Our Teacher Training programs are designed for aspiring and current educators. Learn advanced pedagogical techniques, classroom management, and modern teaching methodologies. Equip yourself with a certification that opens doors to prestigious teaching opportunities worldwide.',
    duration: '4 Weeks',
    level: 'Advanced',
    format: 'Classroom & Practical'
  },
  'Cambridge-Exam': {
    title: 'Cambridge Exam',
    subtitle: 'Specialized English exam training for Cambridge English certifications.',
    img: '/images/course-cambridge.jpg',
    content: 'Prepare for internationally recognized Cambridge English Qualifications (such as FCE, CAE, and CPE). Our tailored curriculum focuses on the exact format of the Cambridge exams, ensuring you build the rigorous vocabulary, grammar, and comprehension skills required to pass with flying colors.',
    duration: '8 - 12 Weeks',
    level: 'Intermediate to Advanced',
    format: 'Online & Classroom'
  }
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = courses[params.slug as keyof typeof courses];

  if (!course) {
    notFound();
  }

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/80 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${course.img})` }}></div>
        <div className="container-custom relative z-20 pt-20 fade-in-up">
          <div className="max-w-3xl">
            <Link href="/courses" className="text-accent font-bold text-sm tracking-widest uppercase mb-6 inline-flex items-center gap-2 hover:text-white transition-colors">
              <span>←</span> Back to all courses
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
              {course.title}
            </h1>
            <p className="text-xl text-slate-300 font-light drop-shadow-md">
              {course.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 fade-in-up stagger-1">
              <h2 className="text-3xl font-extrabold text-primary mb-6">Course Overview</h2>
              <div className="w-16 h-1 bg-accent rounded-full mb-8"></div>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                {course.content}
              </p>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-10">
                <h3 className="text-xl font-bold text-primary mb-6">What you will learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Advanced vocabulary building', 'Grammar mastery & application', 'Confidence in public speaking', 'Fluency in real-world scenarios'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar details */}
            <div className="lg:col-span-1 fade-in-up stagger-2">
              <div className="glass-card p-8 bg-slate-50 sticky top-32">
                <h3 className="text-xl font-bold text-primary mb-6">Course Details</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Duration</span>
                    <span className="text-lg font-medium text-primary">{course.duration}</span>
                  </div>
                  <hr className="border-slate-200" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Level</span>
                    <span className="text-lg font-medium text-primary">{course.level}</span>
                  </div>
                  <hr className="border-slate-200" />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Format</span>
                    <span className="text-lg font-medium text-primary">{course.format}</span>
                  </div>
                </div>

                <Link href="/book" className="btn-premium w-full shadow-[0_4px_15px_rgba(212,175,55,0.3)]">
                  Enroll Now
                </Link>
                
                <p className="text-center text-xs text-slate-500 mt-4">
                  Need help? <a href="tel:080-40943580" className="text-primary font-bold hover:text-accent">Call 080-40943580</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
