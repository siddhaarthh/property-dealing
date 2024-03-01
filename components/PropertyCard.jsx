import Image from "next/image";
import React from "react";
import property1 from "@/assets/propertyImages/property1.jpg";
import bed from "@/assets/bed.svg";
import bath from "@/assets/bath.svg";
import parking from "@/assets/parking.svg";
import user from "@/assets/user.svg";
import plus from "@/assets/plus.svg";
import favorite from "@/assets/favorite.svg";
import share from "@/assets/share.svg";

function PropertyCard() {
  return (
    <div className=" flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-md ">
      <Image
        src={property1}
        width={0}
        height={0}
        alt="property image"
        className="h-full w-full rounded-2xl object-cover"
      />

      <div className="mt-2 flex flex-col gap-2 border-b-2 px-1 pb-4">
        <h5 className="font-playfair text-[18px] font-[700] text-primary md:text-[22px]">
          Luxury Apartment in California
        </h5>
        <p className="text-[20px]">$250000</p>
        <p className="text-gray-500">
          Charming studio apartment with stunning city views, modern amenities,
          and convenient location. Ideal for urban living and relaxation.
        </p>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <Image src={bed} width={25} height={0} alt="bed icon" />
            <span className="text-lg">2</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={bath} width={25} height={0} alt="bath icon" />
            <span className="text-lg">1</span>
          </div>
          <div className="flex items-center gap-3">
            <Image src={parking} width={25} height={0} alt="car icon" />
            <span className="text-lg">1</span>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between px-2">
        <div className="flex items-center gap-3">
          <Image src={user} width={40} height={40} alt="user picture" />
          <span>Alexa Mate</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-xl border bg-[#a4a6ac0f]  p-[6px]">
            <Image src={plus} width={30} height={30} alt="plus icon" />
          </button>
          <button className="rounded-xl border bg-[#a4a6ac0f] p-2">
            <Image src={favorite} width={25} height={25} alt="plus icon" />
          </button>
          <button className="rounded-xl border bg-[#a4a6ac0f] p-2">
            <Image src={share} width={25} height={25} alt="plus icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
