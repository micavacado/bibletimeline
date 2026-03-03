import { TimelineEvent, BiblicalPeriod } from "@/types/timeline"
import { getPersonById } from "@/data/people"
import { events as allEvents } from "@/data/events"
import { periods } from "@/data/periods"
import NoteSection from "./NoteSection"
import SuggestEditForm from "./SuggestEditForm"
import SubEventTile from "./SubEventTile"
import PersonCard from "./PersonCard"
import ScriptureRef from "./ScriptureRef"
import ShareButton from "./ShareButton"

const PERIOD_LABELS: Record<BiblicalPeriod, string> = {
  creation: "Creation",
  "pre-flood": "Pre-Flood",
  "post-flood-patriarchs": "Post-Flood & Patriarchs",
  "exodus-conquest": "Exodus & Conquest",
  judges: "Period of the Judges",
  "united-kingdom": "United Kingdom",
  "divided-kingdom": "Divided Kingdom",
  exile: "Exile",
  return: "Return from Exile",
  intertestamental: "Intertestamental Period",
  "new-testament": "New Testament Era",
  "second-coming": "The Return of Christ",
}

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

function formatDate(option: TimelineEvent["dateOptions"][0]): string {
  if (option.yearBC) return `${option.yearBC} BC`
  if (option.yearAD) return `${option.yearAD} AD`
  if (option.rangeBC)
    return `~${option.rangeBC[0].toLocaleString()}–${option.rangeBC[1].toLocaleString()} BC`
  if (option.rangeAD)
    return `AD ${option.rangeAD[0].toLocaleString()}–${option.rangeAD[1].toLocaleString()}`
  return ""
}

interface EventCardProps {
  event: TimelineEvent
  onSelectSubEvent?: (id: string) => void
  onSelectRelatedEvent?: (id: string) => void
}

