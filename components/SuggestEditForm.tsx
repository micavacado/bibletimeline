"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase"

interface SuggestEditFormProps {
  eventId: string
  eventTitle: string
}

type Status = "idle" | "open" | "saving" | "success" | "error"

export default function SuggestEditForm({ eventId, eventTitle }: SuggestEditFormProps) {
  const [status, setStatus] = useState<Status>("idle")
  const [suggestion, setSuggestion] = useState("")
  const [reason, setReason] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      if (data.user?.email) setEmail(data.user.email)
    })
  }, [])

  function handleOpen() {
    setStatus("open")
  }

  function handleCancel() {
    setStatus("idle")
    setSuggestion("")
    setReason("")
  }

  async function handleSubmit() {
    if (!suggestion.trim() || !reason.trim()) return
    setStatus("saving")

    const supabase = createClient()
    const { error } = await supabase.from("suggested_edits").insert({
      event_id: eventId,
      event_title: eventTitle,
      suggestion: suggestion.trim(),
      reason: reason.trim(),
      user_email: email.trim() || null,
    })

    if (error) {
      setStatus("error")
    } else {
      setStatus("success")
      setSuggestion("")
      setReason("")
    }
  }

  if (status === "success") {
    return (
      <div className="mt-3 border-t border-stone-100 pt-4">
        <div className="rounded-lg bg-emerald-50 border border-emerald-100 px-4 py-3">
          <p className="text-sm font-semibold text-emerald-800 mb-0.5">Suggestion received</p>
          <p className="text-xs text-emerald-700 leading-relaxed">
            Thank you — this will be reviewed before any changes are made to the site.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-2 text-xs text-emerald-600 hover:text-emerald-800 font-medium transition-colors"
          >
            Submit another
          </button>
        </div>
      </div>
    )
  }

  if (status === "idle") {
    return (
      <div className="mt-3 border-t border-stone-100 pt-4">
        <button
          onClick={handleOpen}
          className="text-xs text-stone-400 hover:text-amber-600 font-medium transition-colors"
        >
          Suggest an edit to this event →
        </button>
      </div>
    )
  }

  return (
    <div className="mt-3 border-t border-stone-100 pt-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-3">
        Suggest an Edit
      </p>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-medium text-stone-500 block mb-1">
            What should be changed? <span className="text-red-400">*</span>
          </label>
          <textarea
            autoFocus
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            placeholder="Describe what is incorrect or incomplete..."
            className="w-full rounded-lg border border-stone-200 p-3 text-sm text-stone-700 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 min-h-[80px] font-sans"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-stone-500 block mb-1">
            Why / source for this change? <span className="text-red-400">*</span>
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Cite a scripture reference, scholar, or commentary..."
            className="w-full rounded-lg border border-stone-200 p-3 text-sm text-stone-700 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 min-h-[80px] font-sans"
          />
        </div>

        <div>
          <label className="text-xs font-medium text-stone-500 block mb-1">
            Your email{" "}
            <span className="text-stone-300">(optional — so we can follow up)</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-stone-200 p-3 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-400 font-sans"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-2 text-xs text-red-500">
          Something went wrong — please try again.
        </p>
      )}

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={handleSubmit}
          disabled={status === "saving" || !suggestion.trim() || !reason.trim()}
          className="rounded-md bg-amber-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-700 transition-colors disabled:opacity-50"
        >
          {status === "saving" ? "Submitting…" : "Submit Suggestion"}
        </button>
        <button
          onClick={handleCancel}
          disabled={status === "saving"}
          className="rounded-md border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-500 hover:bg-stone-50 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
