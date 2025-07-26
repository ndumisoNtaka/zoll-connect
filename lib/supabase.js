import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yjrgovrpnxhpgwxsoyll.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqcmdvdnJwbnhocGd3eHNveWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MTk4NTgsImV4cCI6MjA2NzQ5NTg1OH0.atoZ5vighmGQrGYpCwJm_QNoqqR0K6MZXUzd2ahoLXE';

export const supabase = createClient(supabaseUrl, supabaseKey);
