"use client";
import Image from "next/image";
import { useState } from "react";

function Select({ state, setState, option, selectIcon }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full ">
      <button
        className="w-full justify-self-end rounded bg-transparent text-white focus:outline-none  md:w-max md:justify-self-start"
        onClick={toggleDropdown}
      >
        {state}
      </button>
      {isOpen && (
        <div className="absolute left-[10%] z-50 mt-2  w-[90%]  rounded border border-gray-300 bg-white text-base shadow-lg md:-left-[45%] md:right-0 md:top-10 md:w-[145%] md:text-lg">
          {/* Dropdown options */}

          {option.map((option, index) => {
            return (
              <button
                key={index}
                className="flex w-full items-center px-3  py-2 hover:bg-gray-100 focus:outline-none md:gap-2 md:px-2 lg:gap-3 lg:px-4"
                onClick={() => {
                  setState(option);
                  setIsOpen(false);
                }}
              >
                <Image
                  className="mr-3 justify-self-center rounded-lg bg-[#A4A6AC0D] p-3   text-black"
                  src={selectIcon}
                  width={40}
                  height={0}
                  alt="search  icon"
                />
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Select;
