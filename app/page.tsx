export default function FiscalSponsorLanding() {
  return (
    <div className="bg-white text-slate-900">

      {/* ========== HERO ========== */}
      <section className="py-28 text-center bg-gradient-to-b from-slate-50 to-white">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
          AIVE — Public Benefit Intelligence & Education
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-slate-600 mb-10 leading-relaxed">
          Helping communities understand outbreaks, economic shifts, workforce risks,
          and global disruptions through accessible dashboards, predictive learning
          tools, and AI literacy programs.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/AIVE_Fiscal_Sponsor_Packet.pdf"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition font-medium"
          >
            Download Sponsorship Packet
          </a>

          <a
            href="mailto:info@aive.global"
            className="px-8 py-3 bg-slate-200 rounded-lg shadow hover:bg-slate-300 transition font-medium"
          >
            Request Meeting
          </a>
        </div>
      </section>

      {/* ========== WHAT IS AIVE ========== */}
      <section className="py-24 bg-slate-100 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What is AIVE?</h2>

          <p className="text-slate-700 text-lg leading-relaxed">
            AIVE — Awareness • Intelligence • Verification • Evolution — is a public-benefit
            intelligence platform that translates complex global signals into clear, educational
            tools that help communities prepare for change rather than react to it.
          </p>
        </div>
      </section>

      {/* ========== WHY IT MATTERS (NEW) ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why This Work Matters</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Early Warning Access",
                desc: "Communities often receive disruptive information too late. AIVE provides early visibility into emerging risks.",
              },
              {
                title: "Educational Empowerment",
                desc: "We turn complex global data into simple learning modules that anyone can understand, regardless of background.",
              },
              {
                title: "Equitable Readiness",
                desc: "Public tools ensure every community—urban or rural—can prepare for economic, health, or workforce disruptions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROGRAM GRID ========== */}
      <section className="py-28 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Our Public Education Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
              desc: "Accessible learning on AI safety, predictive models, and digital empowerment.",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className="py-28 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Public Resilience Together
        </h2>

        <p className="mb-8 text-slate-300 text-lg">
          Email: <span className="font-medium">info@aive.global</span>
        </p>

        <a
          href="mailto:info@aive.global"
          className="px-10 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
        >
          Request Intro Call
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} AIVE Public Benefit Intelligence. All Rights Reserved.
      </footer>
    </div>
  );
}

