import { createClient } from "@supabase/supabase-js";

export function getSupabase() {
  return createClient(process.env.SUPABASE_PROJECT, process.env.SUPABASE_KEY);
}
