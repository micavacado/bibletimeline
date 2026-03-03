"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

export default function AccountPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [notesCount, setNotesCount] = useState<number>(0)
  const [suggestionsCount, setSuggestionsCount] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createClient()

    async function load() {
      const { data } = await supabase.auth.getUser()
      if (!data.user) {
        router.push("/auth")
        return
      }
      setUser(data.user)

      const [{ count: notes }, { count: suggestions }] = await Promise.all([
        supabase
          .from("notes")
          .select("*", { count: "exact", head: true })
          .eq("user_id", data.user.id),
        supabase
          .from("suggested_edits")
          .select("*", { count: "exact", head: true })
          .eq("user_email", data.user.email),
      ])

      setNotesCount(notes ?? 0)
      setSuggestionsCount(suggestions ?? 0)
      setLoading(false)
    }

    load()
  }, [router])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-sm text-stone-400">Loading…</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-amber-50/60 border-b border-stone-100 px-4 py-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
          Your Account
        </p>
        <h1 className="text-4xl font-bold text-stone-900 mb-2">Account</h1>
        <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
          Manage your profile and study activity.
        </p>
      </header>

      <div className="max-w-lg mx-auto px-4 py-8 space-y-4">
        {/* Profile card */}
        <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="h-1 bg-amber-500" />
          <div className="p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-stone-400 mb-3">
              Profile
            </h2>
            <p className="text-sm font-semibold text-stone-900">{user?.email}</p>
            <p className="text-xs text-stone-400 mt-0.5">
              Member since {new Date(user?.created_at ?? "").toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-5 text-center">
            <p className="text-3xl font-bold text-stone-900 mb-1">{notesCount}</p>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Study Notes</p>
          </div>
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-5 text-center">
            <p className="text-3xl font-bold text-stone-900 mb-1">{suggestionsCount}</p>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Suggestions Submitted</p>
          </div>
        </div>

        {/* Sign out */}
        <button
          onClick={handleSignOut}
          className="w-full rounded-xl border border-stone-200 bg-white shadow-sm px-5 py-3 text-sm font-semibold text-stone-500 hover:text-red-500 hover:border-red-200 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </main>
  )
}
