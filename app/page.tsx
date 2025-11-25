export default function FiscalSponsorPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* HERO SECTION */}
      <section className="py-20 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold">
          Building Public Resilience Through Predictive Education
        </h1>
        <p className="text-lg text-slate-600 mt-4">
          AIVE helps communities understand outbreaks, economic shifts, workforce risks, 
          and global disruptions through public-benefit learning tools and AI literacy.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <a
            href="/AIVE_Fiscal_Sponsor_Packet.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-md"
          >
            Download Sponsorship Packet
          </a>

          <a
            href="mailto:YOUR_EMAIL"
            className="px-6 py-3 bg-slate-200 rounded-md"
          >
            Request Meeting
          </a>
        </div>
      </section>

      {/* PROGRAM GRID */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {[
            "Outbreak Literacy Tools",
            "Predictive Learning Games",
            "Economic Stability Education",
            "Workforce & AI Preparedness",
            "Global Risk Awareness Tools",
            "AI Literacy for Everyone",
          ].map((title) => (
            <div
              key={title}
              className="p-4 bg-white border rounded-lg shadow-sm"
            >
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-600">
                Public-facing tools that help people understand complex global signals.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Let’s Build Public Resilience Together
        </h2>
        <p className="mb-6">Email: YOUR_EMAIL</p>
        <a
          href="mailto:YOUR_EMAIL"
          className="px-6 py-3 bg-blue-500 rounded-md"
        >
          Request Intro Call
        </a>
      </section>

    </div>
  );
}
