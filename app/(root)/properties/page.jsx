import React from "react";

import PropertyCard from "@/components/PropertyCard";
import { getProperty } from "@/actions/action";
import Link from "next/link";
import SearchForm from "@/components/SearchForm";

async function Properties({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 6;

  const category = searchParams.category || "";
  const search = searchParams.search || "";
  const price = searchParams.price || "";

  const { property, totalPages } = await getProperty({
    page,
    limit,
    category,
    query: search,
    price,
  });

  return (
    <section className="w-full bg-neutral-200 py-5 md:px-5 lg:px-[10rem]">
      <div className="mb-5 w-full rounded-lg bg-primary-500 py-5">
        <SearchForm />
      </div>
      <div className="grid-col-1 grid gap-10 px-5 md:grid-cols-2 lg:px-0 xl:grid-cols-3">
        {property.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>

      {totalPages > page && (
        <div className="mt-10 flex justify-center gap-5">
          <Link
            className={`rounded bg-primary-500 px-5 text-2xl text-white ${page <= 1 && "pointer-events-none opacity-50"}`}
            href={{
              pathname: "/properties",
              query: {
                ...(search ? { search } : {}),
                page: page > 1 ? page - 1 : 1,
                ...(category ? { category } : {}),
                ...(price ? { price } : {}),
              },
            }}
          >
            Prev
          </Link>
          <Link
            className={`rounded bg-primary-500 px-5 text-2xl text-white ${page >= 2 && "pointer-events-none opacity-50"}`}
            href={{
              pathname: "/properties",
              query: {
                ...(search ? { search } : {}),
                page: page === 2 ? 2 : page + 1,
                ...(category ? { category } : {}),
                ...(price ? { price } : {}),
              },
            }}
          >
            Next
          </Link>
        </div>
      )}
    </section>
  );
}

export default Properties;
