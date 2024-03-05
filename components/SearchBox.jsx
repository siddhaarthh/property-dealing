"use client";

import search from "@/assets/search-icon.svg";
import SearchProperty from "@/components/SearchProperty";
import locationIcon from "@/assets/location-icon.svg";
import priceIcon from "@/assets/price-icon.svg";
import propertyIcon from "@/assets/property-icon.svg";
import selectLocation from "@/assets/location-icon-black.svg";
import selectPrice from "@/assets/price-icon-black.svg";
import selectProperty from "@/assets/property-icon-black.svg";
import Image from "next/image";

import React, { useState } from "react";

function SearchBox() {
  const [location, setLocation] = useState("Select Location");
  const [price, setPrice] = useState("Select Price");
  const [property, setProperty] = useState("Select Property");

  return (
    <div className="absolute -bottom-[40%] right-[5%] flex w-[90%] items-center gap-8 rounded-xl bg-primary-500 p-5  sm:w-[85%] md:-bottom-[8%] md:right-[11%] md:w-[80%]">
      <div className="flex w-full flex-col gap-2 md:flex-row md:gap-2 lg:w-[90%] lg:gap-3">
        <SearchProperty
          src={locationIcon}
          label={"Location"}
          htmlFor={"location"}
          option={["Miami", "California", "New York", "New Jersey"]}
          selectIcon={selectLocation}
          setState={setLocation}
          state={location}
        />

        <SearchProperty
          src={priceIcon}
          label={"Price"}
          htmlFor={"price"}
          option={["$100,000", "$200,000", "$300,000", "$400,000"]}
          selectIcon={selectPrice}
          setState={setPrice}
          state={price}
        />

        <SearchProperty
          src={propertyIcon}
          label={"Property"}
          htmlFor={"property"}
          option={["Apartment", "House", "Condo", "Villa"]}
          selectIcon={selectProperty}
          setState={setProperty}
          state={property}
        />
      </div>
      <button className="rounded-2xl border-none bg-transparent ">
        <Image
          src={search}
          width={0}
          height={0}
          alt="search icon"
          className=" w-[45px] md:w-[45px] lg:w-[45px] xl:w-[50px]"
        />
      </button>
    </div>
  );
}

export default SearchBox;
