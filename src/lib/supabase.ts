import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Initialize database tables
export async function initDatabase() {
  const { error } = await supabaseAdmin.from('gallery_images').select('*').limit(1)
  
  if (error && error.code === '42P01') {
    // Create tables via Supabase SQL editor manually
    console.log('Please create tables in Supabase dashboard')
  }
}
