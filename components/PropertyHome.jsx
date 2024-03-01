import Image from "next/image";
import leftArrow from "@/assets/arrow-right-black.svg";
import rightArrow from "@/assets/arrow-right-white.svg";
import PropertyCard from "./PropertyCard";

function PropertyHome() {
  return (
    <section className="w-full bg-gray-100 py-10 pb-20 md:px-5 lg:px-[10rem]">
      <div className="mb-5 flex items-center justify-between px-3">
        <h3 className="font-playfair text-[20px] font-[700] sm:text-[28px] md:text-[32px] xl:text-[40px]">
          Explore the latest properties available
        </h3>

        <div className="flex items-center gap-2 lg:gap-3">
          <button className="rounded-xl border bg-[##A4A6AC0D] p-2 xl:p-2 xl:px-3">
            <Image
              className=" w-6 rotate-180 md:w-8"
              src={leftArrow}
              width={25}
              height={30}
              alt="plus icon"
            />
          </button>
          <button className="rounded-xl border bg-primary-500 p-2 xl:p-2 xl:px-3">
            <Image
              src={rightArrow}
              width={30}
              height={30}
              alt="plus icon"
              className="w-6 md:w-8"
            />
          </button>
        </div>
      </div>

      <div className="grid-col-1 grid gap-10 px-5 md:grid-cols-2 lg:px-0 xl:grid-cols-3">
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
