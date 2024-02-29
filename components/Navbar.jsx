"use client";

import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/constant";

function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="mx-auto flex w-[80%] items-center justify-between py-3 text-lg">
      <Link href="/" className=" inline-block w-[150px]">
        <Image src={logo} width={0} height={0} alt="Bitway Logo" />
      </Link>

      <ul className="flex w-[45%] justify-between">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              className={`${pathName === link.path ? "text-primary-500" : ""}`}
              href={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <button className=" rounded-xl bg-primary-500 px-5 py-2 text-white">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
