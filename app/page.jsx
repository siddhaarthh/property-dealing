import Feature from "@/components/Feature";
import HeroSection from "@/components/HeroSection";
import OurAgents from "@/components/OurAgents";
import PropertyHome from "@/components/PropertyHome";
import StartNow from "@/components/StartNow";

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      <HeroSection />
      <StartNow />
      <PropertyHome />
      <Feature />
      <OurAgents />
    </main>
  );
}
