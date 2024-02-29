import Image from "next/image";
import leftArrow from "@/assets/arrow-right-black.svg";
import rightArrow from "@/assets/arrow-right-white.svg";
import PropertyCard from "./PropertyCard";

function PropertyHome() {
  return (
    <section className="w-full bg-gray-100 py-10 pb-20 md:px-5 lg:px-[10rem]">
      <div className="flex justify-between">
        <h3 className="font-playfair text-[40px] font-[700]">
          Explore the latest properties available
        </h3>

        <div className="mb-10 flex gap-3">
          <button className="rounded-xl border bg-[##A4A6AC0D] p-2">
            <Image
              className=" rotate-180"
              src={leftArrow}
              width={30}
              height={30}
              alt="plus icon"
            />
          </button>
          <button className="rounded-xl border bg-primary-500 p-2">
            <Image src={rightArrow} width={30} height={30} alt="plus icon" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
}

export default PropertyHome;
