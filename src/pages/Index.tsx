import HeroSection from "@/components/HeroSection";
import PortalSection from "@/components/PortalSection";
import CharactersSection from "@/components/CharactersSection";
import GamesSection from "@/components/GamesSection";
import WorldMapSection from "@/components/WorldMapSection";

import ExperienceSection from "@/components/ExperienceSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PortalSection />
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
