"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/constant";

function Navbar() {
  const pathName = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative mx-auto flex items-center justify-between px-3  py-3 text-lg lg:px-0 xl:w-[80%]">
      <Link href="/" className=" inline-block w-[150px]">
        <Image src={logo} width={0} height={0} alt="Bitway Logo" />
      </Link>

      <ul className="hidden w-max justify-between md:flex  md:gap-5 lg:flex lg:gap-10">
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

      {isOpen && (
        <ul className="absolute right-[5%] top-[130%]  z-50 flex w-[300px] flex-col gap-2 rounded-lg bg-white p-4 md:pointer-events-none md:hidden">
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
      )}

      <div className="flex items-center gap-5">
        {isLoggedIn && (
          <button className="h-10 w-10 rounded-full border-2 border-primary-500"></button>
        )}

        {!isLoggedIn && (
          <button className=" rounded-xl bg-primary-500 px-5 py-2 text-white">
            Login
          </button>
        )}
        {
          <button
            className="flex md:hidden"
            onClick={() => setIsOpen((set) => !set)}
          >
            {!isOpen ? (
              <Image
                src={"/assets/menu-icon.svg"}
                width={30}
                height={50}
                alt="Menu icon"
              />
            ) : (
              <Image
                src={"/assets/menu-close.svg"}
                width={30}
                height={50}
                alt="Close icon"
              />
            )}
          </button>
        }
      </div>
    </nav>
  );
}

export default Navbar;
