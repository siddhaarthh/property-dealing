import React from "react";
import AgentCard from "./AgentCard";
import Image from "next/image";
import agent2 from "@/assets/agents/agent2.svg";
import agent3 from "@/assets/agents/agent3.svg";
import agent1 from "@/assets/agents/agent1.svg";
import pattern from "@/assets/pattern.svg";

function OurAgents() {
  return (
    <section className="relative mx-auto flex w-[90%]  flex-col gap-10 lg:w-[80%] ">
      <div>
        <h3 className="mb-1 font-playfair text-[40px] font-bold">Our Agents</h3>

        <p className="text-gray-500">
          Generous agents understand your needs and emotions, <br /> guiding you
          to find your perfect home.
        </p>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-y-5 lg:grid-cols-3">
        {/* agent 1 */}
        <AgentCard
          src={agent1}
          name={"Sarah Will"}
          about={
            "Exceptional agent, dedicated to your needs, guiding you to your dream home with care."
          }
        />

        {/* agent 2 */}
        <div className="flex flex-col gap-2">
          <h5 className="font-playfair text-[24px] font-bold">
            Johnson Watson
          </h5>
          <p className="text-gray-500">Real Estate Agent</p>
          <div className="w-3/4">
            <p>
              Expertly understands your needs, ensures a smooth journey to your
              dream home.
            </p>
          </div>
          <Image
            src={agent2}
            width={300}
            height={300}
            alt="a woman siting on chair"
          />
        </div>

        {/* agent 3 */}
        <AgentCard
          src={agent3}
          name={"Mark Allen"}
          about={
            "Your trusted guide to real estate, committed to delivering personalized solutions for your home search."
          }
        />

        <Image
          src={pattern}
          className="absolute -right-[13%] bottom-0 hidden lg:block"
          width={0}
          height={0}
          alt="Pattern image"
        />
      </div>
    </section>
  );
}

export default OurAgents;
