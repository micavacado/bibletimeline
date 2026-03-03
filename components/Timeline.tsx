import { events } from "@/data/events"
import EventCard from "./EventCard"

export default function Timeline() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
