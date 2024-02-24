import { Logo } from "@/components/icon";
import { UserButton, UserProfile } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full  flex flex-col justify-between items-center w-20 absolute bg-neutral-900 border-r border-[#ffffff25] text-white">
      {" "}
      <div className=" p-0 w-full">
        <Logo />
        <div className="flex mt-4 justify-center">
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
      {/* <UserProfile /> */}
    </div>
  );
};

export default Sidebar;
