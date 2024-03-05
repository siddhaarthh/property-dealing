import BreadCrumb from "@/components/BreadCrumb";
import { getSingleProperty } from "@/utils/getPropertyHandler";
import Image from "next/image";
import selectLocation from "/assets/location-icon-black.svg";
import favorite from "@/assets/favorite.svg";
import share from "@/assets/share.svg";
import plus from "@/assets/plus.svg";

import React from "react";
import { propertyDetails } from "@/constants/constant";
import Link from "next/link";

async function PropertiesDetails({ params }) {
  const property = await getSingleProperty(params.id);

  return (
    <section className="mb-24 px-5 lg:px-0">
      {/* bread crumbs */}
      {/* <div className="mx-auto mb-2 px-3 lg:w-[80%] lg:px-0">
        <BreadCrumb />
      </div> */}

      {/* property image */}
      <div className="mx-auto mb-5 lg:w-full">
        <Image
          src={`/assets/propertyImages/image2.jpg`}
          height={0}
          width={1200}
          alt="property image"
          className="relative h-[300px] w-full object-cover object-center md:h-[500px]"
          priority={true}
        />

        {/* <div className="absolute bottom-[6%] left-[14%] hidden w-[80%] gap-5 lg:flex">
          {property.images.slice(0, 5).map((image, index) => (
            <Image
              key={index}
              src={`/assets/propertyImages/${image}.jpg`}
              width={200}
              height={0}
              alt="property image"
              className="h-[125px] rounded-xl object-cover object-center"
              priority={true}
            />
          ))}
        </div> */}
      </div>

      {/* property details */}
      <div className="mx-auto mb-10 flex flex-col gap-2 lg:w-[80%] lg:flex-row">
        <div className="flex w-full flex-col justify-center gap-2">
          <h4 className=" font-playfair text-3xl">{property.name}</h4>
          <div className="mb-2 flex items-center gap-2">
            <Image
              src={selectLocation}
              width={20}
              height={20}
              alt="location icon"
              className="inline-block"
            />
            <span>{property.address}</span>
          </div>
          <p className="text-2xl font-bold">$ {property.price}</p>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-2 self-start">
          <button className="rounded-lg border bg-[#a4a6ac0e]  p-[6px]">
            <Image src={plus} width={35} height={35} alt="plus icon" />
          </button>
          <button className="rounded-lg border bg-[#a4a6ac0e] p-2">
            <Image src={favorite} width={30} height={30} alt="plus icon" />
          </button>
          <button className="rounded-lg border bg-[#a4a6ac0e] p-2">
            <Image src={share} width={30} height={30} alt="plus icon" />
          </button>
        </div>
      </div>

      {/* property details */}

      <div className="mx-auto flex flex-col gap-20 lg:w-[80%] lg:flex-row">
        <div className="w-full lg:w-4/6">
          <div className="mb-4 flex  items-center gap-5 border-b-2 pb-3 ">
            {propertyDetails.map((detail, index) => {
              return (
                <Link
                  className=" text-xl font-bold "
                  key={index}
                  href={detail.path}
                >
                  {detail.name}
                </Link>
              );
            })}
          </div>
          <p className="mb-10 text-justify">
            Escape to a haven of tranquility in this charming cabin retreat,
            enveloped by the majesty of nature. Surrounded by towering trees and
            verdant foliage, immerse yourself in the symphony of birdsong and
            rustling leaves. Wander along meandering forest paths or bask in the
            warmth of the sun-dappled deck. Inside, the crackling fireplace
            beckons you to unwind with a good book, while the inviting ambiance
            of the outdoor hot tub promises rejuvenation under the starlit sky.
            Whether seeking solace in solitude or shared moments with loved
            ones, this idyllic woodland sanctuary offers the perfect respite
            from the demands of modern life.
          </p>

          <h6 className=" mb-5 text-xl font-bold">Details</h6>

          <div className="mb-10 flex  justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-10">
                <p className="font-bold">Built Up Area (sqft):</p>
                <p>{property.details.builtUpArea}</p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="font-bold">Carpet Area (sqft):</p>
                <p>{property.details.carpetArea}</p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="font-bold">Property Category:</p>
                <p>{property.details.propertyCategory}</p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="font-bold">Dimensions:</p>
                <p>{property.details.dimensions}</p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="font-bold">Built Year:</p>
                <p>{property.details.builtYear}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-10">
                <p className="font-bold">Bedrooms:</p>
                <p>{property.details.bedrooms}</p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="font-bold">Bathrooms:</p>
                <p>{property.details.bathrooms}</p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="font-bold">Balcony:</p>
                <p>{property.details.balcony}</p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="font-bold">Status:</p>
                <p>{property.details.status}</p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="font-bold">Parking</p>
                <p>{property.details.parking}</p>
              </div>
            </div>
          </div>

          {/* floor plan */}

          <h6 className=" mb-5 text-xl font-bold">Floor Plan</h6>

          <div className="mb-10 flex gap-5">
            {property.floorPlanImages.map((plan, index) => (
              <Image
                key={index}
                src={`/assets/propertyImages/floorplan2.jpg`}
                width={0}
                height={0}
                sizes="100%"
                alt="property image"
                className="w-1/2 rounded-xl object-cover object-center"
              />
            ))}
          </div>

          {/* Location */}
          <h6 className=" mb-5 text-xl font-bold">Location</h6>

          <Image
            src={`/assets/propertyImages/map.jpg`}
            width={650}
            height={0}
            alt="property image"
            className="w-[100%]  object-fill object-center"
          />
        </div>

        {/* left side  */}
        <div className="h-max rounded-lg px-5  lg:w-2/6">
          <h6 className=" mb-5 text-xl font-bold">Agent Details</h6>

          <div className="mb-5 flex items-center gap-5 border-b-2 pb-4 ">
            <Image
              src={`/assets/agents/agent1.svg`}
              width={70}
              height={70}
              alt="woman agent image"
              className="rounded-xl"
            />

            <div className="flex flex-col justify-center gap-2">
              <h6 className="text-2xl font-bold">John Doe</h6>
              <p className="text-gray-500">Real Estate Agent</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full">
              <p className="mb-2 font-bold">Name</p>
              <input
                type="text"
                className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-bold">Email</p>
              <input
                type="text"
                className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-bold">Phone Number</p>
              <input
                type="number"
                className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-bold">Message</p>
              <textarea
                type="text"
                className="h-[100px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Name"
              />
            </div>

            <button className="rounded-xl bg-primary-500 p-3 text-white">
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertiesDetails;
