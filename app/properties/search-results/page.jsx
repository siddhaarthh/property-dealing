"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function SearchResultPage() {
  const searchParams = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = searchParams.get("location");
  const propertyType = searchParams.get("propertyType");

  useEffect(() => {
    async function fetchSearchedProperties() {
      try {
        const response = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }

        const data = await response.json();
        setProperties(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchSearchedProperties();
  }, [location, propertyType]);

  console.log(properties);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>SearchResultPage</div>;
}

export default SearchResultPage;
