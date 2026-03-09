import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { GameRole } from "@/pages/JoinGames";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface RoleConfig {
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

interface RoleSelectionStepProps {
  selectedRole?: GameRole;
  onRoleSelect: (role: GameRole) => void;
  roleConfig: Record<GameRole, RoleConfig>;
}

const RoleSelectionStep = ({ selectedRole, onRoleSelect, roleConfig }: RoleSelectionStepProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Choose your <span style={{ color: "#e76830" }}>Character</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Each role brings a unique contribution to the Yonyverse. Select the one that resonates most with you.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="role-select" className="text-base font-medium">
            Your Role in the Yonyverse
          </Label>
          <Select
            value={selectedRole || ""}
            onValueChange={(value) => onRoleSelect(value as GameRole)}
          >
            <SelectTrigger id="role-select" className="h-14 text-left">
              <SelectValue placeholder="Select a character role..." />
            </SelectTrigger>
            <SelectContent>
              {(Object.entries(roleConfig) as [GameRole, RoleConfig][]).map(([roleKey, config]) => {
                const Icon = config.icon;
                return (
                  <SelectItem key={roleKey} value={roleKey} className="py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${config.color}20` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: config.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-foreground">
                          {config.name}
                        </div>
                        <div className="text-sm text-muted-foreground truncate">
                          {config.description}
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {selectedRole && (
          <motion.div
            className="p-6 rounded-lg bg-primary/10 border border-primary/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-1"
                style={{ backgroundColor: `${roleConfig[selectedRole].color}20` }}
              >
                {(() => {
                  const Icon = roleConfig[selectedRole].icon;
                  return <Icon className="w-6 h-6" style={{ color: roleConfig[selectedRole].color }} />;
                })()}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-serif font-semibold text-primary mb-2">
                  {roleConfig[selectedRole].name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {roleConfig[selectedRole].description}
                </p>
                {selectedRole.startsWith('yony_flowers') && (
                  <div className="mt-3 inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                    Country Flower
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default RoleSelectionStep;
