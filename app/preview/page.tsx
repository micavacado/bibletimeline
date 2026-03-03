"use client"

import { useState } from "react"

type Option = "A" | "B" | "C"

// ─── Option A: Warm Parchment ────────────────────────────────────────────────

function WarmParchment() {
  return (
    <div className="bg-stone-50 min-h-[640px]">
      {/* Nav */}
      <nav className="bg-stone-800 border-b border-stone-700">
        <div className="max-w-5xl mx-auto px-4 h-11 flex items-center gap-6">
          <span className="text-sm font-semibold text-amber-400 cursor-pointer">Timeline</span>
          <span className="text-sm font-semibold text-stone-400 hover:text-stone-200 cursor-pointer transition-colors">People</span>
          <span className="text-sm font-semibold text-stone-400 hover:text-stone-200 cursor-pointer transition-colors">Reading Plan</span>
          <span className="text-sm font-semibold text-stone-400 hover:text-stone-200 cursor-pointer transition-colors">References</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-amber-50/60 border-b border-stone-100 px-4 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
          From Creation to the New Covenant
        </p>
        <h1 className="text-3xl font-bold text-stone-900 mb-2">
          The Biblical Timeline
        </h1>
        <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
          Select a period below to explore the events, differing scholarly
          views, and world context of God&apos;s sovereign history.
        </p>
      </header>

      {/* Timeline bar */}
      <div className="bg-stone-100 border-b border-stone-200 py-6">
        <div className="overflow-x-auto">
          <div className="min-w-max px-8 mx-auto">
            <div className="relative flex">
              <div className="absolute h-px bg-stone-300 top-2.5 left-12 right-12 z-0" />
              {[
                { label: "Creation", active: true },
                { label: "Pre-Flood", active: false },
                { label: "Patriarchs", active: false },
                { label: "Exodus", active: false },
                { label: "Judges", active: false },
                { label: "Kingdom", active: false },
                { label: "Divided", active: false },
                { label: "Exile", active: false },
              ].map(({ label, active }) => (
                <div key={label} className="relative z-10 flex-none w-24 flex flex-col items-center group cursor-pointer">
                  <div className="h-5 flex items-center justify-center">
                    <div className={`rounded-full border-2 border-stone-100 transition-all duration-200 ${active ? "w-5 h-5 bg-amber-500 shadow-md" : "w-3.5 h-3.5 bg-stone-300 group-hover:w-4 group-hover:h-4 group-hover:bg-stone-400"}`} />
                  </div>
                  <span className={`mt-2 text-xs font-semibold text-center leading-tight transition-colors ${active ? "text-amber-700" : "text-stone-500 group-hover:text-stone-700"}`}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sample card */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
          <div className="h-1 bg-amber-500" />
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Creation Period</span>
              <span className="text-xs text-stone-400 font-mono">~4004 BC</span>
            </div>
            <h2 className="text-xl font-bold text-stone-900 mb-2">The Creation of the World</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-3">
              God creates the heavens and the earth in six days, establishing the foundation of all existence
              and mankind&apos;s role as image-bearers and stewards of creation.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="text-xs text-amber-700 font-medium hover:text-amber-900 cursor-pointer">Genesis 1:1–2:3</span>
              <span className="text-xs text-amber-700 font-medium hover:text-amber-900 cursor-pointer">John 1:1–3</span>
              <span className="text-xs text-amber-700 font-medium hover:text-amber-900 cursor-pointer">Colossians 1:16</span>
            </div>
          </div>
        </div>

        {/* World context section */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
          <div className="p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">World Context</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Contemporary ancient near-eastern creation accounts (Enuma Elish, Atrahasis) share surface similarities
              but contrast sharply in theology — one God, one purposeful creation, one dignified humanity.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-800 border-t border-stone-700 mt-8">
        <div className="max-w-2xl mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-stone-600" />
            <span className="text-stone-500 text-xs">✦</span>
            <div className="h-px w-12 bg-stone-600" />
          </div>
          <p className="text-sm font-semibold text-stone-300 mb-1">Micah Stevenson</p>
          <p className="text-xs text-stone-500 mb-4">Built out of a love for God&apos;s Word.</p>
          <p className="text-[10px] text-stone-600">Created 2026 · The Biblical Timeline</p>
        </div>
      </footer>
    </div>
  )
}

// ─── Option B: Dark Scholarly ─────────────────────────────────────────────────

function DarkScholarly() {
  return (
    <div className="bg-slate-900 min-h-[640px]">
      {/* Nav */}
      <nav className="bg-slate-950 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 h-11 flex items-center gap-6">
          <span className="text-sm font-semibold text-amber-400 cursor-pointer">Timeline</span>
          <span className="text-sm font-semibold text-stone-400 hover:text-stone-200 cursor-pointer transition-colors">People</span>
          <span className="text-sm font-semibold text-stone-400 hover:text-stone-200 cursor-pointer transition-colors">Reading Plan</span>
          <span className="text-sm font-semibold text-stone-400 hover:text-stone-200 cursor-pointer transition-colors">References</span>
        </div>
      </nav>

      {/* Hero */}
      <header className="border-b border-slate-800 px-4 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
          From Creation to the New Covenant
        </p>
        <h1 className="text-3xl font-bold text-stone-50 mb-2">
          The Biblical Timeline
        </h1>
        <p className="text-stone-400 text-sm max-w-xl mx-auto leading-relaxed">
          Select a period below to explore the events, differing scholarly
          views, and world context of God&apos;s sovereign history.
        </p>
      </header>

      {/* Timeline bar */}
      <div className="bg-slate-800 border-b border-slate-700 py-6">
        <div className="overflow-x-auto">
          <div className="min-w-max px-8 mx-auto">
            <div className="relative flex">
              <div className="absolute h-px bg-slate-600 top-2.5 left-12 right-12 z-0" />
              {[
                { label: "Creation", active: true },
                { label: "Pre-Flood", active: false },
                { label: "Patriarchs", active: false },
                { label: "Exodus", active: false },
                { label: "Judges", active: false },
                { label: "Kingdom", active: false },
                { label: "Divided", active: false },
                { label: "Exile", active: false },
              ].map(({ label, active }) => (
                <div key={label} className="relative z-10 flex-none w-24 flex flex-col items-center group cursor-pointer">
                  <div className="h-5 flex items-center justify-center">
                    <div className={`rounded-full border-2 border-slate-800 transition-all duration-200 ${active ? "w-5 h-5 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.4)]" : "w-3.5 h-3.5 bg-slate-600 group-hover:w-4 group-hover:h-4 group-hover:bg-slate-400"}`} />
                  </div>
                  <span className={`mt-2 text-xs font-semibold text-center leading-tight transition-colors ${active ? "text-amber-400" : "text-stone-500 group-hover:text-stone-300"}`}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sample card */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          <div className="h-1 bg-amber-500" />
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold bg-amber-900/50 text-amber-400 px-2 py-0.5 rounded-full">Creation Period</span>
              <span className="text-xs text-slate-500 font-mono">~4004 BC</span>
            </div>
            <h2 className="text-xl font-bold text-stone-100 mb-2">The Creation of the World</h2>
            <p className="text-stone-400 text-sm leading-relaxed mb-3">
              God creates the heavens and the earth in six days, establishing the foundation of all existence
              and mankind&apos;s role as image-bearers and stewards of creation.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="text-xs text-amber-400 font-medium hover:text-amber-300 cursor-pointer">Genesis 1:1–2:3</span>
              <span className="text-xs text-amber-400 font-medium hover:text-amber-300 cursor-pointer">John 1:1–3</span>
              <span className="text-xs text-amber-400 font-medium hover:text-amber-300 cursor-pointer">Colossians 1:16</span>
            </div>
          </div>
        </div>

        {/* World context section */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          <div className="p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">World Context</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Contemporary ancient near-eastern creation accounts (Enuma Elish, Atrahasis) share surface similarities
              but contrast sharply in theology — one God, one purposeful creation, one dignified humanity.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 mt-8">
        <div className="max-w-2xl mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-slate-700" />
            <span className="text-slate-600 text-xs">✦</span>
            <div className="h-px w-12 bg-slate-700" />
          </div>
          <p className="text-sm font-semibold text-stone-300 mb-1">Micah Stevenson</p>
          <p className="text-xs text-slate-500 mb-4">Built out of a love for God&apos;s Word.</p>
          <p className="text-[10px] text-slate-600">Created 2026 · The Biblical Timeline</p>
        </div>
      </footer>
    </div>
  )
}

// ─── Option C: Elevated Light ─────────────────────────────────────────────────

function ElevatedLight() {
  return (
    <div className="bg-zinc-50 min-h-[640px]">
      {/* Nav */}
      <nav className="bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-11 flex items-center gap-6">
          <span className="text-sm font-semibold text-zinc-900 cursor-pointer">Timeline</span>
          <span className="text-sm font-semibold text-zinc-400 hover:text-zinc-700 cursor-pointer transition-colors">People</span>
          <span className="text-sm font-semibold text-zinc-400 hover:text-zinc-700 cursor-pointer transition-colors">Reading Plan</span>
          <span className="text-sm font-semibold text-zinc-400 hover:text-zinc-700 cursor-pointer transition-colors">References</span>
        </div>
      </nav>

      {/* Hero — subtle gradient */}
      <header
        className="border-b border-zinc-100 px-4 py-10 text-center"
        style={{ background: "linear-gradient(to bottom, #ffffff, #f4f4f5)" }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-2">
          From Creation to the New Covenant
        </p>
        <h1 className="text-4xl font-bold text-zinc-900 mb-3">
          The Biblical Timeline
        </h1>
        <p className="text-zinc-500 text-sm max-w-xl mx-auto leading-relaxed">
          Select a period below to explore the events, differing scholarly
          views, and world context of God&apos;s sovereign history.
        </p>
      </header>

      {/* Timeline bar */}
      <div className="bg-white border-b border-zinc-100 py-6 shadow-sm">
        <div className="overflow-x-auto">
          <div className="min-w-max px-8 mx-auto">
            <div className="relative flex">
              <div className="absolute h-px bg-zinc-200 top-2.5 left-12 right-12 z-0" />
              {[
                { label: "Creation", active: true },
                { label: "Pre-Flood", active: false },
                { label: "Patriarchs", active: false },
                { label: "Exodus", active: false },
                { label: "Judges", active: false },
                { label: "Kingdom", active: false },
                { label: "Divided", active: false },
                { label: "Exile", active: false },
              ].map(({ label, active }) => (
                <div key={label} className="relative z-10 flex-none w-24 flex flex-col items-center group cursor-pointer">
                  <div className="h-5 flex items-center justify-center">
                    <div className={`rounded-full border-2 border-white transition-all duration-200 ${active ? "w-5 h-5 bg-amber-500 shadow-md" : "w-3.5 h-3.5 bg-zinc-300 group-hover:w-4 group-hover:h-4 group-hover:bg-zinc-400"}`} />
                  </div>
                  <span className={`mt-2 text-xs font-semibold text-center leading-tight transition-colors ${active ? "text-amber-600" : "text-zinc-500 group-hover:text-zinc-700"}`}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sample card */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <div className="bg-white border border-zinc-100 rounded-xl overflow-hidden shadow-sm">
          <div className="h-1 bg-amber-500" />
          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">Creation Period</span>
              <span className="text-xs text-zinc-400 font-mono">~4004 BC</span>
            </div>
            <h2 className="text-xl font-bold text-zinc-900 mb-2">The Creation of the World</h2>
            <p className="text-zinc-600 text-sm leading-relaxed mb-3">
              God creates the heavens and the earth in six days, establishing the foundation of all existence
              and mankind&apos;s role as image-bearers and stewards of creation.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="text-xs text-amber-600 font-medium hover:text-amber-800 cursor-pointer">Genesis 1:1–2:3</span>
              <span className="text-xs text-amber-600 font-medium hover:text-amber-800 cursor-pointer">John 1:1–3</span>
              <span className="text-xs text-amber-600 font-medium hover:text-amber-800 cursor-pointer">Colossians 1:16</span>
            </div>
          </div>
        </div>

        {/* World context section */}
        <div className="bg-white border border-zinc-100 rounded-xl overflow-hidden shadow-sm">
          <div className="p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-3">World Context</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Contemporary ancient near-eastern creation accounts (Enuma Elish, Atrahasis) share surface similarities
              but contrast sharply in theology — one God, one purposeful creation, one dignified humanity.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-100 mt-8">
        <div className="max-w-2xl mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-zinc-200" />
            <span className="text-zinc-300 text-xs">✦</span>
            <div className="h-px w-12 bg-zinc-200" />
          </div>
          <p className="text-sm font-semibold text-zinc-800 mb-1">Micah Stevenson</p>
          <p className="text-xs text-zinc-500 mb-4">Built out of a love for God&apos;s Word.</p>
          <p className="text-[10px] text-zinc-400">Created 2026 · The Biblical Timeline</p>
        </div>
      </footer>
    </div>
  )
}

// ─── Preview Page Shell ───────────────────────────────────────────────────────

const tabs: { id: Option; label: string; sub: string }[] = [
  { id: "A", label: "A — Warm Parchment", sub: "Stone + amber · earthy & historical" },
  { id: "B", label: "B — Dark Scholarly", sub: "Slate + gold · dramatic & immersive" },
  { id: "C", label: "C — Elevated Light", sub: "Zinc + white · clean & refined" },
]

export default function PreviewPage() {
  const [active, setActive] = useState<Option>("A")

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Preview chrome */}
      <div className="bg-neutral-900 px-4 py-3 flex items-center justify-between">
        <span className="text-xs text-neutral-400 font-mono">/preview · visual theme comparison</span>
        <a href="/" className="text-xs text-neutral-400 hover:text-white transition-colors">← back to app</a>
      </div>

      {/* Tab switcher */}
      <div className="bg-neutral-800 border-b border-neutral-700 px-4">
        <div className="flex gap-1 pt-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2.5 rounded-t-lg text-sm font-medium transition-all cursor-pointer ${
                active === tab.id
                  ? "bg-neutral-100 text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700"
              }`}
            >
              <span className="block">{tab.label}</span>
              <span className={`block text-[10px] font-normal mt-0.5 ${active === tab.id ? "text-neutral-500" : "text-neutral-600"}`}>
                {tab.sub}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Live preview */}
      <div className="border border-neutral-300">
        {active === "A" && <WarmParchment />}
        {active === "B" && <DarkScholarly />}
        {active === "C" && <ElevatedLight />}
      </div>
    </div>
  )
}
