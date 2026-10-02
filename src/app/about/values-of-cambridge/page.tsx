import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Values Of Cambridge | Cambridge Academy of English",
  description: "Learn more about Values Of Cambridge at Cambridge Academy of English.",
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <section className="relative py-24 bg-primary text-white">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Values of Cambridge</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            The core principles that guide our teaching and institutional excellence.
          </p>
        </div>
      </section>
      
      <section className="py-24 container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
            <p className="text-slate-600">We are dedicated to delivering the highest standards in language education, ensuring our students achieve exceptional results.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
            <p className="text-slate-600">We uphold honesty, transparency, and ethical conduct in all our interactions with students, staff, and partners.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
            <p className="text-slate-600">We continuously evolve our teaching methodologies and curriculum to stay ahead of global educational trends.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Diversity</h3>
            <p className="text-slate-600">We celebrate cultural differences and foster an inclusive, welcoming environment for students from all around the world.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-xl font-bold text-primary mb-3">Commitment</h3>
            <p className="text-slate-600">We are deeply invested in the academic and professional success of every individual who walks through our doors.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
