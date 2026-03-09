import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CharactersSection from "@/components/CharactersSection";
import GamesSection from "@/components/GamesSection";
import WorldMapSection from "@/components/WorldMapSection";
import ExperienceSection from "@/components/ExperienceSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead titleKey="seo.homeTitle" descriptionKey="seo.homeDescription" />
      <Navbar />
      <HeroSection />
      <CharactersSection />
      <GamesSection />
      <WorldMapSection />
      <JoinSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;
