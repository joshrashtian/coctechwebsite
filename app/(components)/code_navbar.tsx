"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoLogoApple } from "react-icons/io";

type Directory = {
  name: string;
  href: string;
};

export const Directory: Directory[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
];

const CodeNavBar = () => {
  const pathname = usePathname();

  return (
    <div
      className="fixed
      bg-zinc-900/50 backdrop-blur-sm
     top-0 left-0 h-16 w-full   flex  justify-start px-4 items-center gap-8 text-xl font-mono"
    >
      <div className="flex items-center gap-2 mr-10">
        <IoLogoApple className="text-white" size={30} />
        <h1 className="text-white font-bold">
          {`${pathname.split("/")[1] || "Home"}.tsx`}
        </h1>
      </div>
      {Directory.map((item) => {
        const isActive = pathname.split("/")[1] === item.href.split("/")[1];
        return (
          <Link href={item.href} key={item.name}>
            <p className={`${isActive ? "text-blue-100" : "text-white"}`}>
              {item.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default CodeNavBar;
