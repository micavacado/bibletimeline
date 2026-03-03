import ReadingPlan from "@/components/ReadingPlan"

export default function ReadingPlanPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-amber-50/60 border-b border-stone-100 px-4 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
          Walk Through the Word
        </p>
        <h1 className="text-4xl font-bold text-stone-900 mb-2">Reading Plan</h1>
        <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
          A suggested chronological reading list organized by biblical period.
          Open your Bible to the passages below and follow the story from
          Creation to the promised Return.
        </p>
      </header>
      <ReadingPlan />
    </main>
  )
}
