"use client";

import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="w-full flex h-20 border-b border-[#00000089] dark:border-[#ffffff25] items-center justify-center">
        <Image
          className="dark:fill-white fill-black"
          height={30}
          width={60}
          src="/logo.svg"
          alt="logo"
        />
      </div>
    </Link>
  );
};
