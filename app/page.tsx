export default function FiscalSponsorLanding() {
  return (
    <div className="bg-white text-slate-900">
      
      {/* HERO */}
      <section className="py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Building Public Resilience Through Awareness & Predictive Education
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          AIVE helps communities understand outbreaks, economic shifts, workforce 
          risks, and global disruptions through public education tools, predictive 
          games, and accessible AI literacy modules.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/AIVE_Fiscal_Sponsor_Packet.pdf" className="px-6 py-3 bg-blue-600 text-white rounded-md">
            Download Fiscal Sponsor Packet
          </a>
          <a href="mailto:youremail@example.com" className="px-6 py-3 bg-slate-200 rounded-md">
            Request Intro Meeting
          </a>
        </div>
      </section>

      {/* WHAT IS AIVE */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">What is AIVE?</h2>
          <p className="text-slate-700">
            AIVE — Awareness • Intelligence • Verification • Evolution — is a public-benefit 
            intelligence system that translates complex global risk signals into simple educational 
            tools that everyday people can understand and act on.
          </p>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="py-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {[
          { title: "Outbreak Literacy Tools" },
          { title: "Predictive Learning Games" },
          { title: "Economic Stability Education" },
          { title: "Workforce & AI Preparedness" },
          { title: "Global Risk Awareness Tools" },
          { title: "AI Literacy for Everyone" },
        ].map((p, i) => (
          <div key={i} className="border p-4 rounded-lg bg-white shadow">
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-slate-600">
              Public-focused educational tools supporting awareness & resilience.
            </p>
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Build Public Resilience Together</h2>
        <p className="mb-6">Email: youremail@example.com • Phone: your number</p>
        <a href="mailto:youremail@example.com" className="px-6 py-3 bg-blue-500 rounded-md">
          Request Intro Call
        </a>
      </section>

    </div>
  );
}
