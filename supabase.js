import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient('https://jvjchstzvjfinyrotwyg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2amNoc3R6dmpmaW55cm90d3lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc5ODU1NjMsImV4cCI6MTk3MzU2MTU2M30.YzJNX7Yb4zqdB6qq8DZHkXi8Nm5yuQ6t9uPWXadrVfE')