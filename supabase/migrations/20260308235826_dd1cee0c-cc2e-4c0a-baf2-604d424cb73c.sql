-- Create enum for game roles
CREATE TYPE public.game_role AS ENUM (
  'yony_flowers_tutor',
  'yony_flowers_project',
  'yony_brands',
  'yony_lights', 
  'yony_places',
  'yony_angels',
  'yony_magics',
  'yony_stars',
  'yony_guards'
);

-- Create enum for countries
CREATE TYPE public.country_code AS ENUM (
  'france',
  'spain', 
  'italy',
  'germany',
  'portugal',
  'morocco',
  'senegal',
  'ivory_coast',
  'burkina_faso',
  'mali',
  'algeria',
  'tunisia',
  'madagascar',
  'mauritius',
  'canada',
  'belgium'
);

-- Create table for game registrations
CREATE TABLE public.game_registrations (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    full_name TEXT NOT NULL,
    role public.game_role NOT NULL,
    country public.country_code,
    project_category TEXT,
    engagement_text TEXT NOT NULL,
    intention_text TEXT NOT NULL,
    avatar_url TEXT,
    tutor_mission_accepted BOOLEAN DEFAULT false,
    registration_step INTEGER DEFAULT 1,
    is_completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.game_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for game registrations
CREATE POLICY "Users can view their own registrations" 
ON public.game_registrations 
FOR SELECT 
USING (auth.uid() = user_id OR email = auth.email());

CREATE POLICY "Users can create their own registrations" 
ON public.game_registrations 
FOR INSERT 
WITH CHECK (auth.uid() = user_id OR auth.uid() IS NULL);

CREATE POLICY "Users can update their own registrations" 
ON public.game_registrations 
FOR UPDATE 
USING (auth.uid() = user_id OR email = auth.email());

-- Create storage bucket for avatars
INSERT INTO storage.buckets (id, name, public) 
VALUES ('avatars', 'avatars', true);

-- Create storage policies for avatars
CREATE POLICY "Avatar images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'avatars');

CREATE POLICY "Users can update their own avatar" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'avatars');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_game_registrations_updated_at
    BEFORE UPDATE ON public.game_registrations
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();