"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { BiblicalPeriod, TimelineEvent } from "@/types/timeline"
import { people } from "@/data/people"
import { periods } from "@/data/periods"

type ResultType = "event" | "subevent" | "person"

interface SearchResult {
  type: ResultType
  id: string
  title: string
  subtitle: string
  period: BiblicalPeriod
  excerpt: string
  parentId?: string
}

function hits(query: string, fields: string[]): boolean {
  const q = query.toLowerCase()
  return fields.some((f) => f.toLowerCase().includes(q))
}

interface SearchResultsProps {
  query: string
  events: TimelineEvent[]
  onSelectEvent: (eventId: string) => void
  onSelectSubEvent: (eventId: string, subEventId: string) => void
}

export default function SearchResults({
  query,
  events,
  onSelectEvent,
  onSelectSubEvent,
}: SearchResultsProps) {
  const [filterPeriod, setFilterPeriod] = useState<BiblicalPeriod | "all">("all")

  useEffect(() => {
    setFilterPeriod("all")
  }, [query])

  const allResults = useMemo((): SearchResult[] => {
    const q = query.trim()
    if (!q) return []

    const results: SearchResult[] = []

    for (const event of events) {
      if (hits(q, [event.title, event.summary, ...event.tags, ...event.scriptures])) {
        results.push({
          type: "event",
          id: event.id,
          title: event.title,
          subtitle: periods.find((p) => p.id === event.period)?.label ?? event.period,
          period: event.period,
          excerpt: event.summary,
        })
      }

      for (const sub of event.subEvents ?? []) {
        if (hits(q, [sub.title, sub.summary, ...sub.scriptures])) {
          results.push({
            type: "subevent",
            id: sub.id,
            title: sub.title,
            subtitle: event.title,
            period: event.period,
            excerpt: sub.summary,
            parentId: event.id,
          })
        }
      }
    }

    for (const person of people) {
      if (
        hits(q, [person.name, person.role, person.summary, ...person.keyFacts, ...person.scriptures])
      ) {
        results.push({
          type: "person",
          id: person.id,
          title: person.name,
          subtitle: person.role,
          period: person.period,
          excerpt: person.summary,
        })
      }
    }

    return results
  }, [query, events])

  const resultPeriods = useMemo(() => {
    const seen = new Set<BiblicalPeriod>()
    const ordered: BiblicalPeriod[] = []
    for (const r of allResults) {
      if (!seen.has(r.period)) {
        seen.add(r.period)
        ordered.push(r.period)
      }
    }
    return ordered
  }, [allResults])

  const filtered =
    filterPeriod === "all"
      ? allResults
      : allResults.filter((r) => r.period === filterPeriod)

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Result count + period filter */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="text-sm text-stone-400 mr-1">
          {allResults.length} result{allResults.length !== 1 ? "s" : ""}
        </span>

        {resultPeriods.length > 1 && (
          <>
            <button
              onClick={() => setFilterPeriod("all")}
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors ${
                filterPeriod === "all"
                  ? "bg-stone-800 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              All
            </button>
            {resultPeriods.map((pid) => {
              const period = periods.find((p) => p.id === pid)
              if (!period) return null
              const isActive = filterPeriod === pid
              return (
                <button
                  key={pid}
                  onClick={() => setFilterPeriod(pid)}
                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors ${
                    isActive
                      ? `${period.color.dot} text-white`
                      : `${period.color.badge} hover:opacity-80`
                  }`}
                >
                  {period.shortLabel}
                </button>
              )
            })}
          </>
        )}
      </div>

      {/* Empty states */}
      {allResults.length === 0 && (
        <p className="text-sm text-stone-400 text-center py-8">
          No results for &ldquo;{query}&rdquo;
        </p>
      )}
      {allResults.length > 0 && filtered.length === 0 && (
        <p className="text-sm text-stone-400">No results in this period.</p>
      )}

      {/* Results */}
      <div className="space-y-3">
        {filtered.map((result, i) => {
          const period = periods.find((p) => p.id === result.period)

          if (result.type === "person") {
            return (
              <Link
                key={`person-${result.id}-${i}`}
                href="/people"
                className="block rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="h-1 w-full bg-emerald-400" />
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-stone-900">
                      {result.title}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                      Person
                    </span>
                    {period && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${period.color.badge}`}
                      >
                        {period.shortLabel}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-stone-500 mb-1.5">{result.subtitle}</p>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {result.excerpt}
                  </p>
                </div>
              </Link>
            )
          }

          if (result.type === "subevent") {
            return (
              <button
                key={`subevent-${result.id}-${i}`}
                onClick={() => onSelectSubEvent(result.parentId!, result.id)}
                className="w-full text-left rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {period && <div className={`h-1 w-full ${period.color.accent}`} />}
                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-stone-900">
                      {result.title}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${period?.color.badge ?? "bg-stone-100 text-stone-600"}`}
                    >
                      Sub-event
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mb-1.5">In: {result.subtitle}</p>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {result.excerpt}
                  </p>
                </div>
              </button>
            )
          }

          return (
            <button
              key={`event-${result.id}-${i}`}
              onClick={() => onSelectEvent(result.id)}
              className="w-full text-left rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {period && <div className={`h-1 w-full ${period.color.accent}`} />}
              <div className="p-4">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-stone-900">
                    {result.title}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${period?.color.badge ?? "bg-stone-100 text-stone-600"}`}
                  >
                    Event
                  </span>
                </div>
                <p className="text-xs text-stone-500 mb-1.5">{result.subtitle}</p>
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                  {result.excerpt}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
