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
    <section className="relative mx-auto mt-10 flex w-full flex-col items-center md:mt-0 md:w-[80%] md:px-3 ">
      <Image
        src={pattern}
        width={100}
        height={0}
        alt="pattern icon"
        className="absolute -right-[12%] -top-20 z-0 hidden lg:flex lg:w-[100px] xl:right-0"
      />

      <div className="w-full justify-between lg:flex ">
        <div className="flex flex-col gap-10 p-5 md:items-start">
          <div className="w-5/6 ">
            <h3 className=" mb-2 whitespace-nowrap  font-playfair text-[26px]  font-[700] sm:text-[30px] md:text-[36px]">
              Why should you Choose us ?
            </h3>
            <p className="w-full text-gray-600 md:w-max">
              Exceptional service, diverse properties and personalized support
              for <br className="hidden md:block" /> unforgettable rental
              experiences. Everything you need for a
              <br className="hidden md:block" /> seamless rental experience.
            </p>
          </div>

          <div className="flex flex-col  gap-12 md:items-start">
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
          className="mt-10 w-[100%] justify-self-center md:mt-0 lg:w-[80%]"
          src={whyMan}
          width={0}
          height={0}
          priority={true}
          alt="man standing and showing thumbs up"
        />
      </div>
    </section>
  );
}

export default Why;
