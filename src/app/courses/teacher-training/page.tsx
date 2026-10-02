import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Teacher Training & Coaching Courses in Kammanahalli, Bangalore, India | Cambridge Academy Of English",
  description: "Discover how these courses can empower you to excel in the field of education and take your skills to the next level.",
};

export default function TeacherTrainingPage() {
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
            <li className="text-primary font-medium">Teacher Training Course in Bangalore</li>
          </ul>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Content Column */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 pb-4 border-b-2 border-slate-200">
              Teacher Training Course in Bangalore
            </h1>

            <div className="mb-8">
              {/* Ensure next.config.mjs allows cambridgeacademyofenglish.com images if used, otherwise standard img tag */}
              <img 
                src="https://cambridgeacademyofenglish.com/storage/media/teacher_training.jpg" 
                alt="Teacher training courses in bangalore, best teacher training courses" 
                className="w-full h-auto rounded-lg shadow-md mb-8"
              />
            </div>

            <div className="prose prose-slate max-w-none prose-headings:text-primary prose-headings:font-bold">
              <h2 className="text-2xl font-bold mb-4">Teacher Training Courses in Bangalore | Best Teacher Training Courses in Bangalore:</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Our <strong>teacher training courses in Bangalore</strong> are situated in a prime location of Bangalore and are also known as the <strong>Best teacher training institution in India.</strong> We moreover provide training for primary <strong>Teacher training courses in Bangalore | Best Teacher Training Courses in Bangalore</strong>, committed to producing future world educators who will no longer solely be geared up with modern educating strategies however will exhibit a deeper perception of educating <strong>Teacher Training courses in Bangalore</strong> methodologies that will assist the puts into an exercise in various school classrooms throughout the globe. Several types of modes depending on the candidate for pursuing these courses. Some of the most common ones have taken by college graduates are through webinar <strong>Teacher Training courses in Bangalore.</strong>
              </p>

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
                      <td className="px-6 py-4"><strong>Montessori Teacher Training in Bangalore</strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>Montessori Teacher Training</strong> is a brief and valuable training for aspiring teachers that teaches them how to identify children's needs, respond to them by designing classroom environments and combining appropriate teaching resources, and prepare themselves to be successful Montessori educators.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong>Nursery Teacher Training Course</strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>Nursery Teacher Training</strong> stresses comprehensive techniques and methods for educating young children, including physical, emotional, and social development, as well as the cognitive aspects of learning. Teaching young children is a difficult and practical task, with an emphasis on learning via play in an interactive learning environment.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong>Middle & Primary Teacher Training</strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>Pre and Primary Teacher Training</strong> is a concisely designed teacher training course for prospective teachers who want to become proficient in the methodologies to teach children aged 2 to 12 years. Pre-primary teaching is evolving with each passing day, and it allows for a smooth transition of children into formal education.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/microsoft365-for-education" className="text-primary hover:text-accent">Microsoft 365 for Education</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        This course allows teachers to discover the enormous power of the <strong>Microsoft 365</strong> platform, revealing tools and techniques, which they can incorporate into their teaching.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong>TKT- Teacher Knowledge Test</strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>TKT</strong> is a set of modular teaching certifications that assess your knowledge in key areas of English language teaching. Whether you're a rookie teacher or have years of experience, TKT is a great way to demonstrate your teaching skills with a globally recognized certificate.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong>TEFL/ TESOL</strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        This compact course is geared at teaching aspirants seeking to make a foray into the world of EFL/ESL teaching and has been structured considering the needs of <strong>TEFL</strong> professionals who look forward to learning the newest innovations in the field of teaching and training.
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong>CELTA</strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>CELTA</strong> is a Cambridge qualification for teaching English as a foreign language. It focuses on practical strategies and includes face-to-face or online teaching practice with groups of learners, giving you the confidence to start teaching in as short as four weeks.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
