import { periods } from "@/data/periods"
import { BiblicalPeriod } from "@/types/timeline"

interface TimelineBarProps {
  activePeriod: BiblicalPeriod | null
  onSelectPeriod: (period: BiblicalPeriod) => void
}

export default function TimelineBar({
  activePeriod,
  onSelectPeriod,
}: TimelineBarProps) {
  return (
    <div className="bg-stone-100 border-b border-stone-200 py-6 shadow-sm">
      <div className="overflow-x-auto">
        {/* min-w-max keeps nodes from squishing on small screens */}
        <div className="min-w-max w-fit px-8 mx-auto">
          {/* Each node is w-24 (96px). 11 nodes = 1056px.
              First dot center = 48px from left edge of flex row.
              Last dot center  = 1056 - 48 = 1008px.
              right offset     = 1056 - 1008 = 48px = left-12 / right-12.
              Line top at 10px = half of h-5 dot container = top-2.5         */}
          <div className="relative flex">
            <div className="absolute h-px bg-stone-300 top-2.5 left-12 right-12 z-0" />

            {periods.map((period) => {
              const isActive = activePeriod === period.id
              return (
                <button
                  key={period.id}
                  onClick={() => onSelectPeriod(period.id)}
                  className="relative z-10 flex-none w-24 flex flex-col items-center group cursor-pointer focus:outline-none"
                  aria-pressed={isActive}
                >
                  {/* Dot */}
                  <div className="h-5 flex items-center justify-center">
                    <div
                      className={`rounded-full border-2 border-stone-100 transition-all duration-200 ${
                        isActive
                          ? `w-5 h-5 ${period.color.dot} shadow-md`
                          : "w-3.5 h-3.5 bg-stone-300 group-hover:w-4 group-hover:h-4 group-hover:bg-stone-400"
                      }`}
                    />
                  </div>

                  {/* Label */}
                  <span
                    className={`mt-2 text-xs font-semibold text-center leading-tight px-0.5 transition-colors ${
                      isActive
                        ? period.color.text
                        : "text-stone-500 group-hover:text-stone-700"
                    }`}
                  >
                    {period.shortLabel}
                  </span>

                  {/* Date */}
                  <span className="mt-0.5 text-[10px] text-stone-400 font-mono text-center px-0.5">
                    {period.approximateDateLabel}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
