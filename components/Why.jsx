import Image from "next/image";
import React from "react";
import pattern from "@/assets/pattern.svg";
import whyMan from "@/assets/why-man.svg";
import star from "@/assets/star.svg";
import service from "@/assets/service.svg";
import badge from "@/assets/badge-percent.svg";
import WhyCard from "./WhyCard";

function Why() {
  return (
    <section className="relative mx-auto w-[1200px] ">
      <Image
        src={pattern}
        width={100}
        height={0}
        alt="pattern icon"
        className="absolute -top-24 right-0 z-0"
      />

      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-10">
          <div>
            <h3 className=" mb-2 font-playfair text-[40px] font-[700] text-primary">
              Why should you Choose us ?
            </h3>
            <p className=" text-gray-600">
              Exceptional service, diverse properties, and personalized support
              for <br /> unforgettable rental experiences. Everything you need
              for a <br /> seamless rental experience.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <WhyCard
              src={star}
              title={"Best Platform"}
              description={
                "Experience a seamless rental world with our state-of-the-art platform, offering user-friendly tools, vast listings, and dedicated support."
              }
              alt={"star icon"}
            />

            <WhyCard
              src={service}
              title={"Guaranteed Service"}
              description={
                "we stand behind our promise of exceptional service. With our service guarantee, your satisfaction is assured every step of the way."
              }
              alt={"service icon"}
            />

            <WhyCard
              src={badge}
              title={"Best Rates"}
              description={
                "Premium value, unbeatable rates, Satisfaction guaranteed. Experience excellence and affordability with our best price guarantee."
              }
              alt={"badge icon"}
            />
          </div>
        </div>
        <Image
          src={whyMan}
          width={570}
          height={800}
          priority={true}
          alt="man standing and showing thumbs up"
        />
      </div>
    </section>
  );
}

export default Why;
