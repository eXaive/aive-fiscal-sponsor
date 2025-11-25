
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <section className="py-28 text-center">
        <h1 className="text-5xl font-bold">AIVE — Public Benefit Intelligence & Education</h1>
        <p className="text-lg text-slate-600 mt-6">
          Helping communities understand outbreaks, economics, workforce risks, and global disruptions.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="/AIVE_Fiscal_Sponsor_Packet.pdf" className="px-6 py-3 bg-blue-600 text-white rounded-md">Download Sponsorship Packet</a>
          <a href="mailto:YOUR_EMAIL" className="px-6 py-3 bg-slate-200 text-slate-900 rounded-md">Request Meeting</a>
        </div>
      </section>
    </div>
  );
}
