import Image from "next/image";
import React from "react";
import SearchBox from "./SearchBox";
import heroImg from "@/assets/hero-image.png";

function HeroSection() {
  return (
    <section className="relative mb-10 w-full pt-5 lg:px-[10rem]">
      <Image
        className="w-full"
        src={heroImg}
        width={0}
        height={0}
        alt="hero image"
      />

      <SearchBox />
    </section>
  );
}

export default HeroSection;
