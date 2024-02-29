import Image from "next/image";

import heroImg from "@/assets/hero-image.png";
import search from "@/assets/search-icon.svg";
import SearchProperty from "@/components/SearchProperty";
import location from "@/assets/location-icon.svg";
import price from "@/assets/price-icon.svg";
import property from "@/assets/property-icon.svg";
import selectLocation from "@/assets/location-icon-black.svg";
import selectPrice from "@/assets/price-icon-black.svg";
import selectProperty from "@/assets/property-icon-black.svg";

export default function Home() {
  return (
    <main className="mb-2 py-5 md:px-5 lg:px-[10rem]">
      <section className="relative mb-24 w-full">
        <Image
          className="w-full"
          src={heroImg}
          width={0}
          height={0}
          alt="hero image"
        />

        <div className="absolute -bottom-12 left-28 flex h-[100px] w-[945px] items-center gap-8 rounded-[10px]   bg-primary-500 px-5">
          <div className="flex h-[60px] w-[800px] gap-3">
            <SearchProperty
              src={location}
              label={"Location"}
              htmlFor={"location"}
              option={[
                "Miami, United State",
                "California, United State",
                "New York, United State",
                "New Jersey, United State",
              ]}
              selectIcon={selectLocation}
            />

            <SearchProperty
              src={price}
              label={"Price"}
              htmlFor={"price"}
              option={["$100,000", "$200,000", "$300,000", "$400,000"]}
              selectIcon={selectPrice}
            />

            <SearchProperty
              src={property}
              label={"Property Type"}
              htmlFor={"property"}
              option={["Apartment", "House", "Condo", "Villa"]}
              selectIcon={selectProperty}
            />
          </div>
          <Image src={search} width={50} height={50} alt="search icon" />
        </div>
      </section>

      <section className="mb-10 flex items-center justify-between">
        <div className="w-[600px]">
          <h2 className="font-playfair text-[60px] font-[700] leading-[80px]">
            Let&apos;s start search <br /> for your dream home
          </h2>
        </div>

        <div className="flex w-[457px] flex-col gap-6 font-jost">
          <p className="text-[20px]">
            Discover the joy of hassle-free living. Let us handle the details
            while you focus on making memories. Welcome home!
          </p>
          <button className="h-[56px] w-[262px] rounded-[10px] bg-primary-500 px-[20px] text-white">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