export default function EventCard({ event, onSelectSubEvent, onSelectRelatedEvent }: EventCardProps) {
  const hasSubEvents =
    onSelectSubEvent && event.subEvents && event.subEvents.length > 0
  const keyPeople = (event.keyPeople ?? [])
    .map((id) => getPersonById(id))
    .filter(Boolean)

  return (
    <div className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden mb-8">
      {/* Top accent bar */}
      <div className={`h-1 w-full ${PERIOD_ACCENT[event.period]}`} />

      {/* Card content */}
      <div className="p-6">
        {/* Period badge + share */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${PERIOD_BADGE[event.period]}`}
          >
            {PERIOD_LABELS[event.period]}
          </span>
          <ShareButton eventId={event.id} />
        </div>
        <h2 className="text-xl font-semibold text-stone-900 mb-2">
          {event.title}
        </h2>
        <p className="text-sm text-stone-600 leading-relaxed mb-5">
          {event.summary}
        </p>

        {/* Scripture References */}
        <div className="mb-5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-2">
            Scripture
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {event.scriptures.map((ref) => (
              <ScriptureRef
                key={ref}
                reference={ref}
                className="rounded bg-stone-100 px-2 py-0.5 text-xs text-stone-700 font-mono hover:bg-stone-200 transition-colors"
              />
            ))}
          </div>
        </div>

        {/* Key Moments — horizontal sub-event tiles */}
        {hasSubEvents && (
          <div className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-1">
              Key Moments
            </h3>
            <p className="text-[11px] text-stone-400 mb-3">
              Select a moment to explore in detail
            </p>
            <div className="overflow-x-auto pb-2 -mx-6 px-6">
              <div className="flex gap-4 min-w-max">
                {event.subEvents!.map((sub, i) => (
                  <SubEventTile
                    key={sub.id}
                    subEvent={sub}
                    period={event.period}
                    index={i}
                    onClick={() => onSelectSubEvent!(sub.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Date Options */}
        <div className="mb-5">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-3">
            Scholarly Date Estimates
          </h3>
          <div className="space-y-3">
            {event.dateOptions.map((option) => (
              <div
                key={option.label}
                className="rounded-lg border border-stone-100 bg-stone-50 p-3"
              >
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1.5">
                  <span className="font-semibold text-sm text-stone-800">
                    {option.label}
                  </span>
                  {formatDate(option) && (
                    <span className="text-xs text-stone-500 font-mono">
                      {formatDate(option)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-2">
                  {option.reasoning}
                </p>
                {option.scriptureSupport.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {option.scriptureSupport.map((ref) => (
                      <ScriptureRef
                        key={ref}
                        reference={ref}
                        className="rounded border border-stone-200 bg-white px-1.5 py-0.5 text-xs text-stone-600 font-mono hover:bg-stone-50 transition-colors"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* World Context */}
        {event.worldContext.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-3">
              World Context
            </h3>
            <div className="space-y-2">
              {event.worldContext.map((ctx, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-blue-100 bg-blue-50 p-3"
                >
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                    <span className="text-sm font-semibold text-blue-900">
                      {ctx.title}
                    </span>
                    <span className="text-xs text-blue-500 font-mono">
                      {ctx.approximateYear}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-blue-600 mb-1">
                    {ctx.civilization}
                  </p>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    {ctx.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Typology */}
        {event.typology && event.typology.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-violet-500 mb-3">
              Typology — Points to Christ
            </h3>
            <div className="space-y-3">
              {event.typology.map((note, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-violet-100 bg-violet-50 p-3"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full">
                      {note.category}
                    </span>
                    <span className="text-sm font-semibold text-violet-900">
                      {note.title}
                    </span>
                  </div>
                  <p className="text-xs text-violet-900 leading-relaxed mb-2.5">
                    {note.description}
                  </p>
                  <div className="flex flex-wrap items-start gap-1.5 text-xs">
                    <ScriptureRef
                      reference={note.oldTestamentRef}
                      className="font-mono bg-white border border-violet-200 px-1.5 py-0.5 rounded text-violet-700 shrink-0 hover:bg-violet-50 transition-colors"
                    />
                    <span className="text-violet-400 font-bold shrink-0 mt-0.5">
                      →
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {note.newTestamentFulfillment.map((ref) => (
                        <ScriptureRef
                          key={ref}
                          reference={ref}
                          className="font-mono bg-white border border-violet-200 px-1.5 py-0.5 rounded text-violet-700 hover:bg-violet-50 transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key People */}
        {keyPeople.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-emerald-600 mb-3">
              Key People
            </h3>
            <div className="space-y-3">
              {keyPeople.map((person) => (
                <PersonCard key={person!.id} person={person!} />
              ))}
            </div>
          </div>
        )}

        {/* See Also — Cross-references */}
        {event.relatedEvents && event.relatedEvents.length > 0 && onSelectRelatedEvent && (
          <div className="mb-5">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-3">
              See Also
            </h3>
            <div className="space-y-2">
              {event.relatedEvents.map(({ eventId, note }) => {
                const related = allEvents.find((e) => e.id === eventId)
                if (!related) return null
                const period = periods.find((p) => p.id === related.period)
                return (
                  <button
                    key={eventId}
                    onClick={() => onSelectRelatedEvent(eventId)}
                    className="w-full text-left rounded-lg border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-sm p-3 transition-all duration-150"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {period && (
                        <div
                          className={`w-2 h-2 rounded-full shrink-0 ${period.color.dot}`}
                        />
                      )}
                      <span className="text-sm font-semibold text-stone-800">
                        {related.title}
                      </span>
                      {period && (
                        <span
                          className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${period.color.badge}`}
                        >
                          {period.shortLabel}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed pl-4">
                      {note}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Notes */}
        <NoteSection eventId={event.id} />

        {/* Suggest an edit */}
        <SuggestEditForm eventId={event.id} eventTitle={event.title} />
      </div>
    </div>
  )
}
