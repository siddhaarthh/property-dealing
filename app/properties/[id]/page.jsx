import { getSingleProperty } from "@/utils/propertyHandler";
import Image from "next/image";
import selectLocation from "/assets/location-icon-black.svg";
import Buttons from "@/components/Buttons";
import PropertyMap from "@/components/PropertyMap";

import PropertyImages from "@/components/PropertyImages";
import React from "react";

async function PropertiesDetails({ params }) {
  const property = await getSingleProperty(params.id);
  if (!property) {
    return <div>Property not found</div>;
  }

  function makeParagraphs(description) {
    const paragraphs = description.split("\n");
    return paragraphs.map((paragraph, index) => (
      <React.Fragment key={index}>
        {paragraph}
        <br />
      </React.Fragment>
    ));
  }

  return (
    <section className="mb-24 px-5 lg:px-0">
      {/* property image */}
      <div className="mx-auto mb-5 lg:w-full">
        <Image
          src={property?.propertyImages[3]}
          height={0}
          width={1200}
          alt="property image"
          className="relative h-[300px] w-full rounded-xl object-cover object-center md:h-[500px] md:rounded-none"
          priority={true}
        />
      </div>

      {/* property details */}
      <div className="mx-auto mb-10 flex flex-col gap-2 lg:w-[80%] lg:flex-row">
        <div className="mb-2 flex w-full flex-col justify-center gap-2 md:mb-0">
          <h4 className=" font-playfair text-3xl">{property?.name}</h4>
          <div className="flex items-center gap-2">
            <Image
              src={selectLocation}
              width={20}
              height={20}
              alt="location icon"
              className="inline-block"
            />
            <span>
              {property.location.street}, {property.location.city},
              {property.location.state},{property.location.zipCode}
            </span>
          </div>
          <p className="text-2xl font-bold">CZK {property.price}</p>
        </div>

        {/* buttons */}
        <div className="flex items-center gap-2 self-start">
          <Buttons property={property} />
        </div>
      </div>

      {/* property details */}

      <div className="mx-auto flex flex-col gap-20  lg:w-[80%] lg:flex-row">
        <div className="w-full lg:w-4/6">
          <div className="mb-4 flex  items-center gap-5 border-b-2 pb-3 ">
            <h3 className="text-2xl font-bold">Description</h3>
          </div>
          <p className="mb-10 text-justify text-lg">
            {makeParagraphs(property.description)}
          </p>

          <h6 className=" mb-5 text-xl font-bold">Details</h6>

          <div className="mb-10 flex flex-col justify-between   sm:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-10">
                <p className="font-bold">Built Up Area (sqft):</p>
                <p>{property.details.builtUpArea}</p>
              </div>
              <div className="flex justify-between gap-10">
                <p className="font-bold">Carpet Area (sqft):</p>
                <p>{property.details.carpetArea}</p>
              </div>
              <div className="flex justify-between gap-10 capitalize">
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

            <div className="flex flex-col gap-2 capitalize">
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

          {/* Property Images */}

          <h6 className=" mb-5 text-xl font-bold">Property Images</h6>

          <PropertyImages property={property} />

          {/* features */}

          <div>
            <h6 className="mb-5 text-xl font-bold">Amenities</h6>
            <div
              className={`mx-auto mb-10 grid gap-y-8 ${property?.amenities?.length >= 3 ? "grid-cols-3" : "grid-col-2"}`}
            >
              {property?.amenities?.map((amenities, index) => {
                // Extracting the first word from the feature sentence
                const image = amenities.split(" ")[0];

                return (
                  <div
                    className=" flex flex-col items-center gap-1 rounded-xl md:w-1/2"
                    key={index}
                  >
                    {/* Using the first word as the filename for the image */}
                    <Image
                      src={`/assets/features/${image}.svg`}
                      height={30}
                      width={30}
                      alt="images"
                    />
                    <p>{amenities}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* floor plan */}

          <h6 className=" mb-5 text-xl font-bold">Floor Plan</h6>

          <div
            className={`mx-auto mb-10 grid gap-x-4 gap-y-4 ${property.floorPlanImages.length >= 2 ? "grid-cols-2" : "grid-cols-1"}`}
          >
            {property.floorPlanImages.map((image, index) => (
              <div
                key={index}
                className={` ${
                  property.floorPlanImages.length === 3 && index === 2
                    ? "col-span-2"
                    : "col-span-1"
                } `}
              >
                <Image
                  key={index}
                  src={image}
                  width={0}
                  height={0}
                  sizes="100%"
                  alt="property image"
                  className=" w-full
                   rounded-xl object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Location */}
          <h6 className=" mb-5 text-xl font-bold">Location</h6>

          {/* <PropertyMap /> */}
          <PropertyMap property={property} />
        </div>

        {/* left side  */}
        <div className="h-max rounded-lg px-5  lg:w-2/6">
          <h6 className=" mb-5 text-xl font-bold uppercase">Schedule a tour</h6>

          <div className="mb-5 flex items-center gap-5 border-b-2 pb-4 ">
            <Image
              src={`/assets/agents/agent1.svg`}
              width={70}
              height={70}
              alt="woman agent image"
              className="rounded-xl"
            />

            <div className="flex flex-col justify-center gap-2">
              <h6 className="text-2xl font-bold">Leasie Willions</h6>
              <p className="text-gray-500">Real Estate Agent</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="w-full">
              <label htmlFor="name" className="mb-2 font-bold">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="mb-2 font-bold">
                Email
              </label>
              <input
                id="email"
                type="text"
                className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="w-full">
              <label htmlFor="phoneNumber" className="mb-2 font-bold">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="number"
                className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="w-full">
              <label htmlFor="message" className="mb-2 font-bold">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                className="h-[100px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
                placeholder="Enter Your Message"
              />
            </div>

            <button className="rounded-xl bg-primary-500 p-3 text-white">
              Send a request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertiesDetails;
