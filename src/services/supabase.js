import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xxgvnzgnejlvelcalrfz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4Z3ZuemduZWpsdmVsY2FscmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI1OTM4MzAsImV4cCI6MjAwODE2OTgzMH0.TevensPCK2KXuiIstIIfAOxvZEhlp23myGJyVlkre0Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
