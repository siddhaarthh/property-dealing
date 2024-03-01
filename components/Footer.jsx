import Image from "next/image";
import React from "react";
import logo from "../assets/logo-white.svg";
import facebook from "../assets/facebook-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-primary-500 px-5 py-8 lg:px-[10rem]">
      <div className="flex flex-col gap-10 border-b pb-8 md:flex-row  md:justify-between">
        <div className="flex w-max flex-col gap-5">
          <Image src={logo} width={123} height={50} alt="bitway logo" />

          <p className=" text-white">
            BitWay Rentals: Where Your Perfect Space Awaits. <br /> Simplifying
            Rentals, Elevating Experiences, Redefining Comfort.
          </p>
        </div>

        <div className="flex w-1/2 flex-col justify-between gap-5 md:flex-row">
          {/* about */}

          <div className=" flex  flex-col text-white  md:gap-3">
            <h3 className="text-[18px] font-[700]">About</h3>
            <ul className="flex  gap-5 whitespace-nowrap md:flex-col">
              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>

              <li>
                <Link href="/agents">Agents</Link>
              </li>

              <li>
                <Link href="/properties/add">New Property</Link>
              </li>
            </ul>
          </div>

          {/* service */}
          <div className="flex flex-col text-white  md:gap-3">
            <h3 className="text-[18px] font-[700]">Service</h3>
            <ul className="flex gap-5 whitespace-nowrap md:flex-col">
              <li>Payment & Tax</li>
              <li>Feature</li>
              <li>View Booking</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* our location */}
          <div className="flex flex-col text-white md:gap-3">
            <h3 className="text-[18px] font-[700]">Our Location</h3>
            <div className="flex flex-col gap-3 whitespace-nowrap">
              <p>2972, Old Street, Prague, Czech Republic</p>
              <div className="flex gap-3">
                <Image
                  src={facebook}
                  width={45}
                  height={45}
                  alt="facebook icon"
                />
                <Image
                  src={twitter}
                  width={45}
                  height={45}
                  alt="twitter icon"
                />
                <Image
                  src={linkedin}
                  width={45}
                  height={45}
                  alt="linkedin icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-5">
        <p className="h-full text-center text-white">
          &copy; {new Date().getFullYear()} Bitway Rentals. All Rights Reserved.
        </p>

        <div className="flex gap-10">
          <p className="text-white">Terms & Conditions</p>
          <p className="text-white">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
