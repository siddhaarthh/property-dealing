import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/assets/logo.png";

function SignUp() {
  return (
    <section className="grid h-screen w-full md:grid-cols-2">
      <div className="hidden h-full w-full overflow-hidden md:flex">
        <Image
          src={"/signUp.png"}
          alt="building"
          height={0}
          width={0}
          sizes="100%"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={200} />
          </Link>
          <h1 className="text-3xl font-bold text-primary">
            Create New Account
          </h1>

          <form className="mt-4 flex w-full  flex-col gap-5 px-4 text-primary-500 md:w-1/2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-lg border-2 border-primary-500 p-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border-2 border-primary-500 p-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-lg border-2 border-primary-500 p-2"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded-lg border-2 border-primary-500 p-2"
            />
            <button className="rounded-lg bg-primary-500 p-2 text-white">
              Sign Up
            </button>
          </form>
          <div className="mt-4 flex h-max items-center gap-2">
            <p className="">Already have an account ?</p>{" "}
            <Link href={"/sign-in"} className="text-lg text-primary-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
