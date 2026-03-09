import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Upload, User, Mail, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegistrationData } from "@/pages/JoinGames";

interface PersonalInfoStepProps { fullName: string; email: string; avatarFile?: File; onUpdate: (data: Partial<RegistrationData>) => void; }

const PersonalInfoStep = ({ fullName, email, avatarFile, onUpdate }: PersonalInfoStepProps) => {
  const { t } = useTranslation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) { alert(t("personalInfo.invalidImage")); return; }
      if (file.size > 5 * 1024 * 1024) { alert(t("personalInfo.imageTooLarge")); return; }
      onUpdate({ avatarFile: file });
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          {t("personalInfo.title")} <span style={{ color: "#e76830" }}>{t("personalInfo.titleAccent")}</span>
        </h2>
        <p className="text-muted-foreground text-lg">{t("personalInfo.subtitle")}</p>
      </div>
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center">
          <Label className="text-base font-medium mb-4 block">{t("personalInfo.profilePicture")}</Label>
          <div className="relative inline-block">
            <motion.div className="w-24 h-24 rounded-full border-2 border-dashed border-border bg-secondary flex items-center justify-center cursor-pointer overflow-hidden" onClick={() => fileInputRef.current?.click()} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {previewUrl ? <img src={previewUrl} alt={t("personalInfo.avatarPreview")} className="w-full h-full object-cover" /> : (
                <div className="text-center"><Camera className="w-8 h-8 text-muted-foreground mx-auto mb-1" /><span className="text-xs text-muted-foreground">{t("personalInfo.addPhoto")}</span></div>
              )}
            </motion.div>
            {(previewUrl || avatarFile) && (
              <motion.div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                <Upload className="w-3 h-3 text-primary-foreground" />
              </motion.div>
            )}
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          <p className="text-xs text-muted-foreground mt-2">{t("personalInfo.imageFormat")}</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName" className="flex items-center gap-2 text-base font-medium"><User className="w-4 h-4" />{t("personalInfo.fullName")}</Label>
          <Input id="fullName" type="text" value={fullName} onChange={(e) => onUpdate({ fullName: e.target.value })} placeholder={t("personalInfo.fullNamePlaceholder")} className="text-base" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2 text-base font-medium"><Mail className="w-4 h-4" />{t("personalInfo.email")}</Label>
          <Input id="email" type="email" value={email} onChange={(e) => onUpdate({ email: e.target.value })} placeholder={t("personalInfo.emailPlaceholder")} className="text-base" required />
          <p className="text-xs text-muted-foreground">{t("personalInfo.emailNote")}</p>
        </div>
      </div>
      {fullName && email && (
        <motion.div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20 text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-sm text-primary font-medium">{t("personalInfo.profileReady")} <strong>{fullName}</strong></p>
        </motion.div>
      )}
    </div>
  );
};

export default PersonalInfoStep;