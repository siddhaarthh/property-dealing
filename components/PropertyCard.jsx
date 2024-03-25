import Image from "next/image";
import React from "react";
import bed from "@/assets/bed.svg";
import bath from "@/assets/bath.svg";
import parking from "@/assets/parking.svg";
import Link from "next/link";

import BookmarkButton from "./BookmarkButton";

function PropertyCard({ property }) {
  // write a function to trim the description to 100 characters
  // and add ... at the end

  function trimDescription(description) {
    if (description.length > 170) {
      return description.slice(0, 170) + "... more";
    }
    return description;
  }
  return (
    <div className=" flex h-max flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-md ">
      <Link href={`/properties/${property._id}`}>
        <Image
          src={property.propertyImages[2]}
          width={400}
          height={600}
          alt="property image"
          className="rounded-2xl object-center"
        />

        <div className="mt-2 flex w-full flex-col gap-2  border-b-2 px-1 pb-4">
          <div>
            <h5 className="font-playfair text-[18px] font-[700] text-primary md:text-[22px]">
              {property.name}
            </h5>
            <p className="text-[20px]">CZK {property.price}</p>
          </div>
          <p className="text-justify text-gray-500  ">
            {trimDescription(property.description)}
          </p>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <Image src={bed} width={25} height={0} alt="bed icon" />
              <span className="text-lg">{property.details.bedrooms}</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src={bath} width={25} height={0} alt="bath icon" />
              <span className="text-lg">{property.details.bathrooms}</span>
            </div>
            <div className="flex items-center gap-3">
              <Image src={parking} width={25} height={0} alt="car icon" />
              <span className="text-lg capitalize">
                {property.details.parking}
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex w-full justify-between px-2">
        <div className="flex items-center gap-3">
          <Image
            src={property?.user?.image}
            width={40}
            height={40}
            alt="user picture"
            className="rounded-full"
          />
          <span>{property?.user?.name}</span>
        </div>

        <BookmarkButton property={property} />
      </div>
    </div>
  );
}

export default PropertyCard;
