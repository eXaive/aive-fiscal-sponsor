"use client";

import { useState } from "react";

export default function Page() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="py-28 text-center bg-gradient-to-b from-slate-100 to-white">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-slate-900">
          AIVE — Public Benefit Intelligence & Education
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-slate-600 mb-8 leading-relaxed">
          Helping communities understand outbreaks, economic shifts, workforce
          risks, and global disruptions through accessible dashboards,
          predictive learning tools, and AI literacy education.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/AIVE_Showcase_PDF_labeled.pdf"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold"
          >
            Download Sponsorship Packet
          </a>

          <a
            href="mailto:youremail@example.com"
            className="px-8 py-3 bg-slate-200 rounded-lg shadow hover:bg-slate-300 transition font-semibold"
          >
            Request Meeting
          </a>
        </div>
      </section>

      {/* WHAT IS AIVE */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">What is AIVE?</h2>

          <p className="text-lg text-slate-700 leading-relaxed">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              desc: "Accessible learning on modern AI, public safety, and digital empowerment.",
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

      {/* SHOWCASE SECTION */}
      <section className="py-24 bg-slate-50">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-slate-900">
          AIVE Platform Showcase
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {[
            "/aive-showcase/1.png",
            "/aive-showcase/2.png",
            "/aive-showcase/3.png",
            "/aive-showcase/4.png",
            "/aive-showcase/5.png",
            "/aive-showcase/6.png",
            "/aive-showcase/7.png",
            "/aive-showcase/8.png",
          ].map((src, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-xl hover:-translate-y-1 transition"
              onClick={() => setActiveImage(src)}
            >
              <img src={src} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            />
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Public Resilience Together</h2>

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
