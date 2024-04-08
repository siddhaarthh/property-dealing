"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDebounce } from "use-debounce";

function SearchForm() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const category = searchParams.get("category");
  const priceProperty = searchParams.get("price");
  const [searchText, setSearchText] = useState(search || "");
  const [propertyType, setPropertyType] = useState(category || "");
  const [price, setPrice] = useState(priceProperty || "");

  const router = useRouter();
  const [query] = useDebounce(searchText, 500);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const queryParams = new URLSearchParams();
    if (query) {
      queryParams.set("search", query);
    }

    if (propertyType) {
      queryParams.set("category", propertyType);
    }

    if (price) {
      queryParams.set("price", price);
    }

    const queryString = queryParams.toString();

    const url = queryString && "/properties?" + queryString;

    router.push(url);
  }, [query, price, propertyType, router]);

  return (
    <div className="mx-auto flex flex-col justify-center gap-3 px-5 md:flex-row ">
      <input
        type="text"
        placeholder="Enter keyword or location"
        className="w-full rounded-lg px-3  py-4 text-primary-500 outline-none "
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select
        className="rounded-lg px-3 py-2  text-primary-500 outline-none md:w-2/4 "
        onChange={(e) => setPropertyType(e.target.value)}
        defaultValue={"all"}
        aria-label="category"
      >
        <option value="all" disabled>
          Category
        </option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="villa">Villa</option>
        <option value="condo">Condo</option>
      </select>

      <select
        className="rounded-lg px-3 py-2  text-primary-500 outline-none md:w-2/4 "
        onChange={(e) => setPrice(e.target.value)}
        defaultValue={"all"}
        aria-label="price"
      >
        <option value="all" disabled>
          Price
        </option>
        <option value="lowToHigh">Cost : Low to High</option>
        <option value="highToLow">Cost : Hight to Low</option>
      </select>
    </div>
  );
}

export default SearchForm;
