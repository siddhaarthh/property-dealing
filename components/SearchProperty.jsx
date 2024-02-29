import Image from "next/image";

import Select from "./Select";

function SearchProperty({
  src,
  label,
  htmlFor,
  option,
  selectIcon,
  state,
  setState,
}) {
  return (
    <div className="flex items-center gap-4 px-2">
      <Image
        className=" rounded-full bg-[#FFFFFF1A]  p-3"
        src={src}
        width={50}
        height={50}
        alt="location icon"
      />
      <div className="flex w-[210px] flex-col  border-r border-[#FFFFFF1A]">
        <label htmlFor={htmlFor} className="text-[20px] font-[700] text-white ">
          {label}
        </label>
        <Select
          option={option}
          state={state}
          setState={setState}
          selectIcon={selectIcon}
        />
      </div>
    </div>
  );
}

export default SearchProperty;
