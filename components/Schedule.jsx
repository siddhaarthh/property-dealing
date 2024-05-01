"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

function Schedule() {
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm();
  const onsubmit = (data) => {};
  return (
    <div className="h-max rounded-lg px-5  lg:w-2/6">
      <h6 className=" mb-5 text-xl font-bold uppercase">Schedule a tour</h6>

      <div className="mb-5 flex items-center gap-5 border-b-2 pb-4 ">
        <Image
          src={`/assets/agents/agent1.svg`}
          width={70}
          height={70}
          alt="woman agent image"
          className="rounded-xl"
        />

        <div className="flex flex-col justify-center gap-2">
          <h6 className="text-2xl font-bold">Leasie Willions</h6>
          <p className="text-gray-500">Real Estate Agent</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="w-full">
            <label htmlFor="name" className="mb-2 font-bold">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
              placeholder="Enter Your Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="mb-2 mt-2 text-red-500">This field is required</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="email" className="mb-2 font-bold">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
              placeholder="Enter Your Email"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <p className="mb-2 mt-2 text-red-500">This field is required</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="phoneNumber" className="mb-2 font-bold">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="number"
              className="h-[50px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
              placeholder="Enter Your Phone Number"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <p className="mb-2 mt-2 text-red-500">This field is required</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="message" className="mb-2 font-bold">
              Message
            </label>
            <textarea
              id="message"
              type="text"
              className="h-[100px] w-full rounded-xl border border-[#A4A6AC33] p-3 text-primary-500 outline-none"
              placeholder="Enter Your Message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <p className="mb-2 mt-2 text-red-500">This field is required</p>
            )}
          </div>
          <button
            disabled={isSubmitting}
            className="rounded-xl bg-primary-500 p-3 text-white"
            onClick={() => console.log("Request sent")}
          >
            Send a request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Schedule;
