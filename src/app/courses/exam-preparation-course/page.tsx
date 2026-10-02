import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Exam Preparation Course in Bangalore | Cambridge Academy of English",
  description: "Exam Preparation Training in Bangalore. Best IELTS Coaching In Bangalore. Cambridge English Certificates for teaching Exam Preparation Training.",
};

export default function ExamPreparationCoursePage() {
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
            <li className="text-primary font-medium">Exam Preparation Course in Bangalore</li>
          </ul>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Content Column */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 pb-4 border-b-2 border-slate-200">
              Exam Preparation Course in Bangalore
            </h1>

            <div className="mb-8">
              <img 
                src="https://cambridgeacademyofenglish.com/storage/media/Exam_Preparation_Course1.jpg" 
                alt="Exam Preparation Training in Bangalore" 
                className="w-full h-auto rounded-lg shadow-md mb-8"
              />
            </div>

            <div className="prose prose-slate max-w-none prose-headings:text-primary prose-headings:font-bold">
              
              <h2 className="text-2xl font-bold mb-4">Best IELTS Coaching In Bangalore</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Cambridge English Certificates for teaching <strong>Exam Preparation Training in Bangalore | Best IELTS Coaching In Bangalore</strong>, plus courses and development for teachers. It is ideal for people who want to develop their teaching knowledge with a globally accepted certificate.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Cambridge Academy of English empowers you for that qualification exam.
              </p>

              {/* Course Table */}
              <div className="overflow-x-auto shadow-sm border border-slate-200 rounded-lg mb-10">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="bg-accent text-white">
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider w-1/3">Course</th>
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/online-ielts-preparation-academic-or-general" className="text-primary hover:text-accent">IELTS Preparation (Academic or General)</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>Best IELTS Academy in Bangalore | IELTS Preparation | IELTS Exam</strong> enables you to check your English Proficiency. Join now for <strong>IELTS Academic or General IELTS Training Program</strong> customized by our experts. This helps you to improve the English language in all 4 modules such as Reading, Writing, Listening, and Speaking.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/online-pte-preparation-academic-or-general" className="text-primary hover:text-accent">PTE</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        We provide exclusive <strong>PTE exams</strong>, prepared by our experts, and the latest study materials on all 4 skills, Listening, Reading, Speaking, and Writing skills.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/TOEFL-Online-Classes-in-Bangalore" className="text-primary hover:text-accent">TOEFL</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        The Test of English as a <strong>Foreign Language</strong>, or <strong>TOEFL Exam Preparation</strong>, is a test that measures people's English language skills to see if they are good enough to take a course at university or graduate school in English-speaking countries.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><span className="text-primary">TOEIC</span></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>TOEIC Coaching</strong> and Preparation. We provide various teaching and preparation support for the TOEIC tests. Our resources and training support will be helpful for the success of test-takers.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/OET-Training-Centres-In-Bangalore" className="text-primary hover:text-accent">OET</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Our extremely qualified experts give the training with a Course that includes quality OET practice lessons. The <strong>OET (Occupational English Test)</strong> implies the English language test for healthcare professionals. It evaluates the language communication skills of healthcare professionals who crave to register and practice in an English-speaking environment.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/KET" className="text-primary hover:text-accent">Key English Test</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>KET (Key English Test)</strong> analysis, preparation courses in Reading is for students who want to prepare for the <strong>Key English Test (KET)</strong> to improve job prospects or gain admission into a university.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/PET-Preliminary" className="text-primary hover:text-accent">Preliminary English Test</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        If you require to know that you have an intermediate level of English. Among this level of English, you'll enjoy holidays in English-speaking countries. You should feasibly continue studying once you've got passed the <strong>PET exam.</strong>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/BEC-preliminary" className="text-primary hover:text-accent">BEC – Preliminary, Vantage & Higher</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        This exam could assist you when applying for new jobs, getting a <strong>Promotion,</strong> or <strong>Developing your Career.</strong>
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/TKT-training-in-Bangalore" className="text-primary hover:text-accent">TKT</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>TKT</strong> is a group of modular teaching qualifications which test your knowledge in specific fields of English language teaching. ... Whether you are a new teacher or have years of experience, <strong>TKT</strong> is ideal for people who need to show their teaching knowledge with a globally recognized certificate.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/TEFL-Courses-In-Bangalore" className="text-primary hover:text-accent">TEFL</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>TEFL Course</strong> covers topics including Teaching language skills, Grammar, Lesson Planning, and Classroom management. A <strong>TEFL Course</strong> will guide you on how to: Teach English Language Skills. It also Develops the five major elements of language learning: Reading, Writing, Speaking, Listening, and pronunciation.
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Qualify you for the English exam at Cambridge Academy Of English in India with extremely qualified English teachers on the <strong>IELTS Exam Training in Bangalore | IELTS Preparation Test Centers in Bangalore, TOEFL, PTE, BEC, TKT, TEFL,</strong> and other <strong>Cambridge Exams.</strong>
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
