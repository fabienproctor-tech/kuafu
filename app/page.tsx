import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 text-slate-900">
      <Header />

      <section className="px-5 py-20 text-center relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-200 via-white to-blue-100 blur-2xl opacity-40"></div>
        <img
  src="/kuafu-logo.png"
  alt="Kuafu - Chasing the Sun"
  className="mx-auto h-40 w-auto"
/>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-600">
          Find flights, places to stay and jobs abroad — and follow summer around the world.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a href="/search" className="rounded-2xl bg-blue-600 hover:bg-blue-700 transition px-6 py-4 font-bold text-white">
            Start Searching
          </a>
          <a href="/guides" className="rounded-2xl border px-6 py-4 font-bold">
            Explore Guides
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}