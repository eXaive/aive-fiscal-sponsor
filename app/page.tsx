"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center pt-24 px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          AIVE — Public Benefit Intelligence & Education
        </h1>

        <p className="mt-4 text-slate-300 text-base md:text-lg">
          Helping communities understand outbreaks, economic shifts, workforce
          risks, and global disruptions through accessible dashboards,
          predictive learning tools, and AI literacy education.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/AIVE_Sponsorship_Packet.pdf"
            target="_blank"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white text-sm font-semibold shadow"
          >
            Download Sponsorship Packet
          </Link>

          <a
            href="mailto:eXaive@consultant.com?subject=AIVE – Fiscal Sponsorship Inquiry"
            className="px-5 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-slate-200 text-sm font-semibold shadow"
          >
            Request Meeting
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto text-center mt-24 px-6">
        <h2 className="text-2xl font-bold text-white">What is AIVE?</h2>
        <p className="text-slate-300 mt-3 leading-relaxed text-sm md:text-base">
          AIVE — Awareness • Intelligence • Verification • Evolution — is a public-benefit
          intelligence platform that translates complex global signals into clear,
          educational tools that empower communities to prepare for change rather than
          react to it.
        </p>
      </section>

      {/* PROGRAMS */}
      <section className="max-w-5xl mx-auto mt-20 px-6 pb-24">
        <h3 className="text-xl font-bold text-center mb-8">
          Our Public Education Programs
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <p className="font-semibold mb-1">Outbreak Literacy Tools</p>
            <p className="text-slate-400 text-sm">
              Dashboards explaining outbreak signals, transmission trends, and preparedness.
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <p className="font-semibold mb-1">Predictive Learning Games</p>
            <p className="text-slate-400 text-sm">
              Mock-data simulations showing how events ripple across public systems.
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <p className="font-semibold mb-1">Economic Stability Education</p>
            <p className="text-slate-400 text-sm">
              Simple modules explaining inflation, markets, and financial shocks.
            </p>
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <p className="font-semibold mb-1">Workforce & AI Preparedness</p>
            <p className="text-slate-400 text-sm">
              Tools to help people understand automation, AI, and future job pathways.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} AIVE — Public Benefit Intelligence & Education.
        All Rights Reserved.
      </footer>
    </main>
  );
}
