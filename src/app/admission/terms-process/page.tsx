import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Process | Cambridge Academy of English",
  description: "Learn more about Terms Process at Cambridge Academy of English.",
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <section className="relative py-24 bg-primary text-white">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Terms Process</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Information about Terms Process will be provided here.
          </p>
        </div>
      </section>
      
      <section className="py-24 container-custom">
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">Welcome to Terms Process</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            This is the official page for Terms Process. Content is currently being updated to match the original Cambridge Academy of English website.
          </p>
        </div>
      </section>
    </div>
  );
}
