import Feature from "@/components/Feature";
import GetStartedText from "@/components/GetStartedText";
import Hero from "@/components/Hero";
import HeroSection from "@/components/HeroSection";
import OurAgents from "@/components/OurAgents";
import PropertyHome from "@/components/PropertyHome";
import StartNow from "@/components/StartNow";

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      {/* <HeroSection /> */}
      <Hero />
      <StartNow />
      <PropertyHome />
      <Feature />
      <OurAgents />
    </main>
  );
}
