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
  { value: 'afghanistan', label: 'Afghanistan' },
  { value: 'albania', label: 'Albania' },
  { value: 'algeria', label: 'Algeria' },
  { value: 'andorra', label: 'Andorra' },
  { value: 'angola', label: 'Angola' },
  { value: 'antigua_and_barbuda', label: 'Antigua and Barbuda' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'armenia', label: 'Armenia' },
  { value: 'australia', label: 'Australia' },
  { value: 'austria', label: 'Austria' },
  { value: 'azerbaijan', label: 'Azerbaijan' },
  { value: 'bahamas', label: 'Bahamas' },
  { value: 'bahrain', label: 'Bahrain' },
  { value: 'bangladesh', label: 'Bangladesh' },
  { value: 'barbados', label: 'Barbados' },
  { value: 'belarus', label: 'Belarus' },
  { value: 'belgium', label: 'Belgium' },
  { value: 'belize', label: 'Belize' },
  { value: 'benin', label: 'Benin' },
  { value: 'bhutan', label: 'Bhutan' },
  { value: 'bolivia', label: 'Bolivia' },
  { value: 'bosnia_and_herzegovina', label: 'Bosnia and Herzegovina' },
  { value: 'botswana', label: 'Botswana' },
  { value: 'brazil', label: 'Brazil' },
  { value: 'brunei', label: 'Brunei' },
  { value: 'bulgaria', label: 'Bulgaria' },
  { value: 'burkina_faso', label: 'Burkina Faso' },
  { value: 'burundi', label: 'Burundi' },
  { value: 'cabo_verde', label: 'Cabo Verde' },
  { value: 'cambodia', label: 'Cambodia' },
  { value: 'cameroon', label: 'Cameroon' },
  { value: 'canada', label: 'Canada' },
  { value: 'central_african_republic', label: 'Central African Republic' },
  { value: 'chad', label: 'Chad' },
  { value: 'chile', label: 'Chile' },
  { value: 'china', label: 'China' },
  { value: 'colombia', label: 'Colombia' },
  { value: 'comoros', label: 'Comoros' },
  { value: 'congo', label: 'Congo' },
  { value: 'costa_rica', label: 'Costa Rica' },
  { value: 'croatia', label: 'Croatia' },
  { value: 'cuba', label: 'Cuba' },
  { value: 'cyprus', label: 'Cyprus' },
  { value: 'czech_republic', label: 'Czech Republic' },
  { value: 'denmark', label: 'Denmark' },
  { value: 'djibouti', label: 'Djibouti' },
  { value: 'dominica', label: 'Dominica' },
  { value: 'dominican_republic', label: 'Dominican Republic' },
  { value: 'ecuador', label: 'Ecuador' },
  { value: 'egypt', label: 'Egypt' },
  { value: 'el_salvador', label: 'El Salvador' },
  { value: 'equatorial_guinea', label: 'Equatorial Guinea' },
  { value: 'eritrea', label: 'Eritrea' },
  { value: 'estonia', label: 'Estonia' },
  { value: 'eswatini', label: 'Eswatini' },
  { value: 'ethiopia', label: 'Ethiopia' },
  { value: 'fiji', label: 'Fiji' },
  { value: 'finland', label: 'Finland' },
  { value: 'france', label: 'France' },
  { value: 'gabon', label: 'Gabon' },
  { value: 'gambia', label: 'Gambia' },
  { value: 'georgia', label: 'Georgia' },
  { value: 'germany', label: 'Germany' },
  { value: 'ghana', label: 'Ghana' },
  { value: 'greece', label: 'Greece' },
  { value: 'grenada', label: 'Grenada' },
  { value: 'guatemala', label: 'Guatemala' },
  { value: 'guinea', label: 'Guinea' },
  { value: 'guinea_bissau', label: 'Guinea-Bissau' },
  { value: 'guyana', label: 'Guyana' },
  { value: 'haiti', label: 'Haiti' },
  { value: 'honduras', label: 'Honduras' },
  { value: 'hungary', label: 'Hungary' },
  { value: 'iceland', label: 'Iceland' },
  { value: 'india', label: 'India' },
  { value: 'indonesia', label: 'Indonesia' },
  { value: 'iran', label: 'Iran' },
  { value: 'iraq', label: 'Iraq' },
  { value: 'ireland', label: 'Ireland' },
  { value: 'israel', label: 'Israel' },
  { value: 'italy', label: 'Italy' },
  { value: 'ivory_coast', label: 'Ivory Coast' },
  { value: 'jamaica', label: 'Jamaica' },
  { value: 'japan', label: 'Japan' },
  { value: 'jordan', label: 'Jordan' },
  { value: 'kazakhstan', label: 'Kazakhstan' },
  { value: 'kenya', label: 'Kenya' },
  { value: 'kiribati', label: 'Kiribati' },
  { value: 'kuwait', label: 'Kuwait' },
  { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
  { value: 'laos', label: 'Laos' },
  { value: 'latvia', label: 'Latvia' },
  { value: 'lebanon', label: 'Lebanon' },
  { value: 'lesotho', label: 'Lesotho' },
  { value: 'liberia', label: 'Liberia' },
  { value: 'libya', label: 'Libya' },
  { value: 'liechtenstein', label: 'Liechtenstein' },
  { value: 'lithuania', label: 'Lithuania' },
  { value: 'luxembourg', label: 'Luxembourg' },
  { value: 'madagascar', label: 'Madagascar' },
  { value: 'malawi', label: 'Malawi' },
  { value: 'malaysia', label: 'Malaysia' },
  { value: 'maldives', label: 'Maldives' },
  { value: 'mali', label: 'Mali' },
  { value: 'malta', label: 'Malta' },
  { value: 'marshall_islands', label: 'Marshall Islands' },
  { value: 'mauritania', label: 'Mauritania' },
  { value: 'mauritius', label: 'Mauritius' },
  { value: 'mexico', label: 'Mexico' },
  { value: 'micronesia', label: 'Micronesia' },
  { value: 'moldova', label: 'Moldova' },
  { value: 'monaco', label: 'Monaco' },
  { value: 'mongolia', label: 'Mongolia' },
  { value: 'montenegro', label: 'Montenegro' },
  { value: 'morocco', label: 'Morocco' },
  { value: 'mozambique', label: 'Mozambique' },
  { value: 'myanmar', label: 'Myanmar' },
  { value: 'namibia', label: 'Namibia' },
  { value: 'nauru', label: 'Nauru' },
  { value: 'nepal', label: 'Nepal' },
  { value: 'netherlands', label: 'Netherlands' },
  { value: 'new_zealand', label: 'New Zealand' },
  { value: 'nicaragua', label: 'Nicaragua' },
  { value: 'niger', label: 'Niger' },
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'north_korea', label: 'North Korea' },
  { value: 'north_macedonia', label: 'North Macedonia' },
  { value: 'norway', label: 'Norway' },
  { value: 'oman', label: 'Oman' },
  { value: 'pakistan', label: 'Pakistan' },
  { value: 'palau', label: 'Palau' },
  { value: 'palestine', label: 'Palestine' },
  { value: 'panama', label: 'Panama' },
  { value: 'papua_new_guinea', label: 'Papua New Guinea' },
  { value: 'paraguay', label: 'Paraguay' },
  { value: 'peru', label: 'Peru' },
  { value: 'philippines', label: 'Philippines' },
  { value: 'poland', label: 'Poland' },
  { value: 'portugal', label: 'Portugal' },
  { value: 'qatar', label: 'Qatar' },
  { value: 'romania', label: 'Romania' },
  { value: 'russia', label: 'Russia' },
  { value: 'rwanda', label: 'Rwanda' },
  { value: 'saint_kitts_and_nevis', label: 'Saint Kitts and Nevis' },
  { value: 'saint_lucia', label: 'Saint Lucia' },
  { value: 'saint_vincent_and_the_grenadines', label: 'Saint Vincent and the Grenadines' },
  { value: 'samoa', label: 'Samoa' },
  { value: 'san_marino', label: 'San Marino' },
  { value: 'sao_tome_and_principe', label: 'São Tomé and Príncipe' },
  { value: 'saudi_arabia', label: 'Saudi Arabia' },
  { value: 'senegal', label: 'Senegal' },
  { value: 'serbia', label: 'Serbia' },
  { value: 'seychelles', label: 'Seychelles' },
  { value: 'sierra_leone', label: 'Sierra Leone' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'slovakia', label: 'Slovakia' },
  { value: 'slovenia', label: 'Slovenia' },
  { value: 'solomon_islands', label: 'Solomon Islands' },
  { value: 'somalia', label: 'Somalia' },
  { value: 'south_africa', label: 'South Africa' },
  { value: 'south_korea', label: 'South Korea' },
  { value: 'south_sudan', label: 'South Sudan' },
  { value: 'spain', label: 'Spain' },
  { value: 'sri_lanka', label: 'Sri Lanka' },
  { value: 'sudan', label: 'Sudan' },
  { value: 'suriname', label: 'Suriname' },
  { value: 'sweden', label: 'Sweden' },
  { value: 'switzerland', label: 'Switzerland' },
  { value: 'syria', label: 'Syria' },
  { value: 'taiwan', label: 'Taiwan' },
  { value: 'tajikistan', label: 'Tajikistan' },
  { value: 'tanzania', label: 'Tanzania' },
  { value: 'thailand', label: 'Thailand' },
  { value: 'timor_leste', label: 'Timor-Leste' },
  { value: 'togo', label: 'Togo' },
  { value: 'tonga', label: 'Tonga' },
  { value: 'trinidad_and_tobago', label: 'Trinidad and Tobago' },
  { value: 'tunisia', label: 'Tunisia' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'turkmenistan', label: 'Turkmenistan' },
  { value: 'tuvalu', label: 'Tuvalu' },
  { value: 'uganda', label: 'Uganda' },
  { value: 'ukraine', label: 'Ukraine' },
  { value: 'united_arab_emirates', label: 'United Arab Emirates' },
  { value: 'united_kingdom', label: 'United Kingdom' },
  { value: 'united_states', label: 'United States' },
  { value: 'uruguay', label: 'Uruguay' },
  { value: 'uzbekistan', label: 'Uzbekistan' },
  { value: 'vanuatu', label: 'Vanuatu' },
  { value: 'vatican_city', label: 'Vatican City' },
  { value: 'venezuela', label: 'Venezuela' },
  { value: 'vietnam', label: 'Vietnam' },
  { value: 'yemen', label: 'Yemen' },
  { value: 'zambia', label: 'Zambia' },
  { value: 'zimbabwe', label: 'Zimbabwe' }
];

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