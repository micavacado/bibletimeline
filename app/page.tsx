import { events } from "@/data/events"
import TimelineExplorer from "@/components/TimelineExplorer"

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-amber-50/60 border-b border-stone-100 px-4 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
          From Creation to the New Covenant
        </p>
        <h1 className="text-4xl font-bold text-stone-900 mb-2">
          The Biblical Timeline
        </h1>
        <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
          Select a period below to explore the events, differing scholarly
          views, and world context of God&apos;s sovereign history.
        </p>
      </header>
      <TimelineExplorer events={events} />
    </main>
  )
}
