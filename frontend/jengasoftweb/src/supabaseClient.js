import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xhlzvaxebluimlmdtqyn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhobHp2YXhlYmx1aW1sbWR0cXluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyMzY4ODgsImV4cCI6MjA3NzgxMjg4OH0.mLOHwpOzKUpIMnBuki6C1a4AxAeOxxyFdayhIktcpm8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)