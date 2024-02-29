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
    <nav className="flex justify-between md:px-5 lg:px-[10rem] py-3 items-center">
      <Link href="/">
        <Image
          src={logo}
          className="w-[147.67px] h-[60px]"
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

      <button className="bg-primary-500 px-5 py-2 rounded-[10px] text-white">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
