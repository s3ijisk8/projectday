export default function HomePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">What kind of day are you looking for?</h1>
        <p className="text-gray-600">Search by mood, time, budget, energy, or aesthetic.</p>
      </header>
      <form action="/search" method="GET" className="flex gap-2">
        <input
          type="text"
          name="q"
          placeholder="Type an activity, aesthetic, place…"
          className="w-full rounded-md border border-gray-300 bg-white/80 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button className="rounded-md bg-black px-4 py-2 text-white">Search</button>
      </form>
      <section className="rounded-lg border border-dashed p-4 text-sm text-gray-600">
        This is a starter. We’ll wire filters, search, and content after database setup.
      </section>
    </div>
  );
}


