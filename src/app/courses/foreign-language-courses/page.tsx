import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Foreign Language Courses in Bangalore | Cambridge Academy of English",
  description: "Learn more about Foreign Language Courses at Cambridge Academy of English. We teach French, Spanish, German, Chinese, Japanese, Korean, Arabic with the best native speakers.",
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <section className="relative py-24 bg-primary text-white">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Foreign Language Classes in Bangalore</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            We teach you the Best Foreign Language classes in Bangalore India | Online Foreign Language Courses in Bangalore and other cultures.
          </p>
        </div>
      </section>
      
      <section className="py-24 container-custom">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100">
              <div className="mb-10 rounded-xl overflow-hidden shadow-md">
                <img 
                  src="https://cambridgeacademyofenglish.com/storage/media/Foreign_Language_123.jpg" 
                  alt="Foreign Language Online Courses in Bangalore" 
                  className="w-full h-auto object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-primary mb-6">Foreign Language Courses</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Learn French, Spanish, German, Chinese, Japanese, Korean, Arabic with the best facilities and native speakers.
              </p>

              <div className="overflow-x-auto mt-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-4 text-left font-semibold border-b">Course</th>
                      <th className="p-4 text-left font-semibold border-b">Description</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-primary whitespace-nowrap">
                        <Link href="/courses/french">French Classes</Link>
                      </td>
                      <td className="p-4">Cambridge Academy of English Bangalore Provides a wide range of French Courses, Online French Learning Language, French Language Institute, French Learning Classes for students of all ages from beginners' level (A1) to advanced levels (C2).</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-primary whitespace-nowrap">
                        <Link href="/courses/learnSpanishlanguage">Spanish Classes</Link>
                      </td>
                      <td className="p-4">Cambridge Academy of English Bangalore Provides a wide range of Spanish Course, Spanish Classes in Bangalore, Spanish Classes near me, Spanish Language for students of all ages from beginners' level (A1) to advanced levels (C2).</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-primary whitespace-nowrap">
                        <Link href="/courses/germanlanguageclasses">German Classes</Link>
                      </td>
                      <td className="p-4">Cambridge Academy of English Bangalore Provides a wide range of German Courses, German Language Course in Bangalore, German Language Course Near me, german classes in Bangalore for students of all ages from beginners' level (A1) to advanced levels (C2).</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-primary whitespace-nowrap">
                        <Link href="/courses/ChineseLanguage">Chinese Classes</Link>
                      </td>
                      <td className="p-4">Cambridge Academy of English Bangalore Provides a wide range of Chinese Courses, Chinese Language Classes, Chinese Language Courses for students of all ages from beginners' level to advanced levels.</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-primary whitespace-nowrap">
                        <Link href="/courses/Japanese-language-in-bangalore">Japanese Classes</Link>
                      </td>
                      <td className="p-4">Cambridge Academy of English Bangalore Provides a wide range of Japanese Courses, Japanese Learning Classes near me, Japanese Course Online, Chinese classes near me for students of all ages from beginners' level (A1) to advanced levels (C2).</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-primary whitespace-nowrap">
                        <Link href="/courses/Korean-Language">Korean Classes</Link>
                      </td>
                      <td className="p-4">Cambridge Academy of English Bangalore Provides a wide range of Korean Courses, Korean Language Courses, Korean Learning Classes Near Me for students of all ages from beginners' level (A1) to superior levels (C2).</td>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-primary whitespace-nowrap">
                        <Link href="/courses/Arabic-Language">Arabic Classes</Link>
                      </td>
                      <td className="p-4">Cambridge Academy of English Bangalore Provides a wide range of Arabic courses, Arabic Classes, Arabic Language Courses, Arabic Language Classes near me for students of all ages from beginners to advanced levels.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="mt-8 text-slate-600">
                Our self-paced Classroom lessons can assist you to study for exams, developing your language comprehension, and advancing your foreign language classes grade for any specific purpose.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-primary p-8 rounded-2xl shadow-xl text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Why study at Cambridge Academy of English?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">✓</div>
                  <span>We aspire to be an essential reference on quality education comparatively</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">✓</div>
                  <span>An institution that is an integral part of the community's success story</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">✓</div>
                  <span>Distinguished by our accreditation for excellence in teaching</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full py-4 px-6 bg-accent text-white text-center rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300">
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

