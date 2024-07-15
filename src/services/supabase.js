import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://gvpkpkegcseqnaywegai.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2cGtwa2VnY3NlcW5heXdlZ2FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2MzU0OTYsImV4cCI6MjAzNjIxMTQ5Nn0.6on9KJV4l8Q1oqZnhfsWtQEd-LFj2oEBlhWJP53AsEM';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
