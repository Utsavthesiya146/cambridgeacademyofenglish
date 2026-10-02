import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission | Cambridge Academy of English",
  description: "Learn about the Vision and Mission of Cambridge Academy of English in Bangalore.",
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <section className="relative py-24 bg-primary text-white">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Vision & Mission</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Empowering individuals through globally recognized linguistic excellence.
          </p>
        </div>
      </section>
      
      <section className="py-24 container-custom">
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="text-accent text-3xl">👁️</span> Our Vision
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To be India's premier language training institute, recognized globally for transforming lives through communicative excellence, fostering cultural understanding, and enabling students to achieve their academic and professional goals on a global stage.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="text-accent text-3xl">🎯</span> Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We are committed to delivering highest quality language education using proven, innovative methodologies. We strive to provide a supportive, immersive learning environment with certified trainers, ensuring personalized attention that unlocks every student's true potential.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
