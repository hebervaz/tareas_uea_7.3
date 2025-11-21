
//import { createClient } from '@supabase/supabase-js'


// Crea un unico cliente supabase para interactuar con tu base de datos
const supa = supabase.createClient('https://otefeicxbgkpgetolfvv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90ZWZlaWN4YmdrcGdldG9sZnZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTU2MjYsImV4cCI6MjA3NzQ5MTYyNn0.LiOw9h0tn6gDs4EOqIhAWdq386qVzHpy4AHgwlFhArM')

console.log(supa)