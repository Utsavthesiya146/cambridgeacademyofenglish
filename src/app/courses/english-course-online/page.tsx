import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "English Course Online | Cambridge Academy of English",
  description: "English communication courses designed to help individuals improve their language skills. Includes grammar, vocabulary, pronunciation, and writing skills.",
};

export default function EnglishCourseOnlinePage() {
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
            <li>
              <Link href="#" className="hover:text-primary transition-colors">Courses</Link>
            </li>
            <li>
              <span className="text-slate-400">»</span>
            </li>
            <li className="text-primary font-medium">English Course Online</li>
          </ul>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Content Column */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 pb-4 border-b-2 border-slate-200">
              English Course Online
            </h1>

            <div className="prose prose-slate max-w-none prose-headings:text-primary prose-headings:font-bold">
              
              <h2 className="text-2xl font-bold mb-4 text-slate-800">
                Overview of the course
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 text-justify">
                English communication courses are designed to help individuals improve their language skills. This courses covers on all four modules of the English language, that includes grammar, vocabulary, pronunciation, and writing skills. This course is suitable for students who want to improve their English language with excellent communication skills in their social life or its can be for professional reasons.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-slate-800">
                Course goals and objectives
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                The English communication course helps students with the important skills to communicate effectively in English, both verbally and in writing. This course objectives include improving grammar, vocabulary, pronunciation, and comprehension.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                Through English class online, students will receive personalized attention and guidance to help them achieve their language goals. The course is focused on English Communication skills, such as Professional and Social vocabulary, social interactions, and mainly academic writing. Which help students to improve the English Language proficient and speak confidently in every situation or needs.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 text-justify">
                The English communication course provides a comprehensive and structured way of teaching which easily help this students in learning of English language. Individuals can choose English coaching online or classroom coaching as their learning environment that best or as per their needs. Objectives of this course is designed to learn and improve your English language skills.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-slate-800">
                Importance of effective communication in English
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                The English communication course aims to improve students' ability to communicate effectively in English. The course all the four modules, grammar, vocabulary, pronunciation, and conversation skills. Our objective is to facilitate the students by building their confidence and proficient in using the English language.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 text-justify">
                This course is available both online class or traditional classroom teaching, with online coaching provided by experienced instructors. Students have access to a learning resources, including video lectures, day to day exercises, and timely feedback. Wherein, Classroom training can benefit the students with face-to-face interaction with their course and instructors, as well as the opportunity to practice their English skills in a real-world environment.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-slate-800">
                Strategies for speaking confidently and clearly in English
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                Finding English classes with highly qualified teachers who can teach strategies for speaking confidently and clearly in English can be a major challenge these days and with increasing demand for English language proficiency with academic or professional needs, it's important to find a best English class that can provide quality with The United Kingdom curriculum designed and written by great authors.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                One way to find English class near me is to search online. Many language schools and institutes offer English classes with experienced teachers who can help you improve your speaking skills. You can also check with local community centers or libraries to see if they offer any English classes or conversation groups.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 text-justify">
                Another option is to ask for recommendations from friends or colleagues who have taken English classes before. They may be able to refer you to a class or teacher that they found helpful. With some research and effort, you can find an English class that meets your needs and helps you speak confidently and clearly.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-slate-800">
                Tips for improving listening skills and understanding different accents
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                Improving your listening skills is an essential aspect of effective communication. This means avoiding multitasking and actively listening to the speaker and asking questions can help you understand the speaker's approach and clarify the speaker’s interest and way of reply.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                Listening and understanding to different accents can be challenging at this same time this important in todays world but still student can improve their understanding of different accents by exposing yourself by watching movies, TV shows, BBC News and listening to UK based English podcasts. Other way to practice different accents is by speaking with people of other countries.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 text-justify">
                Improving your listening skills and understanding different accents takes practice and patience. Speaking to people, asking questions to the speaker and getting yourself familiar to different accents, you can improve your communication skills and become a better listener.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-slate-800">
                Feedback and evaluation of the course
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                As the English communication course comes to an end, it is important to reflect on the feedback and evaluation provided by the trainer. Throughout the course, the trainer provided constructive criticism and guidance to help improve our language skills. The feedback will always be detailed and specific, highlighting areas of strength and weakness.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
                The evaluation at the end of the course was thorough and comprehensive. The trainer assessed your progress based on various parameters, including vocabulary, grammar, pronunciation, and fluency. Our assessments and evaluation has helped many students and understand their strengths and weaknesses, and this also provides us with a roadmap for further improvement.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8 text-justify">
                Overall, the trainer's feedback and evaluation were instrumental in helping the students improving the English language skills. The trainer's attention to detail and willingness to provide constructive criticism helped you identify areas for improvement and work towards achieving our language goals. We are always grateful that our trainer's guidance and support throughout the course.
              </p>

            </div>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 sticky top-32">
              <h3 className="text-xl font-bold text-slate-800 mb-6 pb-4 border-b border-slate-100">
                Course Details
              </h3>
              
              <ul className="space-y-4 mb-8 text-slate-700">
                <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                  <span className="text-accent"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></span>
                  <strong>Mode Of Class:</strong> Online/Offline
                </li>
                <li className="flex items-center gap-3 border-b border-slate-100 pb-2">
                  <span className="text-accent"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>
                  <strong>Duration:</strong> Flexible
                </li>
              </ul>
              
              <h4 className="font-bold text-slate-800 mb-4">English Level</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {[1,2,3,4].map(level => (
                  <span key={level} className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-400 text-sm font-medium">{level}</span>
                ))}
                {[5,6,7,8].map(level => (
                  <span key={level} className="w-8 h-8 rounded-full flex items-center justify-center bg-accent text-white text-sm font-medium shadow-sm">{level}</span>
                ))}
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-slate-400 text-sm font-medium">9</span>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg mb-8 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-4 text-center">Book this course</h4>
                <p className="text-sm text-center text-slate-600 mb-4">Please send us a enquiry to book this course directly.</p>
              </div>

              <a href="/contact" className="block w-full text-center bg-accent text-white font-bold uppercase tracking-wide py-4 rounded-md shadow-md hover:bg-red-600 transition-colors">
                Contact Us To Book
              </a>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}
