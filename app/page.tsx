export default function FiscalSponsorLanding() {
  return (
    <div className="bg-white text-slate-900">

      {/* ========== HERO SECTION ========== */}
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white text-center">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6">
          AIVE — Public Benefit Intelligence & Education
        </h1>

        <p className="text-xl max-w-3xl mx-auto text-slate-600 leading-relaxed mb-10">
          Empowering communities with outbreak literacy, economic stability
          insights, workforce preparedness, and global risk awareness — all through
          clear dashboards, predictive learning tools, and modern AI education.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/AIVE_Fiscal_Sponsor_Packet_Final.pdf"
            className="px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download Sponsorship Packet
          </a>

          <a
            href="mailto:info@aive.global"
            className="px-8 py-3 bg-slate-200 text-lg font-medium rounded-lg shadow hover:bg-slate-300 transition"
          >
            Request Meeting
          </a>
        </div>
      </section>

      {/* ========== WHY IT MATTERS ========== */}
      <section className="py-24 bg-white border-t">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why This Work Matters</h2>

          <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed mb-12">
            Communities often receive critical intelligence too late — from outbreaks to
            financial instability to climate disruptions. AIVE makes early-warning
            intelligence accessible, understandable, and actionable for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Early Warning Access",
                desc: "Public dashboards that help communities prepare instead of react.",
              },
              {
                title: "Educational Empowerment",
                desc: "Simple tools explaining complex outbreaks, economics, and global shifts.",
              },
              {
                title: "Equitable Readiness",
                desc: "Bringing intelligence access to underserved and overlooked populations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-xl border shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROGRAM GRID ========== */}
      <section className="py-28 bg-slate-100 border-y">
        <h2 className="text-4xl font-bold text-center mb-12">
          AIVE Public Education Programs
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {[
            { emoji: "🧬", title: "Outbreak Literacy Tools", desc: "Understand disease signals and transmission trends clearly." },
            { emoji: "🎮", title: "Predictive Learning Games", desc: "Simulations showing how events ripple through public systems." },
            { emoji: "📈", title: "Economic Stability Education", desc: "Simple learning paths on inflation, markets, and financial shocks."},
            { emoji: "🤖", title: "Workforce & AI Preparedness", desc: "Helping citizens prepare for automation and AI job transitions."},
            { emoji: "🌍", title: "Global Risk Awareness Tools", desc: "Visual explainers for climate, geopolitics, and global disruptions."},
            { emoji: "🧠", title: "AI Literacy for Everyone", desc: "Accessible AI safety and digital intelligence education."},
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-5xl mb-4">{p.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== SYSTEM SHOWCASE (TECH SIDE) ========== */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore the AIVE Intelligence System</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Real product screenshots showing AIVE’s outbreak intelligence, finance
            engines, leadership outlooks, and multi-agent system in action.
          </p>
        </div>

        {/* SYSTEM COLLAGE */}
        <div className="max-w-6xl mx-auto px-6">
          <img
            src="/system_collage_labeled.png"
            className="rounded-xl shadow-2xl w-full"
            alt="AIVE System Showcase"
          />
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section className="py-28 bg-slate-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Public Resilience Together</h2>

        <p className="mb-8 text-lg text-slate-300">
          Email: <span className="font-medium">info@aive.global</span>
        </p>

        <a
          href="mailto:info@aive.global"
          className="px-10 py-3 text-lg bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Request Introduction Call
        </a>
      </section>

      <footer className="py-8 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} AIVE Public Benefit Intelligence. All Rights Reserved.
      </footer>
    </div>
  );
}

