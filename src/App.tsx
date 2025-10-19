import React from "react";


export default function HackathonPitch(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 antialiased">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-rose-400 rounded-xl flex items-center justify-center text-white font-semibold shadow-md">H</div>
            <div>
              <div className="font-semibold leading-tight">Hackathon Pitch</div>
              <div className="text-xs text-gray-500">Minimal skeleton</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-2 text-sm">
            <a href="#hero" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition">Hero</a>
            <a href="#problem" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition">Problem</a>
            <a href="#solution" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition">Solution</a>
            <a href="#use-cases" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition">Use cases</a>
            <a href="#how-it-works" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition">How it works</a>
            <a href="#team" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition">Team</a>
            <a href="#future" className="px-3 py-2 rounded-lg hover:bg-gray-100 transition">Future</a>
          </nav>

          <div className="md:hidden text-sm text-gray-500">Menu</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* 1. Hero / One-liner */}
        <section id="hero" className="bg-white rounded-2xl shadow-sm p-8 md:p-10 ring-1 ring-gray-100">
          <div className="md:flex md:items-center md:justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Project Name</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">Name + crisp value prop — e.g. “Uber for X”, or “AI tool that ___ in seconds”. Kept short and scannable.</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:shadow-lg transition">Get demo</button>
                <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition">Docs</button>
                <button className="px-3 py-2 rounded-lg text-sm text-gray-500 bg-gray-50 border border-transparent">Share</button>
              </div>

              <div className="mt-6 text-sm text-gray-400">Tip: click any section in the nav to jump.</div>
            </div>

            <div className="mt-6 md:mt-0 md:w-1/3">
              {/* Placeholder for hero image / animated GIF */}
              <div className="h-48 rounded-xl border border-dashed border-gray-200 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center text-gray-400 shadow-sm">
                Hero image / GIF
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problem */}
        <section id="problem" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <div className="md:flex md:items-start md:gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold">Problem</h2>
              <p className="mt-3 text-gray-600">What pain or inefficiency exists right now? Why does it matter and who is affected? Keep this focused on real user pain.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
                  <h3 className="font-medium">Pain points</h3>
                  <ul className="mt-3 list-disc ml-5 text-gray-600">
                    <li>Problem point A (placeholder)</li>
                    <li>Problem point B (placeholder)</li>
                    <li>Problem point C (placeholder)</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
                  <h3 className="font-medium">Affected users / metrics</h3>
                  <p className="mt-3 text-gray-600">Who is hurt by this today? Any numbers / frequency / context (placeholder).</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:w-1/3">
              <div className="p-4 rounded-lg bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-sm">
                <h4 className="text-sm font-medium text-gray-500 uppercase">Quick stat</h4>
                <div className="mt-2 text-3xl font-bold">—</div>
                <div className="mt-1 text-sm text-gray-400">Add a key metric here later</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solution */}
        <section id="solution" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Solution — What we built</h2>
          <p className="mt-3 text-gray-600">Explicitly describe what the project does. Prefer screenshots / short animated GIFs over walls of text.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="h-40 rounded-xl border-dashed border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400">Screenshot 1</div>
            <div className="h-40 rounded-xl border-dashed border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400">Screenshot 2</div>
            <div className="h-40 rounded-xl border-dashed border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400">Animated GIF</div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
            <h3 className="font-medium">Short feature bullets</h3>
            <ul className="mt-3 list-disc ml-5 text-gray-600">
              <li>Feature 1 (placeholder)</li>
              <li>Feature 2 (placeholder)</li>
              <li>Feature 3 (placeholder)</li>
            </ul>
          </div>
        </section>

        {/* 4. Use cases */}
        <section id="use-cases" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Use cases</h2>
          <p className="mt-3 text-gray-600">Where could it be used? Short, tangible examples are best.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-md bg-gray-50 border border-transparent hover:border-gray-100 transition">Use case A (placeholder)</div>
            <div className="p-4 rounded-md bg-gray-50 border border-transparent hover:border-gray-100 transition">Use case B (placeholder)</div>
            <div className="p-4 rounded-md bg-gray-50 border border-transparent hover:border-gray-100 transition">Use case C (placeholder)</div>
          </div>
        </section>

        {/* 5. How it works / Tech stack */}
        <section id="how-it-works" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">How it works / Tech stack</h2>
          <p className="mt-3 text-gray-600">Architecture diagram or bullets. Highlight any cool hacks or constraints you overcame.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <h3 className="font-medium">Architecture</h3>
              <ol className="mt-3 list-decimal ml-5 text-gray-600">
                <li>Client: React + TypeScript (this SPA)</li>
                <li>API: (placeholder)</li>
                <li>Data / Storage: (placeholder)</li>
              </ol>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <h3 className="font-medium">Tech stack & notes</h3>
              <ul className="mt-3 list-disc ml-5 text-gray-600">
                <li>Stack bullet 1 (placeholder)</li>
                <li>Stack bullet 2 (placeholder)</li>
                <li>Cool hack / constraint (placeholder)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Team */}
        <section id="team" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Team</h2>
          <p className="mt-3 text-gray-600">Names + 1-line role/context (e.g., “LLM prompt engineer”, “backend”, “designer”).</p>

          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <div className="font-medium">Person A</div>
              <div className="text-sm text-gray-500">Role / 1-line</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <div className="font-medium">Person B</div>
              <div className="text-sm text-gray-500">Role / 1-line</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <div className="font-medium">Person C</div>
              <div className="text-sm text-gray-500">Role / 1-line</div>
            </div>
          </div>
        </section>

        {/* 7. Future vision / next steps */}
        <section id="future" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Future vision / Next steps</h2>
          <p className="mt-3 text-gray-600">Shows ambition beyond the hackathon. Roadmap, go-to-market, potential integrations.</p>

          <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
            <h3 className="font-medium">Roadmap (placeholder)</h3>
            <ol className="mt-3 list-decimal ml-5 text-gray-600">
              <li>Short-term: (placeholder)</li>
              <li>Mid-term: (placeholder)</li>
              <li>Long-term: (placeholder)</li>
            </ol>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-500">
          <div>© Hackathon Pitch — Minimal skeleton</div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-400">Made with ❤️</div>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-md bg-gray-50 border flex items-center justify-center text-gray-400">GH</div>
              <div className="w-8 h-8 rounded-md bg-gray-50 border flex items-center justify-center text-gray-400">Dr</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
