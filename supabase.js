import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
export const supabase = createClient('https://krzjdyuyykpijrzinphc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyempkeXV5eWtwaWpyemlucGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjI5ODU4MDQsImV4cCI6MTk3ODU2MTgwNH0.MLzmEiY20T_wEF1PXeoEgCPLxrN7CqeYByZPHerA47Q')



