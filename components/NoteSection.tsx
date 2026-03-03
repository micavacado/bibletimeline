"use client"

import { useState, useEffect } from "react"
import { getNoteForEvent, saveNote, deleteNote } from "@/lib/notes"

interface NoteSectionProps {
  eventId: string
}

export default function NoteSection({ eventId }: NoteSectionProps) {
  const [note, setNote] = useState<string | null>(null)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    setLoading(true)
    getNoteForEvent(eventId).then((content) => {
      setNote(content)
      setLoading(false)
    })
  }, [eventId])

  async function handleSave() {
    setSaving(true)
    if (draft.trim()) {
      await saveNote(eventId, draft.trim())
      setNote(draft.trim())
    } else {
      await deleteNote(eventId)
      setNote(null)
    }
    setSaving(false)
    setEditing(false)
  }

  function handleEdit() {
    setDraft(note ?? "")
    setEditing(true)
  }

  function handleCancel() {
    setEditing(false)
    setDraft("")
  }

  async function handleDelete() {
    await deleteNote(eventId)
    setNote(null)
    setEditing(false)
  }

  if (loading) {
    return (
      <div className="mt-4 border-t border-stone-100 pt-4">
        <p className="text-xs text-stone-300">Loading note...</p>
      </div>
    )
  }

  if (editing) {
    return (
      <div className="mt-4 border-t border-stone-100 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-2">
          My Study Note
        </p>
        <textarea
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Write your study note here..."
          className="w-full rounded-lg border border-stone-200 p-3 text-sm text-stone-700 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 min-h-[100px] font-sans"
        />
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-md bg-amber-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-700 transition-colors disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save Note"}
          </button>
          <button
            onClick={handleCancel}
            disabled={saving}
            className="rounded-md border border-stone-200 px-3 py-1.5 text-xs font-medium text-stone-500 hover:bg-stone-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          {note && (
            <button
              onClick={handleDelete}
              disabled={saving}
              className="ml-auto text-xs font-medium text-red-400 hover:text-red-600 transition-colors disabled:opacity-50"
            >
              Delete note
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-4 border-t border-stone-100 pt-4">
      {note ? (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-2">
            My Study Note
          </p>
          <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-wrap">
            {note}
          </p>
          <button
            onClick={handleEdit}
            className="mt-2 text-xs text-amber-600 hover:text-amber-800 font-medium transition-colors"
          >
            Edit note
          </button>
        </div>
      ) : (
        <button
          onClick={() => setEditing(true)}
          className="text-xs text-stone-400 hover:text-amber-600 font-medium transition-colors"
        >
          + Add a personal study note
        </button>
      )}
    </div>
  )
}
