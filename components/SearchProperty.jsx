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
    <div className="flex w-full  items-center gap-4 md:gap-3 lg:gap-4 lg:px-2">
      <Image
        className="w-[35px] rounded-full bg-[#FFFFFF1A] p-1 md:w-[40px] md:p-2 lg:w-[45px] lg:p-3  xl:w-[50px]"
        src={src}
        width={50}
        height={50}
        alt="location icon"
      />
      <div className="flex w-full md:w-36 md:flex-col md:border-r md:border-[#FFFFFF1A]  lg:w-44 xl:w-48">
        <label
          htmlFor={htmlFor}
          className="mr-6 whitespace-nowrap font-[700] text-white md:mr-0  lg:text-lg xl:text-xl "
        >
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
