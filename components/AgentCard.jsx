import Image from "next/image";
import React from "react";
import agent1 from "@/assets/agents/agent1.svg";

function AgentCard({ src, name, about }) {
  return (
    <div className="flex flex-col gap-2">
      <Image src={src} width={300} height={300} alt="a woman siting on chair" />

      <h5 className="font-playfair text-[24px] font-bold">{name}</h5>
      <p className="text-gray-500">Real Estate Agent</p>
      <div className="w-3/4">
        <p>{about}</p>
      </div>
    </div>
  );
}

export default AgentCard;
