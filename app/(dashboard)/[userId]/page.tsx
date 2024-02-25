import { Input } from "@/components/ui/input";
import { CurrentProfile } from "@/lib/current-profile";
import { UserButton, currentUser } from "@clerk/nextjs";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects/Projects";

interface DashBoardLayoutProps {
  params: {
    userId: string;
  };
}
const DashBoardLayout = async ({ params }: DashBoardLayoutProps) => {
  const user = await currentUser();
  return (
    <div className="dark:bg-neutral-900 bg-neutral-200 text-black dark:text-white h-full">
      <Navbar />

      <div>
        <div className="text-3xl font-semibold pt-4 pl-4">
          Hi {user?.firstName} !
        </div>
        <div className="text-[#00000089] dark:text-[#ffffff50] pl-4 -mt-1">
          optimize and increase your productivity by using Taskify
        </div>
      </div>

      <Projects /> 
    </div>
  );
};

export default DashBoardLayout;
