import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import JoinGames from "./pages/JoinGames";
import RegistrationConfirmation from "./pages/RegistrationConfirmation";
import AdminRegistrations from "./pages/AdminRegistrations";
import NotFound from "./pages/NotFound";
import { routeSlugs } from "./i18n";

const queryClient = new QueryClient();

const supportedLangs = ["en", "fr", "es", "pt"];

function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && supportedLangs.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <>{children}</>;
}

function LangRedirect() {
  const { i18n } = useTranslation();
  const detectedLang = supportedLangs.includes(i18n.language?.substring(0, 2))
    ? i18n.language.substring(0, 2)
    : "en";
  return <Navigate to={`/${detectedLang}`} replace />;
}

function JoinRedirect() {
  const { lang } = useParams<{ lang: string }>();
  const effectiveLang = lang && supportedLangs.includes(lang) ? lang : "en";
  const slug = routeSlugs[effectiveLang]?.["join-games"] || "join";
  return <Navigate to={`/${effectiveLang}/${slug}`} replace />;
}

function JoinGamesRoute() {
  return (
    <LanguageWrapper>
      <JoinGames />
    </LanguageWrapper>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root redirect based on browser language */}
          <Route path="/" element={<LangRedirect />} />

          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<LanguageWrapper><Index /></LanguageWrapper>} />
          
          {/* Join routes for all languages */}
          <Route path="/:lang/join" element={<JoinGamesRoute />} />
          <Route path="/:lang/rejoindre" element={<JoinGamesRoute />} />
          <Route path="/:lang/unirse" element={<JoinGamesRoute />} />
          <Route path="/:lang/juntar-se" element={<JoinGamesRoute />} />

          {/* Registration confirmation */}
          <Route path="/:lang/registration-confirmation" element={<LanguageWrapper><RegistrationConfirmation /></LanguageWrapper>} />
          <Route path="/registration-confirmation" element={<RegistrationConfirmation />} />

          {/* Admin */}
          <Route path="/admin/registrations" element={<AdminRegistrations />} />

          {/* Legacy redirect */}
          <Route path="/join-games" element={<JoinRedirect />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
