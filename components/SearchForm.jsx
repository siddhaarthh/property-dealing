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
      <div className="mx-auto flex flex-col justify-center gap-3 px-5 md:flex-row ">
        <input
          type="text"
          placeholder="Enter keyword or location"
          className="w-full rounded-lg px-3  py-4 text-primary-500 outline-none "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          value={propertyType}
          className="rounded-lg px-3 py-2  text-primary-500 outline-none md:w-2/4 "
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="condo">Condo</option>
        </select>

        <button className="rounded-lg bg-white py-2 text-lg  text-primary-500 md:px-10">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
