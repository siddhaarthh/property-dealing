import Image from "next/image";

import favorite from "@/assets/favorite.svg";
import share from "@/assets/share.svg";

function Buttons() {
  return (
    <div className="flex items-center gap-2">
      <button className="rounded-xl border bg-[#a4a6ac0f] p-2">
        <Image src={favorite} width={25} height={25} alt="plus icon" />
      </button>
      <button className="rounded-xl border bg-[#a4a6ac0f] p-2">
        <Image src={share} width={25} height={25} alt="plus icon" />
      </button>
    </div>
  );
}

export default Buttons;
