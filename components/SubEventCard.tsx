import { SubEvent, BiblicalPeriod } from "@/types/timeline"
import { getPersonById } from "@/data/people"
import NoteSection from "./NoteSection"
import PersonCard from "./PersonCard"
import ScriptureRef from "./ScriptureRef"

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
  "new-testament": "bg-green-100 text-green-800",
  "second-coming": "bg-yellow-100 text-yellow-800",
}

interface SubEventCardProps {
  subEvent: SubEvent
  period: BiblicalPeriod
  parentTitle: string
}

export default function SubEventCard({
  subEvent,
  period,
  parentTitle,
}: SubEventCardProps) {
  const people = (subEvent.keyPeople ?? [])
    .map((id) => getPersonById(id))
    .filter(Boolean)

  return (
    <div className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden mb-8">
      {/* Top accent bar */}
      <div className={`h-1 w-full ${PERIOD_ACCENT[period]}`} />

      {/* Card content */}
      <div className="p-6">
        {/* Parent event label */}
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold mb-3 ${PERIOD_BADGE[period]}`}
        >
          {parentTitle}
        </span>

        <h2 className="text-xl font-semibold text-stone-900 mb-2">
          {subEvent.title}
        </h2>
        <p className="text-sm text-stone-600 leading-relaxed mb-5">
          {subEvent.summary}
        </p>

        {/* Scripture References */}
        {subEvent.scriptures.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-2">
              Scripture
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {subEvent.scriptures.map((ref) => (
                <ScriptureRef
                  key={ref}
                  reference={ref}
                  className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-700 font-mono hover:bg-stone-200 transition-colors"
                />
              ))}
            </div>
          </div>
        )}

        {/* Key People */}
        {people.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              Key People
            </h3>
            <div className="space-y-3">
              {people.map((person) => (
                <PersonCard key={person!.id} person={person!} />
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        <NoteSection eventId={subEvent.id} />
      </div>
    </div>
  )
}
