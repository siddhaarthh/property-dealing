import GetStartedText from "@/components/GetStartedText";
import HeroSection from "@/components/HeroSection";
import PropertyHome from "@/components/PropertyHome";
import Why from "@/components/Why";

export default function Home() {
  return (
    <main className="mb-2 ">
      {/* <GetStartedText /> */}
      <HeroSection />
      <Why />

      <PropertyHome />
    </main>
  );
}
