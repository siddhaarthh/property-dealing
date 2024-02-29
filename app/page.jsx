import Feature from "@/components/Feature";
import GetStartedText from "@/components/GetStartedText";
import HeroSection from "@/components/HeroSection";
import OurAgents from "@/components/OurAgents";
import PropertyHome from "@/components/PropertyHome";
import Why from "@/components/Why";

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      {/* <GetStartedText /> */}
      <HeroSection />
      <Why />

      <PropertyHome />

      <Feature />
      <OurAgents />
    </main>
  );
}
