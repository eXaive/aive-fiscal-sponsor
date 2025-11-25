export default function FiscalSponsorLanding() {
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-b from-slate-50 to-white">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          AIVE — Public Benefit Intelligence & Education
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-slate-600 mb-8">
          Helping communities understand outbreaks, economic shifts, workforce
          risks, and global disruptions through accessible dashboards,
          predictive learning tools, and AI literacy education.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/AIVE_Fiscal_Sponsor_Packet.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            Download Sponsorship Packet
          </a>
          <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 bg-slate-200 rounded-md shadow hover:bg-slate-300 transition"
          >
            Request Meeting
          </a>
        </div>
      </section>

      {/* WHAT IS AIVE */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What is AIVE?</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            AIVE — Awareness • Intelligence • Verification • Evolution — is a
            public-benefit intelligence platform that translates complex global
            signals into clear, educational tools that empower communities to
            prepare for change rather than react to it.
          </p>
        </div>
      </section>

      {/* PROGRAM GRID */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Our Public Education Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Outbreak Literacy Tools",
              emoji: "🧬",
              desc: "Dashboards explaining outbreak signals, transmission trends, and preparedness.",
            },
            {
              title: "Predictive Learning Games",
              emoji: "🎮",
              desc: "Mock-data simulations showing how events ripple across public systems.",
            },
            {
              title: "Economic Stability Education",
              emoji: "📈",
              desc: "Simple modules explaining inflation, markets, and financial shocks.",
            },
            {
              title: "Workforce & AI Preparedness",
              emoji: "🤖",
              desc: "Understanding automation, workforce transition, and AI readiness.",
            },
            {
              title: "Global Risk Awareness Tools",
              emoji: "🌍",
              desc: "Visual explainers on geopolitics, climate events, and global disruption flows.",
            },
            {
              title: "AI Literacy for Everyone",
              emoji: "🧠",
              desc: "Accessible learning on AI safety, predictive models, and modern digital empowerment.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Public Resilience Together
        </h2>
        <p className="mb-6 text-slate-300">
          Email: <span className="font-medium">youremail@example.com</span>
        </p>

        <a
          href="mailto:youremail@example.com"
          className="px-8 py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transition"
        >
          Request Intro Call
        </a>
      </section>
    </div>
  );
}
