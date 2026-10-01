import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cambridge Exam | Cambridge Academy of English",
  description: "Cambridge English Qualifications including YLE Starters, Movers, Flyers, KET, PET, FCE, CPE, CAE, and BEC.",
};

export default function CambridgeExamPage() {
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
            <li className="text-primary font-medium">Cambridge Exam</li>
          </ul>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 container-custom">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Content Column */}
          <div className="lg:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-8 pb-4 border-b-2 border-slate-200">
              Cambridge Exam
            </h1>

            <div className="prose prose-slate max-w-none prose-headings:text-primary prose-headings:font-bold">
              
              {/* Course Table */}
              <div className="overflow-x-auto shadow-sm border border-slate-200 rounded-lg mb-10 mt-6">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead>
                    <tr className="bg-accent text-white">
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider w-1/3">Exams</th>
                      <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Description</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/YLE-Starters" className="text-primary hover:text-accent">Cambridge English - YLE (Starters)</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        Pre A1 Starters, formerly known as <strong>Cambridge English: Starters (YLE Starters)</strong>, is one of our Cambridge English Qualifications. It is the start of a child’s language learning journey.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/YLE-Movers" className="text-primary hover:text-accent">Cambridge English -YLE (Movers)</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        A1 Movers, formerly known as <strong>Cambridge English: Movers (YLE Movers)</strong>, is one of our Cambridge English Qualifications. It is the next step in a child’s English language learning.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/YLE-Flyers" className="text-primary hover:text-accent">Cambridge English -YLE (Flyers)</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        A2 Flyers, formerly known as <strong>Cambridge English: Flyers (YLE Flyers)</strong>, is one of our Cambridge English Qualifications. It is the third of our fun, activity-based English tests for children.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/KET" className="text-primary hover:text-accent">Cambridge English -KET</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        A2 Key, formerly known as <strong>Cambridge English: Key (KET)</strong>, is one of our Cambridge English Qualifications. This basic-level qualification is a great exam to take if you're new to learning English.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/KET-Key-School" className="text-primary hover:text-accent">Cambridge English - Key KET For School</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        A2 Key for Schools, formerly known as <strong>Cambridge English: Key for Schools (KET for Schools)</strong>, is one of our Cambridge English Qualifications. It is an exam for school-age learners which will help prepare them for higher-level English language qualifications.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/PET-Preliminary" className="text-primary hover:text-accent">Cambridge English -Preliminary PET</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        B1 Preliminary, formerly known as <strong>Cambridge English: Preliminary (PET)</strong>, is one of our Cambridge English Qualifications. It is the English language exam that shows you have mastered the basics.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/PET-Preliminary-For-Schools" className="text-primary hover:text-accent">Cambridge English -Preliminary- PET For Schools</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        B1 Preliminary for Schools, formerly known as <strong>Cambridge English: Preliminary for Schools (PET for Schools)</strong>, is one of our Cambridge English Qualifications. It is the English language exam that shows that students have mastered the basics.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/First-FCE" className="text-primary hover:text-accent">Cambridge English - First FCE</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        B2 First, formerly known as <strong>Cambridge English: First (FCE)</strong>, is one of our Cambridge English Qualifications. It is our most popular exam, accepted by thousands of businesses and educational institutions worldwide.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/CPE-Proficiency" className="text-primary hover:text-accent">Cambridge English - Proficiency CPE</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        C2 Proficiency, formerly known as <strong>Cambridge English: Proficiency (CPE)</strong>, is one of our Cambridge English Qualifications. It is our highest-level qualification – proof that you are a highly competent speaker of English.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/CAE-Proficiency" className="text-primary hover:text-accent">Cambridge English -Proficiency CAE</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        C1 Advanced, formerly known as <strong>Cambridge English: Advanced (CAE)</strong>, is one of our Cambridge English Qualifications. It is the in-depth, high-level qualification that shows you have the language skills that employers and universities are looking for.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/BEC-preliminary" className="text-primary hover:text-accent">Cambridge English -Business Preliminary (BEC)</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        B1 Business Preliminary, formerly known as <strong>Cambridge English: Business Preliminary (BEC Preliminary)</strong>, is one of our Cambridge English Qualifications. It helps you to get the practical language skills you need to start doing business in English.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/BEC-Business-English-Certificate-Higher" className="text-primary hover:text-accent">Cambridge English - Business English Certificate Higher (BEC)</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        C1 Business Higher, formerly known as <strong>Cambridge English: Business Higher (BEC Higher)</strong>, is one of our Cambridge English Qualifications. It helps you to get the practical language skills you need to work effectively at a senior level in international business
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/BEC-Business-English-certificate-vantage" className="text-primary hover:text-accent">Cambridge English - Business English Certificate Vantage (BEC)</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        B2 Business Vantage, formerly known as <strong>Cambridge English: Business Vantage (BEC Vantage)</strong>, is one of our Cambridge English Qualifications. It shows employers that you're ready to do business at an international level.
                      </td>
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4"><strong><a href="/courses/BULATS" className="text-primary hover:text-accent">BULATS</a></strong></td>
                      <td className="px-6 py-4 text-slate-600 text-sm leading-relaxed">
                        <strong>BULATS</strong> is a flexible online tool that assesses English language skills for business, industry, and commerce. It helps you develop a workforce that is confident communicating in international business environments.
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
