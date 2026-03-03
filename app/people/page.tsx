import { people } from "@/data/people"
import PeopleIndex from "@/components/PeopleIndex"

export default function PeoplePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-amber-50/60 border-b border-stone-100 px-4 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2">
          The Biblical Narrative
        </p>
        <h1 className="text-4xl font-bold text-stone-900 mb-2">Key People</h1>
        <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
          The men and women God placed at the center of redemptive history.
          Filter by period or browse them all.
        </p>
      </header>
      <PeopleIndex people={people} />
    </main>
  )
}
