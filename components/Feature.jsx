import Image from "next/image";
import React from "react";
import pattern from "@/assets/pattern2.svg";
import featureProperty from "@/assets/featureProperty.svg";
import bed from "@/assets/bed-white.svg";
import bath from "@/assets/bath-white.svg";
import parking from "@/assets/parking-white.svg";

function Feature() {
  return (
    <section className="relative mx-auto w-full px-5  md:mb-24 md:w-[80%] md:px-0">
      <div className="absolute left-0 top-0 hidden lg:block">
        <Image src={pattern} width={0} height={0} alt="pattern image" />
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-10">
        <div className="mt-10  text-center">
          <h3 className="font-playfair text-[40px] font-[700] text-primary">
            Featured Properties
          </h3>
          <p className="text-gray-500 sm:text-xl md:text-2xl">
            Discover our featured property, a gem in the heart of the city.{" "}
            <br className="hidden md:block" /> With luxury amenities and
            breathtaking views, it&apos;s your dream home.
          </p>
        </div>

        <div className="w-full ">
          <div className="relative">
            <Image
              className="w-full rounded-lg object-cover"
              src={featureProperty}
              width={0}
              height={0}
              alt="pattern image"
            />
          </div>

          <div className=" -bottom-20 right-24 flex  flex-col items-start  gap-3 rounded-b-xl bg-primary-500 p-6 text-white md:absolute md:rounded-xl lg:w-max lg:gap-3">
            <h5 className=" font-playfair text-lg  font-bold lg:text-[24px]">
              Modern luxury sea view villa sale in California
            </h5>
            <p className="text-[18px]">$20,000,000</p>
            <p>
              Experience coastal luxury in California&apos;s modern sea view
              villa.
            </p>

            <div className="flex items-start justify-center gap-5">
              <div className="flex items-center gap-3">
                <Image src={bed} width={24} height={0} alt="bed icon" />
                <span className="text-lg">5</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src={bath} width={24} height={0} alt="bath icon" />
                <span className="text-lg">6</span>
              </div>
              <div className="flex items-center gap-3">
                <Image src={parking} width={24} height={0} alt="car icon" />
                <span className="text-lg">3</span>
              </div>
            </div>
            <button className="rounded-xl border-2 px-3 py-2 lg:mt-6 lg:px-6 lg:py-3">
              More Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
