"use client";
import Image from "next/image";
import { useState } from "react";

function Select({ state, setState, option, selectIcon }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      <button
        className="rounded  bg-transparent text-white focus:outline-none"
        onClick={toggleDropdown}
      >
        {state}
      </button>
      {isOpen && (
        <div className="absolute -left-20 right-0  top-10 z-10 mt-2 w-[270px] rounded border border-gray-300 bg-white text-base shadow-lg">
          {/* Dropdown options */}

          {option.map((option, index) => {
            return (
              <button
                key={index}
                className="flex w-full items-center gap-3 px-4 py-2 hover:bg-gray-100 focus:outline-none"
                onClick={() => {
                  setState(option);
                  setIsOpen(false);
                }}
              >
                <Image
                  className="w-[40px] rounded-lg   bg-[#A4A6AC0D] p-3   text-black"
                  src={selectIcon}
                  width={0}
                  height={0}
                  alt="location icon"
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
