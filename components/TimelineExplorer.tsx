"use client"

import { useState } from "react"
import { BiblicalPeriod, TimelineEvent } from "@/types/timeline"
import { periods } from "@/data/periods"
import TimelineBar from "./TimelineBar"
import PeriodPanel from "./PeriodPanel"
import EventCard from "./EventCard"
import SubEventCard from "./SubEventCard"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

interface TimelineExplorerProps {
  events: TimelineEvent[]
}

export default function TimelineExplorer({ events }: TimelineExplorerProps) {
  const [activePeriodId, setActivePeriodId] = useState<BiblicalPeriod | null>(null)
  const [activeEventId, setActiveEventId] = useState<string | null>(null)
  const [activeSubEventId, setActiveSubEventId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const activePeriod = activePeriodId
    ? periods.find((p) => p.id === activePeriodId)
    : null
  const periodEvents = activePeriodId
    ? events.filter((e) => e.period === activePeriodId)
    : []
  const activeEvent = activeEventId
    ? events.find((e) => e.id === activeEventId)
    : null
  const activeSubEvent =
    activeEvent && activeSubEventId
      ? (activeEvent.subEvents ?? []).find((s) => s.id === activeSubEventId)
      : null

  const isSearching = searchQuery.trim().length > 0

  function handleSelectPeriod(id: BiblicalPeriod) {
    setActivePeriodId(id)
    setActiveEventId(null)
    setActiveSubEventId(null)
  }

  function handleSelectEvent(id: string) {
    setActiveEventId(id)
    setActiveSubEventId(null)
  }

  function handleSelectSubEvent(id: string) {
    setActiveSubEventId(id)
  }

  function handleBackToAll() {
    setActivePeriodId(null)
    setActiveEventId(null)
    setActiveSubEventId(null)
  }

  function handleBackToPeriod() {
    setActiveEventId(null)
    setActiveSubEventId(null)
  }

  function handleBackToEvent() {
    setActiveSubEventId(null)
  }

  function handleSelectRelatedEvent(eventId: string) {
    const event = events.find((e) => e.id === eventId)
    if (!event) return
    setActivePeriodId(event.period)
    setActiveEventId(eventId)
    setActiveSubEventId(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function handleSelectEventFromSearch(eventId: string) {
    const event = events.find((e) => e.id === eventId)
    if (!event) return
    setActivePeriodId(event.period)
    setActiveEventId(eventId)
    setActiveSubEventId(null)
    setSearchQuery("")
  }

  function handleSelectSubEventFromSearch(eventId: string, subEventId: string) {
    const event = events.find((e) => e.id === eventId)
    if (!event) return
    setActivePeriodId(event.period)
    setActiveEventId(eventId)
    setActiveSubEventId(subEventId)
    setSearchQuery("")
  }

  return (
    <div>
      {/* Search bar — always visible */}
      <div className="max-w-2xl mx-auto px-4 pt-5 pb-3">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* ── Search mode ── */}
      {isSearching && (
        <SearchResults
          query={searchQuery}
          events={events}
          onSelectEvent={handleSelectEventFromSearch}
          onSelectSubEvent={handleSelectSubEventFromSearch}
        />
      )}

      {/* ── Normal timeline flow ── */}
      {!isSearching && (
        <>
          <TimelineBar
            activePeriod={activePeriodId}
            onSelectPeriod={handleSelectPeriod}
          />

          {/* Level 1 — Period panel with event tiles */}
          {activePeriod && !activeEvent && (
            <PeriodPanel
              period={activePeriod}
              events={periodEvents}
              onSelectEvent={handleSelectEvent}
              onBack={handleBackToAll}
            />
          )}

          {/* Level 2 — Event detail with sub-event tiles */}
          {activeEvent && activePeriod && !activeSubEvent && (
            <div className="max-w-2xl mx-auto px-4 py-6">
              <button
                onClick={handleBackToPeriod}
                className="mb-4 text-sm text-stone-400 hover:text-stone-700 font-medium transition-colors flex items-center gap-1"
              >
                ← Back to {activePeriod.label}
              </button>
              <EventCard
                event={activeEvent}
                onSelectSubEvent={handleSelectSubEvent}
                onSelectRelatedEvent={handleSelectRelatedEvent}
              />
            </div>
          )}

          {/* Level 3 — Sub-event detail */}
          {activeSubEvent && activeEvent && activePeriod && (
            <div className="max-w-2xl mx-auto px-4 py-6">
              <button
                onClick={handleBackToEvent}
                className="mb-4 text-sm text-stone-400 hover:text-stone-700 font-medium transition-colors flex items-center gap-1"
              >
                ← Back to {activeEvent.title}
              </button>
              <SubEventCard
                subEvent={activeSubEvent}
                period={activePeriod.id}
                parentTitle={activeEvent.title}
              />
            </div>
          )}

          {/* Welcome state */}
          {!activePeriodId && (
            <div className="max-w-xl mx-auto px-4 py-16 text-center">
              <p className="text-2xl mb-3">✦</p>
              <h2 className="text-lg font-semibold text-stone-700 mb-2">
                Explore God&apos;s Redemptive History
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed mb-6">
                Twelve periods from Creation to the Return of Christ — each with events, scholarly dates, world context, and connections to the gospel.
              </p>
              <p className="text-xs text-stone-400 font-medium uppercase tracking-widest">
                Select a period above to begin
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
