import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, User, Mail, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Veuillez sélectionner une image valide');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('La taille de l\'image doit être inférieure à 5MB');
        return;
      }

      onUpdate({ avatarFile: file });
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Présentez-vous à la <span style={{ color: "#e76830" }}>Communauté</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Ces informations nous aideront à créer votre profil dans le Yonyverse.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Avatar Upload */}
        <div className="text-center">
          <Label className="text-base font-medium mb-4 block">Photo de profil (optionnelle)</Label>
          
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
                  <span className="text-xs text-muted-foreground">Ajouter</span>
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
            JPG, PNG ou WEBP • Max 5MB
          </p>
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="flex items-center gap-2 text-base font-medium">
            <User className="w-4 h-4" />
            Nom complet *
          </Label>
          <Input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => onUpdate({ fullName: e.target.value })}
            placeholder="Votre nom et prénom"
            className="text-base"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2 text-base font-medium">
            <Mail className="w-4 h-4" />
            Adresse email *
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onUpdate({ email: e.target.value })}
            placeholder="votre@email.com"
            className="text-base"
            required
          />
          <p className="text-xs text-muted-foreground">
            Nous utiliserons cette adresse pour vous tenir informé du Yonyverse
          </p>
        </div>
      </div>

      {/* Validation message */}
      {fullName && email && (
        <motion.div
          className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-sm text-primary font-medium">
            ✨ Parfait ! Votre profil est prêt : <strong>{fullName}</strong>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PersonalInfoStep;