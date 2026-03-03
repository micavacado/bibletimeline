import { events } from "@/data/events"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import EventPageClient from "./EventPageClient"

export function generateStaticParams() {
  return events.map((e) => ({ id: e.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) return {}

  const description = event.summary.slice(0, 160).trimEnd() + (event.summary.length > 160 ? "…" : "")
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bibletimeline.app"
  const url = `${siteUrl}/events/${event.id}`

  return {
    title: `${event.title} — The Biblical Timeline`,
    description,
    openGraph: {
      title: event.title,
      description,
      url,
      siteName: "The Biblical Timeline",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: event.title,
      description,
    },
  }
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = events.find((e) => e.id === id)
  if (!event) notFound()

  return <EventPageClient event={event} />
}
