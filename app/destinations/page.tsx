import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-blue-600">
          Destinations
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Sunny places to work and travel
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Start your journey by choosing a destination where you can enjoy the
          sun while working or travelling.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Lisbon */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Lisbon, Portugal</h2>
            <p className="mt-2 text-slate-600">
              Best for summer in Europe with strong remote work and hospitality opportunities.
            </p>
          </div>

          {/* Barcelona */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Barcelona, Spain</h2>
            <p className="mt-2 text-slate-600">
              Great mix of beaches, city life and seasonal jobs.
            </p>
          </div>

          {/* Split */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Split, Croatia</h2>
            <p className="mt-2 text-slate-600">
              Ideal for summer tourism roles and island lifestyle.
            </p>
          </div>

          {/* Sydney */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Sydney, Australia</h2>
            <p className="mt-2 text-slate-600">
              Perfect winter escape for UK travellers with working holiday visas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}