import Image from "next/image";
import React from "react";
import bed from "@/assets/bed.svg";
import bath from "@/assets/bath.svg";
import parking from "@/assets/parking.svg";
import user from "@/assets/user.svg";
import plus from "@/assets/plus.svg";
import favorite from "@/assets/favorite.svg";
import share from "@/assets/share.svg";
import Link from "next/link";

function PropertyCard({ property }) {
  return (
    <div className=" flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-md ">
      <Link href={`/properties/${property._id}`}>
        <Image
          src={`/assets/propertyImages/${property.images[1]}.jpg`}
          width={400}
          height={500}
          alt="property image"
          className="rounded-2xl object-contain"
        />
        <div className="mt-2 flex w-full flex-col gap-2 border-b-2 px-1 pb-4">
          <h5 className="font-playfair text-[22px] font-[700] text-primary">
            {property.name}
          </h5>
          <p className="text-[20px]">${property.price}</p>
          <p className="text-gray-500">{property.description}</p>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Image src={bed} width={25} height={0} alt="bed icon" />
              <span className="text-lg">{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src={bath} width={25} height={0} alt="bath icon" />
              <span className="text-lg">{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src={parking} width={25} height={0} alt="car icon" />
              <span className="text-lg">{property.parking}</span>
            </div>
          </div>
        </div>
      </Link>

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
