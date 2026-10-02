import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Iran | Cambridge Academy of English",
  description: "Information for students from Iran at Cambridge Academy of English.",
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <section className="relative py-24 bg-primary text-white">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Welcome Students from Iran</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Cambridge Academy of English is proud to welcome students from all over the world.
          </p>
        </div>
      </section>
      
      <section className="py-24 container-custom">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-primary mb-6">Studying in Bangalore</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We are delighted to offer specialized English language and foreign language training to students from Iran. 
                Our programs are designed to help you integrate seamlessly while providing top-notch education tailored to your needs.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Dedicated Support</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Visa assistance and documentation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Accommodation finding support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Cultural integration activities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent text-xl">✓</span>
                    <span>Dedicated student counselor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-primary p-8 rounded-2xl shadow-xl text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Ready to apply?</h3>
              <p className="mb-8 text-slate-300">
                Start your educational journey with us today. Fill out our specific admission form for international students.
              </p>
              <Link href="/admission/foreign-students" className="block w-full py-4 px-6 bg-accent text-white text-center rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300">
                Go to Admission Form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

