import { useTranslation } from "react-i18next";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface EngagementStepProps {
  contributionTypes: string[];
  areasOfInterest: string[];
  roleIdentity: string;
  optionalMessage: string;
  onUpdate: (data: Partial<{
    contributionTypes: string[];
    areasOfInterest: string[];
    roleIdentity: string;
    optionalMessage: string;
  }>) => void;
}

const CONTRIBUTION_KEYS = [
  "shareKnowledge",
  "connectPartners",
  "growCommunity",
  "promote",
  "strategicDev",
  "contributeCreatively",
  "other",
] as const;

const INTEREST_KEYS = [
  "culture",
  "education",
  "socialImpact",
  "environment",
  "innovation",
  "globalCollaboration",
] as const;

const ROLE_KEYS = [
  "creator",
  "connector",
  "builder",
  "explorer",
  "strategist",
] as const;

const EngagementStep = ({
  contributionTypes,
  areasOfInterest,
  roleIdentity,
  optionalMessage,
  onUpdate,
}: EngagementStepProps) => {
  const { t } = useTranslation();

  const toggleContribution = (key: string) => {
    const updated = contributionTypes.includes(key)
      ? contributionTypes.filter((k) => k !== key)
      : [...contributionTypes, key];
    onUpdate({ contributionTypes: updated });
  };

  const toggleInterest = (key: string) => {
    const updated = areasOfInterest.includes(key)
      ? areasOfInterest.filter((k) => k !== key)
      : [...areasOfInterest, key];
    onUpdate({ areasOfInterest: updated });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          {t("engagementStep.title")}{" "}
          <span style={{ color: "#e76830" }}>{t("engagementStep.titleAccent")}</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          {t("engagementStep.subtitle")}
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1 – Contribution Type */}
        <div className="space-y-3">
          <Label className="text-base font-medium">
            {t("engagementStep.contributionTitle")}
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CONTRIBUTION_KEYS.map((key) => (
              <label
                key={key}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <Checkbox
                  checked={contributionTypes.includes(key)}
                  onCheckedChange={() => toggleContribution(key)}
                />
                <span className="text-sm">{t(`engagementStep.contributions.${key}`)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Section 2 – Areas of Interest */}
        <div className="space-y-3">
          <Label className="text-base font-medium">
            {t("engagementStep.interestsTitle")}
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {INTEREST_KEYS.map((key) => (
              <label
                key={key}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <Checkbox
                  checked={areasOfInterest.includes(key)}
                  onCheckedChange={() => toggleInterest(key)}
                />
                <span className="text-sm">{t(`engagementStep.interests.${key}`)}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Section 3 – Role Identity */}
        <div className="space-y-3">
          <Label className="text-base font-medium">
            {t("engagementStep.roleTitle")}
          </Label>
          <RadioGroup
            value={roleIdentity}
            onValueChange={(value) => onUpdate({ roleIdentity: value })}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {ROLE_KEYS.map((key) => (
              <label
                key={key}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                <RadioGroupItem value={key} />
                <span className="text-sm">{t(`engagementStep.roles.${key}`)}</span>
              </label>
            ))}
          </RadioGroup>
        </div>

        {/* Section 4 – Optional message */}
        <div className="space-y-2">
          <Label htmlFor="optional-message" className="text-base font-medium">
            {t("engagementStep.optionalTitle")}
          </Label>
          <p className="text-sm text-muted-foreground">
            {t("engagementStep.optionalDesc")}
          </p>
          <Textarea
            id="optional-message"
            value={optionalMessage}
            onChange={(e) => onUpdate({ optionalMessage: e.target.value })}
            placeholder={t("engagementStep.optionalPlaceholder")}
            className="min-h-20 resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default EngagementStep;
