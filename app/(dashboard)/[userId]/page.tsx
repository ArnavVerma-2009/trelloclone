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
    <div className="bg-neutral-900  text-white h-full">
      <div className="text-4xl h-20 flex justify-between border-b border-[#ffffff25] w-full items-center pl-2">
        Taskify
        <div className="w-full px-8">
          <Input
            className="bg-neutral-800  border-[#ffffff25] ring-0 border active:ring-0 w-full"
            placeholder="Search your boards here"
          />
        </div>
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
        />
      </div>

      <div>
        <div className="text-3xl font-semibold pt-4 pl-4">
          Hi {user?.firstName} !
        </div>
        <div className="text-[#ffffff50] pl-4 -mt-1">
          optimize and increase your productivity by using Taskify
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
