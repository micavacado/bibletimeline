"use client"

import { useRouter } from "next/navigation"
import EventCard from "@/components/EventCard"
import ShareButton from "@/components/ShareButton"
import type { TimelineEvent } from "@/types/timeline"

export default function EventPageClient({ event }: { event: TimelineEvent }) {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Back + Share row */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => router.back()}
            className="text-sm font-medium text-stone-500 hover:text-stone-800 transition-colors"
          >
            ← Back
          </button>
          <ShareButton eventId={event.id} />
        </div>

        <EventCard
          event={event}
          onSelectRelatedEvent={(id) => router.push(`/events/${id}`)}
        />
      </div>
    </main>
  )
}
