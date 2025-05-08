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
      className="fixed backdrop-blur-2xl bg-gradient-to-b from-zinc-50/75 to-zinc-100/75 dark:from-zinc-950/75 dark:to-zinc-900/75
        z-100 top-0 left-0 h-16 w-full flex justify-start px-6 items-center gap-8 text-xl text-black dark:text-white font-mono"
    >
      <div className="flex relative items-center gap-6">
        <IoLogoApple className="relative bottom-0.5" size={"1.75rem"} />
        <h1 className="font-bold">
          {`${pathname.split("/")[1] || "home"}.tsx`}
        </h1>
      </div>
      {Directory.map((item) => {
        const isActive = pathname.split("/")[1] === item.href.split("/")[1];
        return (
          <Link href={item.href} key={item.name}>
            <p className={`${isActive && "text-blue-800 dark:text-blue-100"}`}>
              {item.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default CodeNavBar;
