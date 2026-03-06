export type BiblicalPeriod =
  | "creation"
  | "pre-flood"
  | "post-flood-patriarchs"
  | "exodus-conquest"
  | "judges"
  | "united-kingdom"
  | "divided-kingdom"
  | "exile"
  | "return"
  | "intertestamental"
  | "jesus-ministry"
  | "new-testament"
  | "second-coming"

export interface DateOption {
  label: string
  yearBC?: number
  yearAD?: number
  rangeBC?: [number, number]
  rangeAD?: [number, number]
  scholars: string[]
  reasoning: string
  scriptureSupport: string[]
}

export interface WorldEvent {
  title: string
  approximateYear: string
  civilization: string
  notes: string
}

export type TypologyCategory =
  | "Person"
  | "Event"
  | "Institution"
  | "Object"
  | "Ritual"
  | "Fulfillment"
  | "Pattern"
  | "Doctrine"
  | "Recovery"

export interface TypologyNote {
  category: TypologyCategory
  title: string
  description: string
  oldTestamentRef: string
  newTestamentFulfillment: string[]
  scholars?: string[]
}

export interface SubEvent {
  id: string
  title: string
  summary: string
  scriptures: string[]
  keyPeople?: string[]
}

export interface BiblicalPerson {
  id: string
  name: string
  period: BiblicalPeriod
  role: string
  summary: string
  scriptures: string[]
  keyFacts: string[]
}

export interface CrossReference {
  eventId: string
  note: string
}

export interface TimelineEvent {
  id: string
  title: string
  period: BiblicalPeriod
  summary: string
  dateOptions: DateOption[]
  scriptures: string[]
  worldContext: WorldEvent[]
  typology?: TypologyNote[]
  subEvents?: SubEvent[]
  keyPeople?: string[]
  relatedEvents?: CrossReference[]
  tags: string[]
}
