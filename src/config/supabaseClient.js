// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
import {REACT_APP_SUPABASE_URL,REACT_APP_ANON_KEY} from '@env';

const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_ANON_KEY)

// Make a request
// const { data: todos, error } = await supabase.from('todos').select('*')

export default supabase;