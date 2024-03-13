import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import BreadCrumb from "@/components/BreadCrumb";
import PropertyPagePropertyCard from "@/components/PropertyPagePropertyCard";
import { getPropertyHandler } from "@/utils/propertyHandler";
import Buttons from "@/components/Buttons";
import { revalidatePath } from "next/cache";

async function Properties() {
  const property = await getPropertyHandler();

  revalidatePath("/properties");

  return (
    <section className="relative mx-auto mb-10 w-full  xl:w-[80%]">
      <BreadCrumb />

      <div className="flex gap-10">
        <div className="w-[20%] rounded-lg border-2">
          <div className="flex">
            <div
              className="flex w-full items-center
             justify-between p-4"
            >
              <p className="text-xl font-bold capitalize">Select Location</p>
              <IoIosArrowDown className="text-xl" />
            </div>
          </div>
        </div>
        <div className="flex w-[80%] flex-col gap-5 ">
          {property.map((property) => (
            <PropertyPagePropertyCard key={property._id} property={property}>
              <Buttons />
            </PropertyPagePropertyCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
