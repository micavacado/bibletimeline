export default function Footer() {
  return (
    <footer className="bg-stone-800 border-t border-stone-700 mt-16">
      <div className="max-w-2xl mx-auto px-4 py-10 text-center">
        {/* Divider accent */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 bg-stone-600" />
          <span className="text-stone-500 text-xs">✦</span>
          <div className="h-px w-12 bg-stone-600" />
        </div>

        {/* Name */}
        <p className="text-sm font-semibold text-stone-200 mb-1">Micah Stevenson</p>

        {/* Bio */}
        <p className="text-xs text-stone-400 leading-relaxed max-w-sm mx-auto mb-4">
          Built this out of a love for God&apos;s Word and a desire to help others explore
          the full story of Scripture.
        </p>

        {/* Email */}
        <a
          href="mailto:micahjstevenson@yahoo.com"
          className="inline-block text-xs text-amber-400 hover:text-amber-300 font-medium transition-colors mb-6"
        >
          micahjstevenson@yahoo.com
        </a>

        {/* Date created */}
        <p className="text-[10px] text-stone-600">
          Created 2026 · The Biblical Timeline
        </p>
      </div>
    </footer>
  )
}
