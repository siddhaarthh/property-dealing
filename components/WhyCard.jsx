import Image from "next/image";
import React from "react";

function WhyCard({ src, alt, title, description }) {
  return (
    <div className="flex w-5/6 flex-col gap-5 md:w-3/4">
      <Image
        className=" rounded-xl bg-[#3E54EB0D]  p-2"
        src={src}
        width={60}
        height={60}
        alt={alt}
      />

      <div>
        <h6 className="mb-2 text-[20px] font-[700] text-primary">{title}</h6>

        <p className="text-gray-600 ">{description}</p>
      </div>
    </div>
  );
}

export default WhyCard;
