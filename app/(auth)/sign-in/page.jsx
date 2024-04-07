"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/assets/logo.png";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function SignIn() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    const res = await signIn("credentials", {
      redirect: false,
      email: user?.email,
      password: user?.password,
    });

    if (res?.ok) {
      toast("Sign In successful");
      router.push("/");
    }

    if (res?.error) {
      toast("Invalid Email or Password");
    }
  };
  return (
    <section className="grid h-screen w-full md:grid-cols-2">
      <div className="hidden h-full w-full overflow-hidden md:flex">
        <Image
          src={"/signIn.png"}
          alt="building"
          height={0}
          width={0}
          sizes="100%"
          className="h-full w-full object-cover"
          priority={true}
        />
      </div>
      <div className="flex w-full">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <Link href={"/"}>
            <Image src={logo} alt="logo" width={200} />
          </Link>
          <h1 className="text-3xl font-bold text-primary">
            Sign in to your account
          </h1>

          <form
            className="mt-4 flex w-full  flex-col gap-5 px-4 text-primary-500 md:w-1/2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border-2 border-primary-500 p-2"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              className="rounded-lg border-2 border-primary-500 p-2"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must not exceed 8 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <button className="rounded-lg bg-primary-500 p-2 text-white">
              Sign In
            </button>
          </form>

          <div className="mt-4 flex h-max items-center gap-2">
            <p className="">Don&apos;t have an account yet ?</p>{" "}
            <Link href={"/sign-up"} className="text-lg text-primary-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
