
-- Create registrations table
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT,
  contribution_types TEXT[] DEFAULT '{}',
  interest_areas TEXT[] DEFAULT '{}',
  role TEXT NOT NULL,
  message TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public registration form)
CREATE POLICY "Anyone can insert registrations"
ON public.registrations
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins should read (for now allow all authenticated users)
CREATE POLICY "Authenticated users can view registrations"
ON public.registrations
FOR SELECT
TO authenticated
USING (true);
