import Image from "next/image";
import React from "react";
import star from "@/assets/reviewStar.svg";
import reviewer from "@/assets/reviewer.svg";

function ReviewCard() {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-white p-5  ">
      <div className="flex">
        <Image src={star} width={25} height={25} alt="star icon" />
        <Image src={star} width={25} height={25} alt="star icon" />
        <Image src={star} width={25} height={25} alt="star icon" />
        <Image src={star} width={25} height={25} alt="star icon" />
        <Image src={star} width={25} height={25} alt="star icon" />
      </div>

      <p>
        BitWay is a game-changer! Their platform made finding my dream home
        effortless. Highly recommend!
      </p>

      <div className="flex items-center gap-5 ">
        <Image src={reviewer} width={50} height={50} alt="A woman standing" />
        <div>
          <h6 className="text-[20px] font-bold">Dianne Russell</h6>
          <p className="text-[14px] text-gray-500   ">
            California, United State
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
