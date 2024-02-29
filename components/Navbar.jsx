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
    <nav className="flex items-center  justify-between py-3 text-lg md:px-5 lg:px-[10rem]">
      <Link href="/">
        <Image
          src={logo}
          className="h-[60px] w-[147.67px]"
          width={0}
          height={0}
          alt="Bitway Logo"
        />
      </Link>

      <ul className="flex w-[45%] justify-between ">
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

      <button className="rounded-[10px] bg-primary-500 px-5 py-2 text-white">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
