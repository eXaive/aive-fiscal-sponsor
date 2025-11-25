export default function FiscalSponsorPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* ============================
          HERO SECTION
      ============================ */}
      <section className="py-24 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold tracking-tight">
            AIVE — Public Benefit Intelligence & Education
          </h1>
          <p className="text-lg text-slate-600 mt-6 leading-relaxed">
            AIVE strengthens community resilience by helping the public understand outbreaks,
            economic shifts, workforce risks, and global disruptions through accessible dashboards,
            predictive learning tools, and AI literacy education.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <a
              href="/AIVE_Fiscal_Sponsor_Packet.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium shadow hover:bg-blue-500"
            >
              Download Sponsorship Packet
            </a>
            <a
              href="mailto:YOUR_EMAIL"
              className="px-6 py-3 bg-slate-200 text-slate-900 rounded-md font-medium shadow hover:bg-slate-300"
            >
              Request Meeting
            </a>
          </div>
        </div>
      </section>


      {/* ============================
          WHAT IS AIVE
      ============================ */}
      <section className="py-20 border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">What is AIVE?</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            AIVE — Awareness • Intelligence • Verification • Evolution — is a public-benefit 
            intelligence platform that translates complex global signals into clear, educational tools 
            that empower communities to prepare for change rather than react to it.
          </p>
        </div>
      </section>


      {/* ============================
          PUBLIC BENEFIT PROGRAM GRID
      ============================ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Public Education Programs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Outbreak Literacy Tools",
                desc: "Simple dashboards explaining outbreak signals, transmission trends, and preparedness best practices."
              },
              {
                title: "Predictive Learning Games",
                desc: "Mock-data simulations that teach how events ripple across systems such as economics or health."
              },
              {
                title: "Economic Stability Education",
                desc: "Easy-to-understand modules on inflation, jobs, financial shocks, and economic literacy."
              },
              {
                title: "Workforce & AI Preparedness",
                desc: "Tools helping people understand technological change and prepare for future work transitions."
              },
              {
                title: "Global Risk Awareness Tools",
                desc: "Visual explainers on geopolitics, climate events, supply chains, and global disruptions."
              },
              {
                title: "AI Literacy for Everyone",
                desc: "Accessible education on AI systems, predictive models, and safe engagement with emerging technology."
              },
            ].map((card) => (
              <div
                key={card.title}
                className="border border-slate-200 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================
          FIRST-YEAR PLAN
      ============================ */}
      <section className="py-20 border-t border-b border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            12-Month Impact Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                phase: "Phase 1 — Months 1–3",
                text: "Launch predictive learning tools, outbreak explainers, and public awareness briefs."
              },
              {
                phase: "Phase 2 — Months 4–6",
                text: "Develop educational modules, community workshops, and resilience content."
              },
              {
                phase: "Phase 3 — Months 7–9",
                text: "Partner with schools, public health educators, and community groups."
              },
              {
                phase: "Phase 4 — Months 10–12",
                text: "Scale tools, expand AI literacy, and produce a State of Global Awareness Report."
              },
            ].map((item) => (
              <div key={item.phase}>
                <h3 className="font-semibold text-xl mb-2">{item.phase}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============================
          CONTACT
      ============================ */}
      <section className="py-24 text-center bg-slate-900 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Public Resilience Together
        </h2>
        <p className="text-slate-300 mb-8">
          Email: <span className="text-white font-medium">YOUR_EMAIL</span>
        </p>

        <a
          href="mailto:YOUR_EMAIL"
          className="px-8 py-4 bg-blue-500 rounded-md shadow hover:bg-blue-400"
        >
          Request Intro Call
        </a>
      </section>
    </div>
  );
}
