import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Home, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const RegistrationConfirmation = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full"
      >
        <Card className="p-10 text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-serif font-bold">
            {t("registrationConfirmation.title")}
          </h1>

          <div className="space-y-4 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              {t("registrationConfirmation.received")}
            </p>
            <p className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              {t("registrationConfirmation.emailSent")}
            </p>
            <p className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              {t("registrationConfirmation.nextSteps")}
            </p>
          </div>

          <Button
            onClick={() => navigate(`/${i18n.language}`)}
            className="mt-4"
          >
            <Home className="w-4 h-4 mr-2" />
            {t("registrationConfirmation.backHome")}
          </Button>
        </Card>
      </motion.div>
    </div>
  );
};

export default RegistrationConfirmation;
