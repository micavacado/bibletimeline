"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type Mode = "signin" | "signup"

export default function AuthPage() {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>("signin")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const supabase = createClient()

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) {
        setErrorMsg(error.message)
        setStatus("error")
      } else {
        setStatus("success")
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setErrorMsg(error.message)
        setStatus("error")
      } else {
        router.push("/")
        router.refresh()
      }
    }
  }

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 mb-2">
            The Biblical Timeline
          </p>
          <h1 className="text-2xl font-bold text-stone-900">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </h1>
          <p className="text-sm text-stone-500 mt-1">
            {mode === "signin"
              ? "Access your notes and study history."
              : "Save your notes across all your devices."}
          </p>
        </div>

        {/* Success state (signup confirmation) */}
        {status === "success" && mode === "signup" ? (
          <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-center">
            <p className="text-sm font-semibold text-emerald-800 mb-1">Check your email</p>
            <p className="text-xs text-emerald-700 leading-relaxed">
              We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 space-y-4"
          >
            <div>
              <label className="text-xs font-medium text-stone-500 block mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-stone-500 block mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-stone-200 px-3 py-2.5 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-red-500">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 transition-colors disabled:opacity-50"
            >
              {status === "loading"
                ? "Please wait…"
                : mode === "signin"
                ? "Sign In"
                : "Create Account"}
            </button>

            <p className="text-center text-xs text-stone-400">
              {mode === "signin" ? (
                <>
                  Don&apos;t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setMode("signup"); setErrorMsg("") }}
                    className="text-amber-600 hover:text-amber-800 font-medium"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setMode("signin"); setErrorMsg("") }}
                    className="text-amber-600 hover:text-amber-800 font-medium"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </form>
        )}
      </div>
    </main>
  )
}
