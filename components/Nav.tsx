"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

const links = [
  { href: "/", label: "Timeline" },
  { href: "/people", label: "People" },
  { href: "/reading-plan", label: "Reading Plan" },
  { href: "/references", label: "References" },
]

export default function Nav() {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => setUser(data.user))

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  return (
    <nav className="sticky top-0 z-50 bg-stone-800 border-b border-stone-700">
      <div className="max-w-5xl mx-auto px-4 h-11 flex items-center gap-6">
        {links.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm font-semibold transition-colors ${
                isActive
                  ? "text-amber-400 hover:text-amber-300"
                  : "text-stone-300 hover:text-stone-100"
              }`}
            >
              {label}
            </Link>
          )
        })}

        <div className="ml-auto flex items-center gap-4">
          {user ? (
            <>
              <Link
                href="/account"
                className={`text-sm font-semibold transition-colors ${
                  pathname === "/account"
                    ? "text-amber-400 hover:text-amber-300"
                    : "text-stone-300 hover:text-stone-100"
                }`}
              >
                Account
              </Link>
              <button
                onClick={handleSignOut}
                className="text-sm font-semibold text-stone-400 hover:text-stone-200 transition-colors"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              href="/auth"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/auth"
                  ? "text-amber-400 hover:text-amber-300"
                  : "text-stone-300 hover:text-stone-100"
              }`}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
