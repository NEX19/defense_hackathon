import React from "react";
import ObjViewerGlider from './STLViewer';

export default function HackathonPitch(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 antialiased">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-rose-400 rounded-xl flex items-center justify-center text-white font-semibold shadow-md">BA</div>
            <div>
              <div className="font-semibold leading-tight">BigAir — Silent Glider Logistics</div>
              <div className="text-xs text-gray-500">Hackathon pitch — long-range, low-signature resupply</div>
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
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">BigAir</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                Long-range, low-signature glider logistics. Launch large modular cargo pods from a safe standoff altitude (~5 km)
                and glide autonomously up to 40 km to deliver ~200 kg of supplies with high precision — faster, cheaper, and safer than many traditional methods.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Problem */}
        <section id="problem" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <div className="md:flex md:items-start md:gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold">Problem</h2>
              <p className="mt-3 text-gray-600">Modern battlefields require fast, reliable logistics while airspace is increasingly contested. Current options (helicopters, manned airdrops, and slow trucks) are often:
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
                  <h3 className="font-medium">Pain points</h3>
                  <ul className="mt-3 list-disc ml-5 text-gray-600">
                    <li>High risk to crews and aircraft when entering contested airspace.</li>
                    <li>Long reaction times and dependence on forward infrastructure (airstrips, secure landing zones).</li>
                    <li>Limited precision for traditional airdrops and high chance of loss or dispersion.</li>
                    <li>High cost and logistics footprint for rotary-wing resupply at scale.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
                  <h3 className="font-medium">Affected users / metrics</h3>
                  <p className="mt-3 text-gray-600">Frontline units, special operations teams, forward medical teams, and humanitarian responders — particularly in areas where ground routes are blocked or airspace is dangerous.</p>
                  <p className="mt-3 text-sm text-gray-500">Key constraint we address: deliverable mass per sortie and crew/craft exposure time.</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:w-1/3">
              <div className="p-4 rounded-lg bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-sm">
                <h4 className="text-sm font-medium text-gray-500 uppercase">Quick stat</h4>
                <div className="mt-2 text-3xl font-bold">40 km</div>
                <div className="mt-1 text-sm text-gray-400">Glide range per launch (design target)</div>
                <div className="mt-3 text-2xl font-semibold">400 kg</div>
                <div className="mt-1 text-sm text-gray-400">Max system mass — ~200 kg usable payload</div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Solution */}
        <section id="solution" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Solution — What BigAir built</h2>
          <p className="mt-3 text-gray-600">An autonomous cargo glider and modular payload pod that is released from a carrier aircraft at safe standoff altitude (~5 km). The pod glides up to 40 km using a low-profile aerodynamic shape and precision guidance to reach a pre-planned drop/land point with minimal exposure to contested airspace.</p>

          <div className="mt-6">
            <ObjViewerGlider className="h-[480px] w-full" />
          </div>

          <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
            <h3 className="font-medium">Core features</h3>
            <ul className="mt-3 list-disc ml-5 text-gray-600">
              <li>Standoff release from ~5,000 m altitude — keeps carrier aircraft outside most short-range threat envelopes.</li>
              <li>40 km glide range, 400 kg gross mass, ~200 kg payload modular pod.</li>
              <li>Autonomous navigation: GNSS + INS with waypoint mission profiles and last-mile precision guidance.</li>
              <li>Modular payload box for medevac, ammunition, food, batteries, comms, or sensor packages.</li>
              <li>Redundant safety systems: fail-safe parachute, soft-landing mode, and recoverable airframe for reuse.</li>
            </ul>
          </div>
        </section>

        {/* 4. Use cases */}
        <section id="use-cases" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Use cases</h2>
          <p className="mt-3 text-gray-600">Concrete mission profiles where BigAir provides measurable benefits.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-md bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <h4 className="font-medium">Frontline resupply</h4>
              <p className="mt-2 text-sm text-gray-600">Rapidly deliver ammunition, batteries, and medical supplies to dispersed units without exposing helicopters or convoys.</p>
            </div>
            <div className="p-4 rounded-md bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <h4 className="font-medium">Tactical special ops resupply</h4>
              <p className="mt-2 text-sm text-gray-600">Covert deliveries to small teams operating behind enemy lines — small radar/thermal signature and long standoff range.</p>
            </div>
            <div className="p-4 rounded-md bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <h4 className="font-medium">Medical & humanitarian drops</h4>
              <p className="mt-2 text-sm text-gray-600">Rapid aid deliveries to isolated communities or field hospitals where roads and landing zones are unavailable.</p>
            </div>
            <div className="p-4 rounded-md bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <h4 className="font-medium">Sensor / comms payload deployment</h4>
              <p className="mt-2 text-sm text-gray-600">Deploy sensors or comms relays to forward positions to extend situational awareness without risking manned platforms.</p>
            </div>
            <div className="p-4 rounded-md bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <h4 className="font-medium">Logistics to austere sites</h4>
              <p className="mt-2 text-sm text-gray-600">Resupply outposts and temporary bases where runways are not available and ground routes are contested.</p>
            </div>
          </div>
        </section>

        {/* 5. How it works / Tech stack */}
        <section id="how-it-works" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">How it works / Tech stack</h2>
          <p className="mt-3 text-gray-600">Overview of the system architecture, core subsystems and notable engineering choices made during the hackathon prototype.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <h3 className="font-medium">Architecture (mission flow)</h3>
              <ol className="mt-3 list-decimal ml-5 text-gray-600">
                <li>Pre-mission planning: mission planner sets drop coordinates and constraints.</li>
                <li>Carrier aircraft climbs to ~5,000 m and releases the glider/payload pod at safe standoff.</li>
                <li>On-board autopilot (GNSS + INS) executes an optimized glide path and last-mile guidance to the aim point.</li>
                <li>Soft-landing or precision low-velocity delivery; telemetry and recovery team retrieve the airframe/pod.</li>
              </ol>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <h3 className="font-medium">Tech stack & notes</h3>
              <ul className="mt-3 list-disc ml-5 text-gray-600">
                <li>Airframe: composite/foam prototype for low weight and low RCS signature; foldable wings for storage.</li>
                <li>Autopilot: off-the-shelf autopilot firmware (PX4-style) with custom mission-planning UI and telemetry feeds.</li>
                <li>Guidance & comms: GNSS + INS, local RF telemetry for mission updates, optional LOS/UHF uplink for final approach updates.</li>
                <li>Safety: redundant GNSS/INS, geofencing, and a ballistic parachute fallback for system failures.</li>
                <li>Manufacturing notes: modular payload pod (quick-swap), standard interfaces for different loadouts (med, ammo, fuel cells).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Team */}
        <section id="team" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Team — BigAir</h2>
          <p className="mt-3 text-gray-600">Small, cross-disciplinary hackathon team covering aerodynamics, systems and controls.</p>

          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <div className="font-medium">Ričards Rusevičs</div>
              <div className="text-sm text-gray-500">Programming</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <div className="font-medium">Tomass Salcevičs</div>
              <div className="text-sm text-gray-500">Physics</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
              <div className="font-medium">Jēkabs Pāvuls</div>
              <div className="text-sm text-gray-500">Physics & 3D modeling</div>
            </div>
          </div>
        </section>

        {/* 7. Future vision / next steps */}
        <section id="future" className="bg-white rounded-2xl p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
          <h2 className="text-2xl font-semibold">Future vision / Next steps</h2>
          <p className="mt-3 text-gray-600">Ambition beyond the hackathon prototype: scale, certify, and integrate BigAir into operational logistics to reduce cost and risk for persistent operations.</p>

          <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-transparent hover:border-gray-100 transition">
            <h3 className="font-medium">Roadmap</h3>
            <ol className="mt-3 list-decimal ml-5 text-gray-600">
              <li>Short-term: ground tests and drop tests with instrumentation, iterate on guidance and pod interfaces.</li>
              <li>Mid-term: endurance testing, ops concept development (GOT, recovery teams), and partnership for field trials.</li>
              <li>Long-term: scale to larger payload classes, certify for operational use, and enable coordinated multi-glider logistics chains.</li>
            </ol>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-500">
          <div>© BigAir — Silent Glider Logistics</div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-400">Made with ❤️ by Team BigAir</div>
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
