import { Input } from "@/components/ui/input";
import { CurrentProfile } from "@/lib/current-profile";
import { UserButton, currentUser } from "@clerk/nextjs";

interface DashBoardLayoutProps {
  params: {
    userId: string;
  };
}
const DashBoardLayout = async ({ params }: DashBoardLayoutProps) => {
  const user = await currentUser();
  return (
    <div className="dark:bg-neutral-900 bg-neutral-200 text-black dark:text-white h-full">
      <div className="text-4xl h-20 flex justify-between border-b border-[#00000089]  dark:border-[#ffffff25] w-full items-center pl-2">
        Taskify
        <div className="w-full md:px-8 px-4">
          <Input
            className="bg-neutral-300 dark:bg-neutral-800  border-[#ffffff25] ring-0 border active:ring-0 w-full"
            placeholder="Search your boards "
          />
        </div>
        <div className="hidden md:flex">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: {
                  height: 48,
                  width: 48,
                },
                rootBox: {
                  marginRight: "8px",
                },
              },
            }}
          />{" "}
        </div>
      </div>

      <div>
        <div className="text-3xl font-semibold pt-4 pl-4">
          Hi {user?.firstName} !
        </div>
        <div className="text-[#00000089] dark:text-[#ffffff50] pl-4 -mt-1">
          optimize and increase your productivity by using Taskify
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
