import Link from "next/link";
import React from "react";

function StartNow() {
  return (
    <div className="relative mx-auto flex flex-col justify-between gap-5 px-3 pt-5 sm:pt-16 md:flex-row md:gap-10 md:px-5 md:pt-0 xl:w-[85%]">
      <div className="flex w-full flex-col gap-2 rounded-lg bg-[#50aea63e] p-2 py-4  shadow-md md:px-10 md:py-10">
        <h2 className="text-2xl font-semibold ">For Buyers </h2>
        <p className=" text-xl">Find your dream home today.</p>
        <Link
          href={"/properties"}
          className=" w-max rounded-lg bg-black px-3 py-1 font-semibold text-white"
        >
          Browse Properties
        </Link>
      </div>
      <div className="flex w-full flex-col gap-2 rounded-lg bg-[#dbeafe] p-2 py-4 shadow-md md:px-10 md:py-10">
        <h2 className="text-2xl font-semibold ">For Property Owners </h2>
        <p className=" text-wrap text-xl ">
          List your property and reach your potential buyers.
        </p>
        <Link
          href={"/properties/add"}
          className=" w-max rounded-lg bg-blue-600 px-3 py-1 font-semibold text-white"
        >
          Add Property
        </Link>
      </div>
    </div>
  );
}

export default StartNow;
