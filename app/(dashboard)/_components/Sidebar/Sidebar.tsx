import { Logo } from "@/components/icon";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton, UserProfile } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full  flex flex-col justify-between items-center w-20 absolute bg-neutral-200 dark:bg-neutral-900 border-r border-[#00000090] dark:border-[#ffffff25] text-black dark:text-white">
      {" "}
      <div className=" p-0 w-full">
        <Logo />
        <div className="flex mt-4 justify-center md:hidden">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  height: 48,
                  width: 48,
                },
              },
            }}
          />
        </div>
      </div>
      <div className="mb-4">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
