import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Users, Check, ChevronsUpDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { GameRole, CountryCode, RegistrationData } from "@/pages/JoinGames";

interface SpecializationStepProps {
  role?: GameRole;
  country?: CountryCode;
  projectCategory?: string;
  tutorMissionAccepted?: boolean;
  onUpdate: (data: Partial<RegistrationData>) => void;
}

const countries = [
  { code: 'france', name: 'France', flag: '🇫🇷' },
  { code: 'spain', name: 'Spain', flag: '🇪🇸' },
  { code: 'italy', name: 'Italy', flag: '🇮🇹' },
  { code: 'germany', name: 'Germany', flag: '🇩🇪' },
  { code: 'portugal', name: 'Portugal', flag: '🇵🇹' },
  { code: 'morocco', name: 'Morocco', flag: '🇲🇦' },
  { code: 'senegal', name: 'Senegal', flag: '🇸🇳' },
  { code: 'ivory_coast', name: "Ivory Coast", flag: '🇨🇮' },
  { code: 'burkina_faso', name: 'Burkina Faso', flag: '🇧🇫' },
  { code: 'mali', name: 'Mali', flag: '🇲🇱' },
  { code: 'algeria', name: 'Algeria', flag: '🇩🇿' },
  { code: 'tunisia', name: 'Tunisia', flag: '🇹🇳' },
  { code: 'madagascar', name: 'Madagascar', flag: '🇲🇬' },
  { code: 'mauritius', name: 'Mauritius', flag: '🇲🇺' },
  { code: 'canada', name: 'Canada', flag: '🇨🇦' },
  { code: 'belgium', name: 'Belgium', flag: '🇧🇪' }
];

const projectCategories = [
  "Social Initiatives",
  "Education & Training",
  "Innovation & Technology",
  "Nature & Environment",
  "Health & Wellness",
  "Arts & Culture",
  "Tourism & Traditions",
  "Other"
];

const CountrySelector = ({
  country,
  onUpdate,
}: {
  country?: CountryCode;
  onUpdate: (data: Partial<RegistrationData>) => void;
}) => {
  const [open, setOpen] = useState(false);
  const selectedCountry = countries.find(c => c.code === country);

  return (
    <div className="space-y-2">
      <Label className="text-lg font-medium flex items-center gap-2">
        <Search className="w-5 h-5" />
        Country of impact *
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-base font-normal h-11"
          >
            {selectedCountry ? (
              <span className="flex items-center gap-2">
                <span className="text-lg">{selectedCountry.flag}</span>
                {selectedCountry.name}
              </span>
            ) : (
              <span className="text-muted-foreground">Search for a country...</span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countries.map((c) => (
                  <CommandItem
                    key={c.code}
                    value={c.name}
                    onSelect={() => {
                      onUpdate({ country: c.code as CountryCode });
                      setOpen(false);
                    }}
                  >
                    <span className="mr-2 text-lg">{c.flag}</span>
                    {c.name}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        country === c.code ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const SpecializationStep = ({
  role,
  country,
  projectCategory,
  tutorMissionAccepted,
  onUpdate
}: SpecializationStepProps) => {

  if (role === 'yony_flowers_tutor') {
    return (
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Tutor <span style={{ color: "#e76830" }}>Mission</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            As a Yony Flowers Tutor, you have a special mission.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-primary/10 to-orange-500/10 p-8 rounded-2xl border border-primary/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3">Your Mission: Recruit 8 Yony Seeds</h3>
                <p className="text-muted-foreground mb-4">
                  Your role is to discover and invite <strong>8 dream bearers</strong> (Yony Seeds)
                  to join the Yonyverse. These people will carry impact projects across different
                  categories and countries.
                </p>
                <div className="bg-background/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Your responsibilities:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Identify authentic impact project carriers</li>
                    <li>• Guide them through their Yonyverse registration</li>
                    <li>• Maintain a connection with your 8 Yony Seeds</li>
                    <li>• Facilitate their integration into the community</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg font-medium mb-6">
              Do you accept this mentoring mission?
            </p>

            <div className="flex gap-4 justify-center">
              <Button
                variant={tutorMissionAccepted === false ? "default" : "outline"}
                onClick={() => onUpdate({ tutorMissionAccepted: false })}
                className="px-8"
              >
                Not right now
              </Button>
              <Button
                variant={tutorMissionAccepted === true ? "default" : "outline"}
                onClick={() => onUpdate({ tutorMissionAccepted: true })}
                className="px-8 flex items-center gap-2"
                style={{
                  backgroundColor: tutorMissionAccepted ? "#e76830" : undefined,
                  borderColor: tutorMissionAccepted ? "#e76830" : undefined
                }}
              >
                <Check className="w-4 h-4" />
                I accept the mission
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (role === 'yony_flowers_project') {
    return (
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Your <span style={{ color: "#e76830" }}>Project</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose the country and category that match your impact project.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Country Selection – searchable dropdown */}
          <CountrySelector country={country} onUpdate={onUpdate} />

          {/* Project Category */}
          <div>
            <Label className="text-lg font-medium mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Project category *
            </Label>
            <RadioGroup
              value={projectCategory}
              onValueChange={(value) => onUpdate({ projectCategory: value })}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              {projectCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <RadioGroupItem value={category} id={category} />
                  <Label
                    htmlFor={category}
                    className="cursor-pointer text-sm font-normal"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        {country && projectCategory && (
          <motion.div
            className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm text-primary font-medium">
              ✨ Project configured: <strong>{projectCategory}</strong> in <strong>{countries.find(c => c.code === country)?.name}</strong>
            </p>
          </motion.div>
        )}
      </div>
    );
  }

  // For other roles
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Ready to <span style={{ color: "#e76830" }}>begin</span>!
        </h2>
        <p className="text-muted-foreground text-lg">
          Your role is set. Let's move on to defining your engagement.
        </p>
      </div>

      <motion.div
        className="max-w-md mx-auto p-6 rounded-xl bg-primary/5 border border-primary/20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Check className="w-8 h-8 text-primary mx-auto mb-3" />
        <p className="font-medium">Configuration complete!</p>
        <p className="text-sm text-muted-foreground">
          You can proceed to the next step.
        </p>
      </motion.div>
    </div>
  );
};

export default SpecializationStep;
