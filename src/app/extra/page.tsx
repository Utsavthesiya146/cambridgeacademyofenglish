import Link from 'next/link';

export default function ExtraPage() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/90 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/slider1.jpg')" }}></div>
        <div className="container-custom relative z-20 pt-16 text-center fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
            Extra <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Curricular</span>
          </h1>
          <p className="text-xl text-slate-300 font-light drop-shadow-md max-w-2xl mx-auto">
            Learning English goes beyond the classroom. Discover our clubs, events, and community activities.
          </p>
        </div>
      </section>

      <section className="py-24 container-custom">
        <div className="grid md:grid-cols-2 gap-8 fade-in-up stagger-1">
          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              🗣️
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Debate & Public Speaking Club</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Overcome stage fear and master the art of persuasion. Our weekly debate sessions simulate real-world scenarios to help you articulate your thoughts with confidence and clarity.
            </p>
            <Link href="/contact" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
              Join the Club <span>→</span>
            </Link>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              📚
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Book Reading Community</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Enhance your vocabulary and comprehension through classic and contemporary literature. We host monthly reading groups followed by deep analytical discussions.
            </p>
            <Link href="/contact" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
              Join the Community <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
