// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://oxcifogtiqgrcntjcniw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94Y2lmb2d0aXFncmNudGpjbml3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5ODM0NDcsImV4cCI6MjA2MzU1OTQ0N30.biVcgjzlHa-X9H8w3GkSDl6Twgxv-DGwj-xMymEaeKI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);