
import { createClient } from '@supabase/supabase-js'

// Crea un unico cliente supabase para interactuar con tu base de datos
const supabase = createClient('https://xyzcompany.supabase.co', 'publishable-or-anon-key')