import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Spoken English Classes in Bangalore | Cambridge Academy of English",
  description: "Best Spoken English Classes in Bangalore designed for people who require experience in individual learning from our experienced and highly qualified trainers.",
};

export default function ClassRoomEnglishCoursePage() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      
      {/* Breadcrumb Section */}
      <section className="bg-slate-100 py-4 border-b border-slate-200">
        <div className="container-custom">
          <ul className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <span className="text-slate-400">»</span>
            </li>
            <li className="text-primary font-medium">Spoken English Classes in Bangalore</li>
          </ul>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Content Column */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 pb-4 border-b-2 border-slate-200">
              Spoken English Classes in Bangalore
            </h1>

            <div className="mb-8">
              <img 
                src="https://cambridgeacademyofenglish.com/storage/media/ideas-class-isnt-preparing-students-workforce.jpg" 
                alt="Best Spoken English Course" 
                className="w-full h-auto rounded-lg shadow-md mb-8"
              />
            </div>

            <div className="prose prose-slate max-w-none prose-headings:text-primary prose-headings:font-bold">
              
              <h2 className="text-2xl font-bold mb-4">Spoken English Training in Bangalore | Advanced English Speaking course in Bangalore</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The courses are transferred to the groups. <strong>In English Speaking Classes</strong> You'll be proficient in Spoken English Training in Bangalore and communicate well together with our trainer and the other learners within the class. We Afford the <strong>Best Spoken English Classes | Spoken English Training in Bangalore</strong> is planned for people who require experience in individual learning from our experienced and highly qualified trainers, who are excited about the <strong>Spoken English Classes in Bangalore | Spoken English Training in Bangalore</strong> in regular classroom teaching.
              </p>

              <h2 className="text-2xl font-bold mb-4">Best Spoken English Course in Bangalore | Spoken English Classes Near Me</h2>
              <ul className="list-disc pl-6 mb-8 text-slate-700 space-y-2">
                <li>If you are low in Spoken English also don’t have enough fluency in English, don’t worry.</li>
                <li>We can facilitate you with classes to learn <strong>Best Spoken English Course in Bangalore | Online English Course in Bangalore</strong>.</li>
                <li>Just join us at the Cambridge Academy Of English and make your dreams come true.</li>
                <li>Our qualified teaching professionals will give you the best tips and directions to develop your <strong>Best Spoken English Course | Online English Course in Bangalore</strong> in all 4 skills such as reading, writing, listening, and speaking with an English certificate course.</li>
                <li>They will teach you plenty of examples. By the end of the course in English, you will be capable of speaking English fluently in any environment.</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Learning English Speaking Course with Professionals</h2>
              <img src="https://cambridgeacademyofenglish.com/storage/media/undraw_google_docs_jf93.png" alt="Learning English Speaking Course" className="w-full h-auto rounded-lg mb-6 max-w-md mx-auto" />
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                We aim to help you Learn English speaking so you can speak English fluently. Improve your <strong>Spoken English Training in Bangalore</strong>.
              </p>

              <h2 className="text-2xl font-bold mb-4">Steps to Learning English speaking</h2>
              <img src="https://cambridgeacademyofenglish.com/storage/media/cambridge_academy1.png" alt="Steps to Learning English speaking" className="w-full h-auto rounded-lg mb-6 max-w-md mx-auto" />
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                To become a well-spoken English speaker, you would like to examine and master Reading, Listening, and Speaking. English Speaking Course Near Me At Cambridge Academy of English, the lessons are structured to provide you with study in all three fields at the same time.
              </p>

              <h3 className="text-xl font-bold mb-3">Do you need to improve your English?</h3>
              <ul className="list-disc pl-6 mb-8 text-slate-700 space-y-2">
                <li>Professional TESOL/CELTA Certified Faculty</li>
                <li>Structured Online Courses</li>
                <li>6 levels: Elementary to Mastery</li>
                <li>English Learning materials & practice activities are provided.</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">Online English Courses with Our TESOL/CELTA Certified Facility</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Cambridge Academy Of English was founded in 2006 and is among the customized <strong>Best English Speaking Courses Online | Best online English speaking course in Bangalore</strong>. Our facilitators are experienced and highly qualified. They are qualified in teaching IELTS, PTE, TOEFL, and Cambridge English Exams.
              </p>

              <h3 className="text-xl font-bold mb-3">Online English speaking course Practice Tests</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Check your progress with an exam after every lesson to increase your learning and help you to prepare for your final Course Exam.
              </p>

              <h2 className="text-2xl font-bold mb-4">Spoken English Classes in Bangalore</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Spoken English Certification is the expert qualification that makes reference to the capacity of an individual's information in Spoken English. It clearly shows that the individual who has taken the Spoken English Classes in Bangalore has cleared the test which was conducted to test familiarity and proficiency.
              </p>

              <h3 className="text-xl font-bold mb-3">Spoken English Exams and Certification</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Get your official English certification course, Once you have passed your Course assessment Exams.
              </p>

              <h2 className="text-2xl font-bold mb-4">Not sure of your level?</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Take Our Free Level test and English free Classes, At Cambridge Academy Of English.
              </p>
              <img src="https://cambridgeacademyofenglish.com/storage/media/undraw_accept_tasks_po1c.png" alt="Free Level test" className="w-full h-auto rounded-lg mb-6 max-w-md mx-auto" />
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                You will receive your <strong>results immediately</strong>. Then you can choose the course that is perfect for you.
              </p>

              {/* Course Table */}
              <div className="overflow-x-auto shadow-sm border border-slate-200 rounded-lg mb-10">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="bg-accent text-white">
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider w-1/3">Classroom - Spoken English Classes</th>
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/communicative-english-course-general" className="text-primary hover:text-accent">Spoken English Course – General</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>General Courses in English are designed to help students make rapid English growth</strong>, and focus on the four key language skills. We provide you with the <strong>Best Spoken English Classes in Bangalore</strong>.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/communicative-english-course-professional" className="text-primary hover:text-accent">Spoken English Course – Professional</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>This course is unique</strong> because each module will provide tips on writing more <strong>professional</strong> emails as well as lessons to strengthen your overall English writing skills.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/communicative-english-course-academic" className="text-primary hover:text-accent">Spoken English Course – Academic</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>Academic English for academic purposes (EAP)</strong>, commonly known as Academic English, requires training students, usually in a higher education setting, to use language appropriate for study. Programs may be distributed pre-sessional courses and courses taken alongside students' other subjects.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/business-english-communication" className="text-primary hover:text-accent">Business English Communication</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>Business English communication</strong> skills are used in the workplace and focus on the language and skills needed for typical <strong>business communication</strong> such as presentations, negotiations, meetings, small talk, socializing, correspondence, report writing, and a systematic approach.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/class-room-english-course" className="text-primary hover:text-accent">Intensive Spoken English Course - General</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>Intensive Spoken English courses</strong> concentrate on the core skills of speaking, listening, reading, and writing to improve confidence and develop fluency. This course is designed to meet the specific requirements of the participants.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/online-communicative-english-course-general" className="text-primary hover:text-accent">One to One Spoken English Course</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Private <strong>One to One</strong> Lessons in English. Ideal for those who wish to <strong>learn quickly</strong> and <strong>effectively</strong>, these private lessons come in <strong>flexible packages</strong>.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/Diploma-in-English-Language" className="text-primary hover:text-accent">Diploma in English Language</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        A diploma in English is a full-time <strong>Diploma course in the English Language</strong>. The duration of this course is 6 Months. Candidates who have completed 10+2 (12th examination) or equivalent examination from a recognized board with a minimum of 50% of marks are eligible to apply.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/advanced-diploma-in-english-training-in-bangalore" className="text-primary hover:text-accent">Advanced Diploma in English Language</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>Advanced Diploma in English</strong> is a full-time English Language Course with intensive language learning methods with an international examination from Cambridge English (UK). The duration of this course is 6 Months with 5 hours of classes or a 1 year with 3 hours of classes (per day) Candidates who have completed 10+2 (12th examination) or equivalent examinations from a recognized board with a minimum of 50% of marks are eligible to apply.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Spoken English Classes in Bangalore Fees</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The classroom is a dynamic environment, bringing together students from different backgrounds with various abilities and personalities.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Therefore, being an effective teacher requires the implementation of creative and innovative teaching strategies to meet students' individual needs.
              </p>
            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 sticky top-32">
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100">
                Why study at Cambridge Academy of English?
              </h3>
              
              <ul className="space-y-4 mb-8">
                {[
                  "We aspire to be an essential reference on quality education comparatively",
                  "An institution that is an integral part of the community’s success story",
                  "Distinguished by our accreditation for excellence in teaching",
                  "Our highly effective systematic teaching methods",
                  "Our passion for knowledge and innovation",
                  "Our leadership in education and language learning and our aptitude for diversity"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    </span>
                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/contact" className="block w-full text-center bg-accent text-white font-bold uppercase tracking-wide py-4 rounded-md shadow-md hover:bg-red-600 transition-colors">
                Find out more
              </a>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
