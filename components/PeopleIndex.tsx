"use client"

import { useState } from "react"
import { BiblicalPerson, BiblicalPeriod } from "@/types/timeline"
import { periods } from "@/data/periods"

const PERIOD_ORDER: BiblicalPeriod[] = [
  "creation",
  "pre-flood",
  "post-flood-patriarchs",
  "exodus-conquest",
  "judges",
  "united-kingdom",
  "divided-kingdom",
  "exile",
  "return",
  "intertestamental",
  "new-testament",
  "second-coming",
]

interface PeopleIndexProps {
  people: BiblicalPerson[]
}

export default function PeopleIndex({ people }: PeopleIndexProps) {
  const [activePeriod, setActivePeriod] = useState<BiblicalPeriod | "all">("all")

  // Only include periods that have at least one person
  const periodsWithPeople = PERIOD_ORDER.filter((pid) =>
    people.some((p) => p.period === pid)
  )

  const filtered =
    activePeriod === "all"
      ? people
      : people.filter((p) => p.period === activePeriod)

  // Sort filtered people by the period order they belong to
  const sorted = [...filtered].sort(
    (a, b) => PERIOD_ORDER.indexOf(a.period) - PERIOD_ORDER.indexOf(b.period)
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Period filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActivePeriod("all")}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
            activePeriod === "all"
              ? "bg-stone-800 text-white"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          All ({people.length})
        </button>
        {periodsWithPeople.map((pid) => {
          const period = periods.find((p) => p.id === pid)
          if (!period) return null
          const count = people.filter((p) => p.period === pid).length
          const isActive = activePeriod === pid
          return (
            <button
              key={pid}
              onClick={() => setActivePeriod(pid)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                isActive
                  ? `${period.color.dot} text-white`
                  : `${period.color.badge} hover:opacity-80`
              }`}
            >
              {period.shortLabel} ({count})
            </button>
          )
        })}
      </div>

      {/* Person cards grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {sorted.map((person) => {
          const period = periods.find((p) => p.id === person.period)
          return (
            <div
              key={person.id}
              className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Period accent bar */}
              {period && (
                <div className={`h-1 w-full ${period.color.accent}`} />
              )}
              <div className="p-5">
                {/* Name + period badge */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-base font-bold text-stone-900">
                    {person.name}
                  </span>
                  {period && (
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${period.color.badge}`}
                    >
                      {period.shortLabel}
                    </span>
                  )}
                </div>

                {/* Role */}
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-2">
                  {person.role}
                </p>

                {/* Summary */}
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  {person.summary}
                </p>

                {/* Key facts */}
                {person.keyFacts.length > 0 && (
                  <ul className="mb-3 space-y-1">
                    {person.keyFacts.map((fact, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-xs text-stone-600"
                      >
                        <span className="text-stone-300 font-bold mt-px shrink-0">
                          •
                        </span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Scripture references */}
                {person.scriptures.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {person.scriptures.map((ref) => (
                      <span
                        key={ref}
                        className="rounded border border-stone-200 bg-stone-50 px-1.5 py-0.5 text-xs text-stone-600 font-mono"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {sorted.length === 0 && (
        <p className="text-center text-stone-400 text-sm py-16">
          No people found for this period.
        </p>
      )}
    </div>
  )
}
