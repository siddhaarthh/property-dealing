import Image from "next/image";
import heroImg from "@/assets/hero-image.png";
import search from "@/assets/search-icon.svg";
import location from "@/assets/location-icon.svg";

export default function Home() {
  return (
    <main className="md:px-5 lg:px-[10rem] py-5 mb-2">
      <section className="w-full relative mb-24">
        <Image
          className="w-full"
          src={heroImg}
          width={0}
          height={0}
          alt="hero image"
        />

        <div className="w-[945px] flex items-center gap-8 absolute px-5 h-[100px] left-28 -bottom-12   bg-primary-500 rounded-[10px]">
          <div className="w-[800px] h-[60px]">
            <div className="flex items-center gap-4">
              <Image
                className="bg-[#FFFFFF1A] p-3 rounded-full"
                src={location}
                width={50}
                height={50}
                alt="location icon"
              />
              <div className="flex flex-col">
                <label
                  htmlFor="location"
                  className="text-white text-[20px] font-[700] "
                >
                  Location
                </label>
                <select
                  className="w-[157px] text-base focus:outline-none text-[#ffffff96] appearance-none bg-transparent"
                  name="location"
                  id="location"
                  value="location"
                >
                  <option
                    className="bg-white mt-5 text-primary px-5"
                    value="california"
                  >
                    California, United State
                  </option>
                  <option
                    className="bg-white text-primary px-5"
                    value="california"
                  >
                    California, United State
                  </option>
                  <option className="bg-white text-primary px-5" value="miami">
                    Miami, United State
                  </option>
                </select>
              </div>
            </div>
          </div>
          <Image src={search} width={50} height={50} alt="search icon" />
        </div>
      </section>

      <section className="mb-10 flex items-center justify-between">
        <div className="w-[600px]">
          <h2 className="text-[60px] leading-[80px] font-[700] font-playfair">
            Let&apos;s start search <br /> for your dream home
          </h2>
        </div>

        <div className="w-[457px] flex flex-col gap-6 font-jost">
          <p className="text-[20px]">
            Discover the joy of hassle-free living. Let us handle the details
            while you focus on making memories. Welcome home!
          </p>
          <button className="w-[262px] h-[56px] text-white rounded-[10px] px-[20px] bg-primary-500">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
