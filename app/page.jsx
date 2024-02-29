import Feature from "@/components/Feature";
import HeroSection from "@/components/HeroSection";
import OurAgents from "@/components/OurAgents";
import PropertyHome from "@/components/PropertyHome";
import Reviews from "@/components/Reviews";
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
      <Reviews />
    </main>
  );
}
