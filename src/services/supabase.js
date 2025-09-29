import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lxnylktjsbyqalmdchfy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bnlsa3Rqc2J5cWFsbWRjaGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MjA1NTgsImV4cCI6MjA3NDQ5NjU1OH0.8VuSJwOm8qqh9z8DVlV-bP0-Xvlic8cERq25xwUGbgQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
