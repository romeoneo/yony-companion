import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { GameRole, CountryCode } from "@/pages/JoinGames";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface SpecializationStepProps {
  role?: GameRole;
  country?: CountryCode;
  tutorMissionAccepted?: boolean;
  onUpdate: (data: Partial<{
    country?: CountryCode;
    tutorMissionAccepted?: boolean;
  }>) => void;
}

const countries = [
  { value: 'france', label: 'France' },
  { value: 'spain', label: 'Spain' },
  { value: 'italy', label: 'Italy' },
  { value: 'germany', label: 'Germany' },
  { value: 'portugal', label: 'Portugal' },
  { value: 'morocco', label: 'Morocco' },
  { value: 'senegal', label: 'Senegal' },
  { value: 'ivory_coast', label: 'Ivory Coast' },
  { value: 'burkina_faso', label: 'Burkina Faso' },
  { value: 'mali', label: 'Mali' },
  { value: 'algeria', label: 'Algeria' },
  { value: 'tunisia', label: 'Tunisia' },
  { value: 'madagascar', label: 'Madagascar' },
  { value: 'mauritius', label: 'Mauritius' },
  { value: 'canada', label: 'Canada' },
  { value: 'belgium', label: 'Belgium' }
] as const;

const SpecializationStep = ({ role, country, tutorMissionAccepted, onUpdate }: SpecializationStepProps) => {
  const [countryOpen, setCountryOpen] = useState(false);

  const selectedCountry = countries.find(c => c.value === country);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Country <span style={{ color: "#e76830" }}>Connection</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Choose the country you want to be connected with in the Yonyverse.
        </p>
      </div>

      <div className="space-y-6">
        {/* Country Selection - Required for all roles */}
        <div className="space-y-2">
          <Label htmlFor="country-select" className="text-base font-medium">
            Your Connected Country *
          </Label>
          <Popover open={countryOpen} onOpenChange={setCountryOpen}>
            <PopoverTrigger asChild>
              <Button
                id="country-select"
                variant="outline"
                role="combobox"
                aria-expanded={countryOpen}
                className="w-full h-14 justify-between text-left font-normal"
              >
                {selectedCountry ? selectedCountry.label : "Select a country..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
              <Command>
                <CommandInput placeholder="Search countries..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No country found.</CommandEmpty>
                  <CommandGroup>
                    {countries.map((countryOption) => (
                      <CommandItem
                        key={countryOption.value}
                        value={countryOption.value}
                        onSelect={(currentValue) => {
                          onUpdate({ country: currentValue as CountryCode });
                          setCountryOpen(false);
                        }}
                      >
                        {countryOption.label}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            country === countryOption.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <p className="text-sm text-muted-foreground">
            This country will be associated with your role in the Yonyverse ecosystem.
          </p>
        </div>

        {/* Special requirements for Yony Flowers Tutor */}
        {role === 'yony_flowers_tutor' && (
          <motion.div
            className="p-6 rounded-lg border bg-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-lg font-serif font-semibold mb-4 text-primary">
              Tutor Mission Agreement
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                As a Yony Flowers Tutor, you will be responsible for guiding and mentoring 8 Yony Seeds 
                in their development journey. This is a significant commitment that requires dedication 
                and passion for education and mentorship.
              </p>
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="tutor-mission"
                  checked={tutorMissionAccepted || false}
                  onCheckedChange={(checked) => onUpdate({ tutorMissionAccepted: checked as boolean })}
                  className="mt-1"
                />
                <div className="space-y-1">
                  <Label 
                    htmlFor="tutor-mission" 
                    className="text-sm font-medium cursor-pointer"
                  >
                    I accept the mission to mentor 8 Yony Seeds
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    By checking this box, you commit to the responsibilities of a Tutor in the Yonyverse.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Success indicator */}
        {country && (role !== 'yony_flowers_tutor' || tutorMissionAccepted) && (
          <motion.div
            className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-700">
              Great! Your connection to {selectedCountry?.label} is confirmed.
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SpecializationStep;