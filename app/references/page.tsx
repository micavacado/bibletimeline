import References from "@/components/References"

export default function ReferencesPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-amber-50/60 border-b border-stone-100 px-4 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
          Sources & Methodology
        </p>
        <h1 className="text-4xl font-bold text-stone-900 mb-2">References</h1>
        <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
          The scholars, translations, and methods behind the dates, notes, and
          content in this timeline.
        </p>
      </header>
      <References />
    </main>
  )
}
