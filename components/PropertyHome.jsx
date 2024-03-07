import Image from "next/image";
import leftArrow from "@/assets/arrow-right-black.svg";
import rightArrow from "@/assets/arrow-right-white.svg";
import PropertyCard from "./PropertyCard";
import { getPropertyHandler } from "@/utils/propertyHandler";

async function PropertyHome() {
  const data = await getPropertyHandler();

  return (
    <section className="w-full bg-gray-100 py-10 pb-20 md:px-5 lg:px-[10rem]">
      <div className="mb-5 flex w-full items-center justify-between px-3 text-center">
        <h3 className=" w-full font-playfair text-[30px] font-[700] sm:text-[30px] md:text-[35px] xl:text-[40px]">
          Explore our recent properties
        </h3>
      </div>

      <div className="grid-col-1 grid gap-10 px-5 md:grid-cols-2 lg:px-0 xl:grid-cols-3">
        {data.slice(0, 6).map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </section>
  );
}

export default PropertyHome;
