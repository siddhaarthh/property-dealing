"use client";
import Image from "next/image";
import { useState } from "react";
import location from "@/assets/location-icon-black.svg";

function Select({ option, selectIcon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        className="rounded  bg-transparent text-white focus:outline-none"
        onClick={toggleDropdown}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <div className="absolute -left-20 right-0  top-11 z-10 mt-2 w-[270px] rounded border border-gray-300 bg-white text-base shadow-lg">
          {/* Dropdown options */}

          {option.map((option, index) => {
            return (
              <button
                key={index}
                className="flex w-full items-center gap-3 px-4 py-2 hover:bg-gray-100 focus:outline-none"
                onClick={() => handleOptionClick(option)}
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

          {/* <button
            className="flex w-full items-center gap-3 px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={() => handleOptionClick("Miami, United State")}
          >
            <Image
              className="w-[40px] rounded-lg   bg-[#A4A6AC0D] p-2   text-black"
              src={SelectIcon}
              width={0}
              height={0}
              alt="location icon"
            />
            Miami, United State
          </button> */}
        </div>
      )}
    </div>
  );
}

export default Select;

{
  /* <select
                  className="block w-[157px] appearance-none  bg-transparent pb-7 leading-tight text-[#ffffff98]  text-white  outline-none  focus:outline-none"
                  name="location"
                  id="location"
                  defaultValue={"california"}
                >
                  <option
                    className="inline-block w-[157px] text-primary"
                    value="new york"
                  >
                    New York, United State
                  </option>
                  <option
                    className="bg-white px-5 text-primary"
                    value="california"
                  >
                    California, United State
                  </option>
                  <option className="bg-white px-5 text-primary" value="miami">
                    Miami, United State
                  </option>
                  <option className="bg-white px-5 text-primary" value="miami">
                    New Jersey, United State
                  </option>
                </select> */
}
