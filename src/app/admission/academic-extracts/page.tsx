import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Extracts | Cambridge Academy of English",
  description: "Learn about the academic structure, extracts, and curriculum at Cambridge Academy of English.",
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <section className="relative py-24 bg-primary text-white">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Academic Extracts</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            Insights into our curriculum, teaching methods, and student assessment.
          </p>
        </div>
      </section>
      
      <section className="py-24 container-custom">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Curriculum Design</h2>
              <p className="text-slate-600 leading-relaxed">
                Our academic syllabus is rigorously structured to follow international CEFR (Common European Framework of Reference) standards. From absolute beginner (A1) to advanced mastery (C2), our modules focus equally on reading, writing, listening, and speaking.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Interactive Methodology</h2>
              <p className="text-slate-600 leading-relaxed">
                We move beyond traditional rote learning. Our classrooms employ task-based communicative approaches. Students participate in role-plays, group discussions, and presentations to build real-world confidence in using English fluently.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Assessment & Feedback</h2>
              <p className="text-slate-600 leading-relaxed">
                Academic progress is continuously monitored through weekly assessments, mock interviews, and unit tests. Trainers provide detailed, constructive feedback, ensuring that every student identifies their weak points and receives the necessary support to overcome them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
