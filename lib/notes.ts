import { createClient } from "./supabase"
import { getSessionId } from "./session"

export async function getNoteForEvent(eventId: string): Promise<string | null> {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let query = supabase
    .from("notes")
    .select("content")
    .eq("event_id", eventId)

  if (user) {
    query = query.eq("user_id", user.id)
  } else {
    query = query.eq("session_id", getSessionId())
  }

  const { data } = await query.single()
  return data?.content ?? null
}

export async function saveNote(eventId: string, content: string): Promise<void> {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    await supabase
      .from("notes")
      .upsert(
        { event_id: eventId, user_id: user.id, content, updated_at: new Date().toISOString() },
        { onConflict: "event_id,user_id" }
      )
  } else {
    const sessionId = getSessionId()
    await supabase
      .from("notes")
      .upsert(
        { event_id: eventId, session_id: sessionId, content, updated_at: new Date().toISOString() },
        { onConflict: "event_id,session_id" }
      )
  }
}

export async function deleteNote(eventId: string): Promise<void> {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let query = supabase
    .from("notes")
    .delete()
    .eq("event_id", eventId)

  if (user) {
    query = query.eq("user_id", user.id)
  } else {
    query = query.eq("session_id", getSessionId())
  }

  await query
}
