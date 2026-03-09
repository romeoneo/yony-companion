import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, User, Mail, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegistrationData } from "@/pages/JoinGames";

interface PersonalInfoStepProps {
  fullName: string;
  email: string;
  avatarFile?: File;
  onUpdate: (data: Partial<RegistrationData>) => void;
}

const PersonalInfoStep = ({ fullName, email, avatarFile, onUpdate }: PersonalInfoStepProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be under 5MB');
        return;
      }
      onUpdate({ avatarFile: file });
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Introduce yourself to the <span style={{ color: "#e76830" }}>Community</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          This information will help us create your profile in the Yonyverse.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Avatar Upload */}
        <div className="text-center">
          <Label className="text-base font-medium mb-4 block">Profile picture (optional)</Label>

          <div className="relative inline-block">
            <motion.div
              className="w-24 h-24 rounded-full border-2 border-dashed border-border bg-secondary flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={() => fileInputRef.current?.click()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Avatar preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-1" />
                  <span className="text-xs text-muted-foreground">Add photo</span>
                </div>
              )}
            </motion.div>

            {(previewUrl || avatarFile) && (
              <motion.div
                className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <Upload className="w-3 h-3 text-primary-foreground" />
              </motion.div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />

          <p className="text-xs text-muted-foreground mt-2">
            JPG, PNG or WEBP • Max 5MB
          </p>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="flex items-center gap-2 text-base font-medium">
            <User className="w-4 h-4" />
            Full name *
          </Label>
          <Input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => onUpdate({ fullName: e.target.value })}
            placeholder="Your first and last name"
            className="text-base"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2 text-base font-medium">
            <Mail className="w-4 h-4" />
            Email address *
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            placeholder="your@email.com"
            className="text-base"
            required
          />
          <p className="text-xs text-muted-foreground">
            We will use this address to keep you informed about the Yonyverse
          </p>
        </div>
      </div>

      {fullName && email && (
        <motion.div
          className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-primary font-medium">
            ✨ Perfect! Your profile is ready: <strong>{fullName}</strong>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PersonalInfoStep;
