"use client"

import { useState, useEffect } from "react"
import { events } from "@/data/events"
import { periods } from "@/data/periods"
import { createClient } from "@/lib/supabase"
import { getSessionId } from "@/lib/session"
import ScriptureRef from "./ScriptureRef"

async function getIdentifier() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user ? { type: "user" as const, id: user.id } : { type: "session" as const, id: getSessionId() }
}

export default function ReadingPlan() {
  const [completed, setCompleted] = useState<Set<string>>(new Set())
  const [toggling, setToggling] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProgress() {
      const supabase = createClient()
      const ident = await getIdentifier()

      const { data } = await supabase
        .from("reading_progress")
        .select("event_id")
        .eq(ident.type === "user" ? "user_id" : "session_id", ident.id)

      setCompleted(new Set((data ?? []).map((r) => r.event_id)))
      setLoading(false)
    }
    loadProgress()
  }, [])

  async function toggleEvent(eventId: string) {
    if (toggling.has(eventId)) return
    setToggling((prev) => new Set(prev).add(eventId))

    const supabase = createClient()
    const ident = await getIdentifier()
    const isCompleted = completed.has(eventId)

    if (isCompleted) {
      await supabase
        .from("reading_progress")
        .delete()
        .eq("event_id", eventId)
        .eq(ident.type === "user" ? "user_id" : "session_id", ident.id)

      setCompleted((prev) => {
        const next = new Set(prev)
        next.delete(eventId)
        return next
      })
    } else {
      await supabase
        .from("reading_progress")
        .insert(
          ident.type === "user"
            ? { event_id: eventId, user_id: ident.id }
            : { event_id: eventId, session_id: ident.id }
        )

      setCompleted((prev) => new Set(prev).add(eventId))
    }

    setToggling((prev) => {
      const next = new Set(prev)
      next.delete(eventId)
      return next
    })
  }

  async function resetAll() {
    const supabase = createClient()
    const ident = await getIdentifier()

    await supabase
      .from("reading_progress")
      .delete()
      .eq(ident.type === "user" ? "user_id" : "session_id", ident.id)

    setCompleted(new Set())
  }

  const totalEvents = events.length
  const totalCompleted = completed.size

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">

      {/* Overall progress */}
      <div className="mb-6 bg-white rounded-xl border border-stone-200 shadow-sm p-5">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-sm font-semibold text-stone-700">Overall Progress</span>
          <span className="text-sm font-mono text-stone-500">
            {totalCompleted} / {totalEvents}
          </span>
        </div>
        <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${totalEvents > 0 ? (totalCompleted / totalEvents) * 100 : 0}%` }}
          />
        </div>
        {totalCompleted > 0 && (
          <button
            onClick={resetAll}
            className="mt-3 text-xs text-stone-400 hover:text-red-500 font-medium transition-colors"
          >
            Reset all progress
          </button>
        )}
      </div>

      {/* Period sections */}
      <div className="space-y-5">
        {periods.map((period) => {
          const periodEvents = events.filter((e) => e.period === period.id)
          if (periodEvents.length === 0) return null

          const periodCompleted = periodEvents.filter((e) => completed.has(e.id)).length
          const periodTotal = periodEvents.length
          const progressPct = (periodCompleted / periodTotal) * 100

          return (
            <div
              key={period.id}
              className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Period header */}
              <div className={`${period.color.panel} border-b ${period.color.border} px-5 py-3.5`}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <h2 className={`text-sm font-bold ${period.color.text}`}>
                    {period.label}
                  </h2>
                  <span className="text-xs text-stone-500 font-mono">
                    {periodCompleted}/{periodTotal}
                  </span>
                </div>
                {/* Period progress bar */}
                <div className="h-1 bg-black/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${period.color.accent} rounded-full transition-all duration-300`}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              </div>

              {/* Events list */}
              <div className="divide-y divide-stone-100">
                {periodEvents.map((event) => {
                  const done = completed.has(event.id)
                  const busy = toggling.has(event.id)

                  return (
                    <div
                      key={event.id}
                      className={`flex items-start gap-3 px-5 py-4 transition-colors ${
                        done ? "bg-stone-50/60" : "bg-white"
                      }`}
                    >
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleEvent(event.id)}
                        disabled={busy || loading}
                        className="mt-0.5 shrink-0 focus:outline-none disabled:opacity-50"
                        aria-label={done ? "Mark unread" : "Mark as read"}
                      >
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                          done
                            ? `${period.color.accent} border-transparent`
                            : "border-stone-300 hover:border-stone-400"
                        }`}>
                          {done && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                              <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </button>

                      {/* Event info */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold mb-1.5 transition-colors ${
                          done ? "text-stone-400 line-through" : "text-stone-800"
                        }`}>
                          {event.title}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {event.scriptures.map((ref) => (
                            <ScriptureRef
                              key={ref}
                              reference={ref}
                              className={`rounded border px-1.5 py-0.5 text-xs font-mono transition-colors ${
                                done
                                  ? "border-stone-100 bg-stone-50 text-stone-300"
                                  : "border-stone-200 bg-stone-50 text-stone-500 hover:bg-stone-100"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
