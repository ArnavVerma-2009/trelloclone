"use client";

import Image from "next/image";

export const Logo = () => {
  return (
    <div className="w-full flex h-20 border-b border-[#ffffff25] items-center justify-center">
      <Image height={30} width={60} src="/logo.svg" alt="logo" />
    </div>
  );
};
