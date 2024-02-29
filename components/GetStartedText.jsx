import React from "react";

function GetStartedText() {
  return (
    <section className="mb-5 flex items-center justify-between py-5 md:px-5 lg:px-[10rem]">
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
  );
}

export default GetStartedText;
