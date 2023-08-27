import { createClient } from '@supabase/supabase-js';

const URL = 'https://newotqaxflttvmjwmsog.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ld290cWF4Zmx0dHZtandtc29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NjY3NDcsImV4cCI6MjAwODA0Mjc0N30.3WGdrIKQQCwpcKhT8JWQnuffer-fXwt_xQQngFpAKFw';

export const supabase = createClient(URL, API_KEY);