import { CurrentProfile } from "@/lib/current-profile";
import { UserButton } from "@clerk/nextjs";

interface DashBoardLayoutProps {
  params: {
    userId: string;
  };
}
const DashBoardLayout = async ({ params }: DashBoardLayoutProps) => {
  const user = await CurrentProfile();
  return (
    <div className="bg-neutral-900  text-white h-full">
      <div className="text-4xl h-20 flex justify-between border-b border-[#ffffff25] w-full items-center pl-2">
        Taskify
        
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
    </div>
  );
};

export default DashBoardLayout;
