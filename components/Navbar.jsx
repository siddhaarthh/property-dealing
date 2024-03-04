"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/constant";
import agent1 from "@/assets/agents/agent1.svg";
import { FaGoogle } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  const pathName = usePathname();
  const [providers, setIsProviders] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const data = await getProviders();
      setIsProviders(data);
    };
    setProviders();
  }, []);

  return (
    <nav className="relative mx-auto flex items-center justify-between px-3  py-3 text-lg lg:px-3 xl:w-[80%]">
      <Link href="/" className="inline-block w-[150px]">
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
        <ul className="absolute right-[5%] top-[110%]   z-50 flex w-[300px] flex-col gap-2 rounded-lg bg-white p-4 md:pointer-events-none md:hidden">
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

      {/*  profile drop down */}

      {session && isProfileOpen && (
        <div className="absolute -bottom-[150%] right-2 z-50 flex flex-col items-start rounded-lg bg-primary-500 p-4 text-white">
          <Link href="/profile" onClick={() => setIsProfileOpen(false)}>
            Profile
          </Link>
          <Link
            href="/properties/saved"
            onClick={() => setIsProfileOpen(false)}
          >
            Saved Properties
          </Link>
          <button
            onClick={() => {
              setIsProfileOpen(false);
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}

      <div className="flex items-center gap-4">
        {/* sign in button */}
        {session && (
          <button onClick={() => setIsProfileOpen((set) => !set)}>
            <Image
              src={session.user.image || agent1}
              width={40}
              height={40}
              sizes="100%"
              alt="agent image"
              className="rounded-full border-2 border-black"
            />
          </button>
        )}

        {/* sign in button */}
        {!session &&
          providers &&
          Object.values(providers).map((provider, index) => (
            <button
              key={index}
              onClick={() => signIn(provider.id)}
              className="flex w-full items-center gap-2 rounded-xl bg-primary-500 p-2 px-3 text-white"
            >
              <FaGoogle /> Login
            </button>
          ))}

        {/* mobile nav bar */}

        {
          <button
            className="flex md:hidden"
            onClick={() => setIsOpen((set) => !set)}
          >
            {!isOpen ? (
              <Image
                src={"/assets/menu.svg"}
                width={40}
                height={40}
                alt="Menu icon"
                sizes="100%"
              />
            ) : (
              <Image
                src={"/assets/menu-close.svg"}
                width={40}
                height={40}
                alt="Close icon"
                sizes="100%"
              />
            )}
          </button>
        }
      </div>
    </nav>
  );
}

export default Navbar;
