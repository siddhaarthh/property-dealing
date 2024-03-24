import { Search } from "lucide-react";
import React from "react";
import SearchForm from "./SearchForm";

function Hero() {
  return (
    <section className="bg-primary-500">
      <div className="relative mx-auto w-max px-5 py-10  text-center text-white md:px-0  md:py-20 xl:w-[80%]">
        <h1 className="text-3xl font-bold md:text-6xl">
          Find The Perfect Home
        </h1>
        <p className="mt-2 text-sm text-white md:text-2xl">
          Discover the perfect property that suits your needs.
        </p>
        <SearchForm />
      </div>
    </section>
  );
}

export default Hero;
