import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admission Terms & Process | Cambridge Academy of English",
  description: "Learn about the admission process and terms at Cambridge Academy of English.",
};

export default function Page() {
  return (
    <div className="overflow-hidden bg-slate-50 min-h-screen">
      <section className="relative py-24 bg-primary text-white">
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Admission Terms & Process</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 font-light max-w-2xl mx-auto">
            A simple, transparent guide to joining our language programs.
          </p>
        </div>
      </section>
      
      <section className="py-24 container-custom">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Application Process</h2>
              <p className="text-slate-600 leading-relaxed">
                Students can apply online through our dedicated portals for Indian or Foreign students, or visit our Bangalore campus in person. A completely filled application form along with the necessary documentation must be submitted prior to the course start date.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Level Assessment</h2>
              <p className="text-slate-600 leading-relaxed">
                To ensure you are placed in the right batch, an initial English proficiency assessment may be conducted. This helps our trainers tailor the learning experience to your current skill level.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Fee Payment & Confirmation</h2>
              <p className="text-slate-600 leading-relaxed">
                Admissions are confirmed only upon the payment of the requisite course fees. Fees can be paid via bank transfer, credit/debit card, or cash at the academy. Please refer to our Refund Policy for terms regarding cancellations.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Visa & Accommodation (Foreign Students)</h2>
              <p className="text-slate-600 leading-relaxed">
                For international students, we provide an admission letter that can be used to apply for a student visa. Accommodation assistance is also provided upon request well in advance of your arrival.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
