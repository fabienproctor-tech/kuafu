import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <Header />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-black uppercase tracking-widest text-blue-600">
          Jobs Abroad
        </p>

        <h1 className="mt-2 text-5xl font-black text-slate-950">
          Find work that helps fund the journey
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Search for remote roles, seasonal jobs, hospitality work and internships
          that support a travel lifestyle.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Remote Work</h2>
            <p className="mt-2 text-slate-600">
              Digital, marketing, admin and freelance roles you can do while travelling.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Seasonal Jobs</h2>
            <p className="mt-2 text-slate-600">
              Summer work in tourism, events, hostels, bars and resorts.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Hospitality</h2>
            <p className="mt-2 text-slate-600">
              Roles in hotels, restaurants, cafés and travel hotspots.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-black">Internships</h2>
            <p className="mt-2 text-slate-600">
              Short-term international experience for students and graduates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}