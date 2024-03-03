"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import directionRight from "@/assets/direction-right.svg";
import Link from "next/link";

function BreadCrumb() {
  const pathName = usePathname();
  const path = pathName.split("/").filter((p) => p);
  path.unshift("home");

  return (
    <div className="flex items-center">
      {path.map((path, index) => {
        return (
          <div
            key={index}
            className="py-3 text-[14px]  capitalize text-primary"
          >
            <Link href={`${path === "home" ? "/" : path}`}>
              {path.replace("%20", " ")}
            </Link>{" "}
            {index < path.length - 1 && ( // Use && to conditionally render
              <Image
                src={directionRight}
                width={20}
                height={20}
                alt="right arrow"
                className="inline"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BreadCrumb;
