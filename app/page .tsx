"use client";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-3xl mx-auto pt-24 px-6 text-center">
        <h1 className="text-4xl font-bold text-sky-300">
          AIVE — Public Benefit Intelligence & Education
        </h1>

        <p className="mt-4 text-slate-300 text-lg">
          Helping communities understand outbreaks, economic shifts, workforce risks,
          and global disruptions through accessible dashboards, predictive learning tools,
          and AI literacy education.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/AIVE-Sponsorship-Packet.pdf"
            className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded"
          >
            Download Sponsorship Packet
          </a>
          <a
            href="mailto:team@aive.org"
            className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded"
          >
            Request Meeting
          </a>
        </div>
      </section>

      <section className="bg-slate-900 mt-20 py-16 px-6">
        <h2 className="text-center text-3xl font-semibold text-sky-300">
          Our Public Education Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          <ProgramCard
            title="Outbreak Literacy Tools"
            body="Dashboards explaining outbreak signals, transmission trends, and preparedness."
          />
          <ProgramCard
            title="Predictive Learning Games"
            body="Mock-data simulations showing how events ripple across public systems."
          />
          <ProgramCard
            title="Economic Stability Education"
            body="Simple models explaining inflation, markets, and financial shocks."
          />
          <ProgramCard
            title="AI Literacy for Everyone"
            body="Accessible learning on AI safety, skills, and everyday empowerment."
          />
        </div>
      </section>
    </main>
  );
}

function ProgramCard({ title, body }: any) {
  return (
    <div className="p-4 bg-slate-800 rounded border border-slate-700">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-400 text-sm">{body}</p>
    </div>
  );
}
