import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ozyuieuniisvkvsjpfqg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eXVpZXVuaWlzdmt2c2pwZnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyMDA0MDgsImV4cCI6MjA2ODc3NjQwOH0.TRPuqvQOlNPyFeozhijhspQaNpLEJ-yFouz7bGuIWVI'

export const supabase = createClient(supabaseUrl, supabaseKey)
