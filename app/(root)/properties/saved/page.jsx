"use client";

import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";
import PropertyCard from "@/components/PropertyCard";

function SavedProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const response = await fetch("/api/bookmarks");
        if (response.ok) {
          const data = await response.json();
          setProperties(data);
        } else {
          const data = await response.json();
          toast.error(data.message || "Failed to fetch properties");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSavedProperties();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="relative mx-auto mb-10 w-full  xl:w-[80%]">
      <h1 className="mb-4 text-center text-2xl font-semibold uppercase text-primary-500 lg:pt-5">
        Saved Properties
      </h1>

      <div className="grid-col-1 grid gap-10 px-5 md:grid-cols-2 lg:px-0 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
}

export default SavedProperties;
