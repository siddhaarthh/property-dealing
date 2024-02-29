import Image from "next/image";
import React from "react";
import pattern from "@/assets/pattern2.svg";
import featureProperty from "@/assets/featureProperty.svg";
import bed from "@/assets/bed-white.svg";
import bath from "@/assets/bath-white.svg";
import parking from "@/assets/parking-white.svg";

function Feature() {
  return (
    <section className="relative mx-auto mb-24 w-[1200px]">
      <div className="absolute left-0 top-0 ">
        <Image src={pattern} width={0} height={0} alt="pattern image" />
      </div>

      <div className="flex h-full flex-col items-center justify-center gap-10">
        <div className="mt-10  text-center">
          <h3 className="font-playfair text-[40px] font-[700] text-primary">
            Featured Properties
          </h3>
          <p className="text-gray-500">
            Discover our featured property, a gem in the heart of the city. With
            luxury amenities and breathtaking views, it&apos;s your dream home.
          </p>
        </div>

        <div className="w-full">
          <div className="relative">
            <Image
              className=" h-full w-full rounded-lg object-cover"
              src={featureProperty}
              width={0}
              height={0}
              alt="pattern image"
            />
          </div>

          <div className="b absolute -bottom-20 right-24  flex w-max  flex-col items-start gap-3 rounded-xl bg-primary-500 p-6 text-white">
            <h5 className="font-playfair text-[24px] font-bold">
              Modern luxury sea view villa sale in California
            </h5>
            <p className="text-[20px]">$20,000,000</p>
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
            <button className="mt-6 rounded-xl border-2 px-6 py-3">
              More Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
