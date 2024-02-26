import { currentUser } from "@clerk/nextjs";
import React from "react";

const Welcome = async () => {
  const user = await currentUser();

  return (
    <div className="pb-4">
      <div>
        <div className="text-3xl pt-4 font-semibold  pl-4">
          Hi {user?.firstName} !
        </div>
        <div className="text-[#00000089] dark:text-muted-foreground pl-4 -mt-1">
          optimize and increase your productivity by using Taskify
        </div>
        <div className="pl-4 pt-2 h-full text-muted-foreground ">
          You can see your projects here
        </div>
      </div>
    </div>
  );
};

export default Welcome;
