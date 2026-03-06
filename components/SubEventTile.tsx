import { SubEvent, BiblicalPeriod } from "@/types/timeline"

const PERIOD_ACCENT: Record<BiblicalPeriod, string> = {
  creation: "bg-amber-400",
  "pre-flood": "bg-orange-400",
  "post-flood-patriarchs": "bg-yellow-500",
  "exodus-conquest": "bg-red-400",
  judges: "bg-rose-400",
  "united-kingdom": "bg-purple-400",
  "divided-kingdom": "bg-indigo-400",
  exile: "bg-blue-400",
  return: "bg-cyan-400",
  intertestamental: "bg-teal-400",
  "jesus-ministry": "bg-sky-400",
  "new-testament": "bg-green-400",
  "second-coming": "bg-yellow-400",
}

const PERIOD_BADGE: Record<BiblicalPeriod, string> = {
  creation: "bg-amber-100 text-amber-800",
  "pre-flood": "bg-orange-100 text-orange-800",
  "post-flood-patriarchs": "bg-yellow-100 text-yellow-800",
  "exodus-conquest": "bg-red-100 text-red-800",
  judges: "bg-rose-100 text-rose-800",
  "united-kingdom": "bg-purple-100 text-purple-800",
  "divided-kingdom": "bg-indigo-100 text-indigo-800",
  exile: "bg-blue-100 text-blue-800",
  return: "bg-cyan-100 text-cyan-800",
  intertestamental: "bg-teal-100 text-teal-800",
  "jesus-ministry": "bg-sky-100 text-sky-800",
  "new-testament": "bg-green-100 text-green-800",
  "second-coming": "bg-yellow-100 text-yellow-800",
}

interface SubEventTileProps {
  subEvent: SubEvent
  period: BiblicalPeriod
  index: number
  onClick: () => void
}

export default function SubEventTile({
  subEvent,
  period,
  index,
  onClick,
}: SubEventTileProps) {
  return (
    <button
      onClick={onClick}
      className="flex-none w-56 rounded-xl border border-stone-200 bg-white shadow-sm text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-stone-300"
    >
      <div className={`h-1 w-full ${PERIOD_ACCENT[period]}`} />
      <div className="p-4">
        <span className="text-[10px] text-stone-400 font-mono mb-1 block">
          {index + 1}
        </span>
        <h3 className="font-semibold text-sm text-stone-900 leading-tight mb-2">
          {subEvent.title}
        </h3>
        <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
          {subEvent.summary}
        </p>
        <span
          className={`mt-3 inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${PERIOD_BADGE[period]}`}
        >
          Explore →
        </span>
      </div>
    </button>
  )
}
