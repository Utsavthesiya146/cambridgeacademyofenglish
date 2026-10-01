import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Foreign Language Courses in Bangalore | Cambridge Academy of English",
  description: "Best Foreign Language Online Courses in Bangalore India, Learn French, Spanish, German, Chinese, Japanese, Korean, Arabic.",
};

export default function ForeignLanguageCoursesPage() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      
      {/* Breadcrumb Section */}
      <section className="bg-slate-100 py-4 border-b border-slate-200">
        <div className="container-custom">
          <ul className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <span className="text-slate-400">»</span>
            </li>
            <li className="text-primary font-medium">Foreign Language Courses in Bangalore</li>
          </ul>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Content Column */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 pb-4 border-b-2 border-slate-200">
              Foreign Language Courses in Bangalore
            </h1>

            <div className="mb-8">
              <img 
                src="https://cambridgeacademyofenglish.com/storage/media/Foreign_Language_123.jpg" 
                alt="Foreign Language classes in Bangalore" 
                className="w-full h-auto rounded-lg shadow-md mb-8"
              />
            </div>

            <div className="prose prose-slate max-w-none prose-headings:text-primary prose-headings:font-bold">
              
              <h2 className="text-2xl font-bold mb-4">Foreign Language classes in Bangalore</h2>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We teach you the <strong>Best Foreign Language classes in Bangalore India | Online Foreign Language Courses in Bangalore</strong> and other cultures. Learn French, Spanish, German, Chinese, Japanese, Korean, Arabic with the best facilities and native speakers.
              </p>

              <h2 className="text-2xl font-bold mb-4">Foreign Language Courses</h2>

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
                      <td className="px-6 py-4"><strong><a href="/courses/French" className="text-primary hover:text-accent">French Classes in Bangalore</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Cambridge Academy of English Bangalore Provides a wide range of <strong>French Courses, Online French Learning Language, French Language Institute, French Learning Classes</strong> for students of all ages from beginners’ level (A1) to advanced levels (C2)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/LearnSpanishlanguage" className="text-primary hover:text-accent">Spanish Classes in Bangalore</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Cambridge Academy of English Bangalore Provides a wide range of <strong>Spanish Course, Spanish Classes in Bangalore, Spanish Classes near me, Spanish Language</strong> for students of all ages from beginners’ level (A1) to advanced levels (C2)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/germanlanguageclasses" className="text-primary hover:text-accent">German Classes in Bangalore</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Cambridge Academy of English Bangalore Provides a wide range of <strong>German Courses, German Language Course in Bangalore, German Language Course Near me, german classes in Bangalore</strong> for students of all ages from beginners’ level (A1) to advanced levels (C2)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/ChineseLanguage" className="text-primary hover:text-accent">Chinese Classes in Bangalore</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Cambridge Academy of English Bangalore Provides a wide range of <strong>Chinese Courses, Chinese Language Classes, Chinese Language Courses</strong> for students of all ages from beginners’ level to advanced levels
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/Japanese-language-in-bangalore" className="text-primary hover:text-accent">Japanese Classes in Bangalore</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Cambridge Academy of English Bangalore Provides a wide range of <strong>Japanese Courses, Japanese Learning Classes near me, Japanese Course Online, Chinese classes near me</strong> for students of all ages from beginners’ level (A1) to advanced levels (C2)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/Korean-Language" className="text-primary hover:text-accent">Korean Classes in Bangalore</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Cambridge Academy of English Bangalore Provides a wide range of <strong>Korean Courses, Korean Language Courses, Korean Learning Classes Near Me</strong> for students of all ages from beginners’ level (A1) to superior levels (C2)
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/Arabic-Language" className="text-primary hover:text-accent">Arabic Classes in Bangalore</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Cambridge Academy of English Bangalore Provides a wide range of <strong>Arabic courses, Arabic Classes, Arabic Language Courses, Arabic Language Classes near me</strong> for students of all ages from beginners to advanced levels
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Our self-paced Classroom lessons can assist you to study for exams, developing your language comprehension, and advancing your foreign language classes grade for any specific purpose.
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
