"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/assets/logo.png";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function SignUp() {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    getValues,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const user = {
      username: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast("Account created successfully");
      } else {
        throw new Error("An error occurred");
      }

      reset();
      router.push("/sign-in");
    } catch (error) {
      toast("An error occurred");
    }
  };

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
          priority={true}
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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex w-full  flex-col gap-5 px-4 text-primary-500 md:w-1/2"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-lg border-2 border-primary-500 p-2"
              {...register("name", { required: "Full Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border-2 border-primary-500 p-2"
              {...register("email", { required: "Email is required" })}
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
                  message: "Password must have at least 8 characters",
                },
              })}
            />

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded-lg border-2 border-primary-500 p-2"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />

            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}

            <button
              disabled={isSubmitting}
              className="rounded-lg bg-primary-500 p-2 text-white"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </form>
          <div className="mt-4 flex h-max items-center gap-2">
            <p>Already have an account ?</p>{" "}
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
