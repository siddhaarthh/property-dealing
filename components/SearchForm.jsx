"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "" && propertyType === "all") {
      router.push("/properties");
    } else {
      const query = `?location=${searchText}&propertyType=${propertyType}`;
      router.push(`/properties/search-results${query}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto mt-5 flex flex-col justify-center gap-3 px-5 md:flex-row xl:w-[50%]">
        <input
          type="text"
          placeholder="Enter keyword or location"
          className="rounded-lg px-3 py-2 text-primary-500 outline-none md:w-1/2 md:px-3 md:py-3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          value={propertyType}
          className="rounded-lg px-3 py-2  text-primary-500 outline-none md:w-1/4"
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="condo">Condo</option>
        </select>

        <button className=" rounded-lg bg-blue-500 px-5 py-2 text-lg text-white">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
