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
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Choose your <span style={{ color: "#e76830" }}>Character</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Each role brings a unique contribution to the Yonyverse. Select the one that resonates most with you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(Object.entries(roleConfig) as [GameRole, RoleConfig][]).map(([roleKey, config]) => {
          const Icon = config.icon;
          const isSelected = selectedRole === roleKey;

          return (
            <motion.div
              key={roleKey}
              className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "border-primary bg-primary/5 shadow-lg"
                  : "border-border bg-card hover:border-primary/50 hover:shadow-md"
              }`}
              onClick={() => onRoleSelect(roleKey)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Selection indicator */}
              {isSelected && (
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.3 }}
                >
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </motion.div>
              )}

              {/* Icon */}
              <div className="mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${config.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: config.color }} />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground">
                  {config.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {config.description}
              </p>

              {/* Special indicators */}
              {roleKey.startsWith('yony_flowers') && (
                <div className="mt-3 px-2 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground inline-block">
                  Country Flower
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {selectedRole && (
        <motion.div
          className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-primary font-medium">
            ✨ Great choice! You selected: <strong>{roleConfig[selectedRole].name}</strong>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default RoleSelectionStep;
