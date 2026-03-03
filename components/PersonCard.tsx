import { BiblicalPerson } from "@/types/timeline"
import ScriptureRef from "./ScriptureRef"

interface PersonCardProps {
  person: BiblicalPerson
}

export default function PersonCard({ person }: PersonCardProps) {
  return (
    <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-3">
      <div className="flex flex-wrap items-center gap-2 mb-1.5">
        <span className="text-sm font-bold text-emerald-900">{person.name}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wide bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">
          {person.role}
        </span>
      </div>

      <p className="text-xs text-emerald-900 leading-relaxed mb-2.5">
        {person.summary}
      </p>

      <ul className="mb-2.5 space-y-1">
        {person.keyFacts.map((fact, i) => (
          <li key={i} className="flex items-start gap-1.5 text-xs text-emerald-800">
            <span className="text-emerald-400 font-bold mt-px shrink-0">•</span>
            {fact}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1">
        {person.scriptures.map((ref) => (
          <ScriptureRef
            key={ref}
            reference={ref}
            className="rounded border border-emerald-200 bg-white px-1.5 py-0.5 text-xs text-emerald-700 font-mono hover:bg-emerald-50 transition-colors"
          />
        ))}
      </div>
    </div>
  )
}
