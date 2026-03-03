import { Period } from "@/data/periods"
import { TimelineEvent } from "@/types/timeline"

function formatFirstDate(event: TimelineEvent): string {
  const opt = event.dateOptions[0]
  if (!opt) return ""
  if (opt.yearBC) return `${opt.yearBC} BC`
  if (opt.yearAD) return `${opt.yearAD} AD`
  if (opt.rangeBC) return `~${opt.rangeBC[1].toLocaleString()} BC`
  return ""
}

interface EventTileProps {
  event: TimelineEvent
  accentClass: string
  badgeClass: string
  onClick: () => void
}

function EventTile({ event, accentClass, badgeClass, onClick }: EventTileProps) {
  const date = formatFirstDate(event)
  return (
    <button
      onClick={onClick}
      className="flex-none w-56 rounded-xl border border-stone-200 bg-white shadow-sm text-left hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-stone-300"
    >
      <div className={`h-1 w-full ${accentClass}`} />
      <div className="p-4">
        {date && (
          <span className="text-[10px] text-stone-400 font-mono mb-1 block">
            {date}
          </span>
        )}
        <h3 className="font-semibold text-sm text-stone-900 leading-tight mb-2">
          {event.title}
        </h3>
        <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
          {event.summary}
        </p>
        <span
          className={`mt-3 inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${badgeClass}`}
        >
          View details →
        </span>
      </div>
    </button>
  )
}

interface PeriodPanelProps {
  period: Period
  events: TimelineEvent[]
  onSelectEvent: (id: string) => void
  onBack: () => void
}

export default function PeriodPanel({
  period,
  events,
  onSelectEvent,
  onBack,
}: PeriodPanelProps) {
  return (
    <div className={`border-b ${period.color.border} ${period.color.panel}`}>
      {/* Period header */}
      <div className="max-w-6xl mx-auto px-6 pt-5 pb-4">
        <button
          onClick={onBack}
          className="mb-3 text-xs text-stone-400 hover:text-stone-700 font-medium transition-colors flex items-center gap-1"
        >
          ← All Periods
        </button>
        <div className="flex items-start gap-3">
          <div
            className={`w-1 self-stretch rounded-full shrink-0 ${period.color.accent}`}
          />
          <div>
            <h2 className={`text-lg font-bold ${period.color.text}`}>
              {period.label}
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
              {period.description}
            </p>
            <p className="text-xs text-stone-400 font-mono mt-1">
              {period.approximateDateLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Event tiles */}
      <div className="max-w-6xl mx-auto px-6 pb-6">
        {events.length > 0 ? (
          <div className="overflow-x-auto pb-1">
            <div className="flex gap-4 min-w-max">
              {events.map((event) => (
                <EventTile
                  key={event.id}
                  event={event}
                  accentClass={period.color.accent}
                  badgeClass={period.color.badge}
                  onClick={() => onSelectEvent(event.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-stone-400 italic py-2">
            No events have been added for this period yet.
          </p>
        )}
      </div>
    </div>
  )
}
