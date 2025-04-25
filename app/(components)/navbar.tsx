"use client";
import { DM_Sans } from "next/font/google";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Directory = {
  name: string;
  href: string;
};

export const Directory: Directory[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
];

const font = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 h-24 w-full  flex items-center justify-center">
      <nav className="flex items-center lg:scale-75 scale-100 shadow-2xl bg-zinc-400/50 backdrop-blur-sm justify-center gap-4 w-fit h-12 lg:h-16 rounded-full">
        {Directory.map((item) => {
          const isActive = pathname.split("/")[1] === item.href.split("/")[1];
          return (
            <Link
              href={item.href}
              key={item.name}
              className={`${font.className} py-4 px-6 lg:px-8 ${
                isActive
                  ? "bg-white scale-110   text-zinc-900"
                  : "text-zinc-900 "
              }  text-md lg:text-2xl rounded-full hover:bg-zinc-400 hover:text-white hover:scale-105 drop-shadow-2xl duration-500`}
            >
              <p
                className={`${
                  isActive ? "text-zinc-400" : "text-zinc-900"
                } hover:scale-105 duration-500`}
              >
                {item.name}
              </p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
