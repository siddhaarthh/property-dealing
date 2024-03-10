import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import BreadCrumb from "@/components/BreadCrumb";
import PropertyPagePropertyCard from "@/components/PropertyPagePropertyCard";
import { getPropertyHandler } from "@/utils/propertyHandler";

async function Properties() {
  const property = await getPropertyHandler();

  return (
    <section className="relative mx-auto mb-10 w-full  xl:w-[80%]">
      <BreadCrumb />

      <div className="flex gap-10">
        <div className="w-[20%] bg-green-400">
          <div className="flex">
            <div className="flex w-full items-center justify-between">
              <p className="text-xl font-bold capitalize">Select Location</p>
              <IoIosArrowDown className="text-xl" />
            </div>
          </div>
        </div>
        <div className="w-[80%] ">
          {property.map((property) => (
            <PropertyPagePropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
