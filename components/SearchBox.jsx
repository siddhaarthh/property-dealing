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
    <div className="absolute -bottom-[4%] right-[18%] flex w-[65%]  items-center gap-8 rounded-xl bg-primary-500 p-5">
      <div className="flex w-[90%] gap-3">
        <SearchProperty
          src={locationIcon}
          label={"Location"}
          htmlFor={"location"}
          option={[
            "Miami, United State",
            "California, United State",
            "New York, United State",
            "New Jersey, United State",
          ]}
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
          label={"Property Type"}
          htmlFor={"property"}
          option={["Apartment", "House", "Condo", "Villa"]}
          selectIcon={selectProperty}
          setState={setProperty}
          state={property}
        />
      </div>
      <button className="border-none bg-transparent">
        <Image src={search} width={50} height={50} alt="search icon" />
      </button>
    </div>
  );
}

export default SearchBox;
