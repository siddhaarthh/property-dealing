import Image from "next/image";
import React from "react";
import SearchBox from "./SearchBox";
import heroImg from "@/public/hero-image.png";

function HeroSection() {
  return (
    <section className="relative mx-auto mb-10 w-full  xl:w-[80%]">
      <Image
        className="w-full"
        src={heroImg}
        width={0}
        height={0}
        alt="hero image"
        priority={true}
      />

      <SearchBox />
    </section>
  );
}

export default HeroSection;
