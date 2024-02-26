import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="">
      <div className="relative text-4xl h-20  bg-neutral-900 flex justify-center border-b border-[#00000089]  pr-4 pl-2 dark:border-[#ffffff25] w-full items-center">
        <div>Taskify</div>
        <div className=" w-full ml-4 flex justify-center items-center h-full ">
          <Input className="w-full bg-neutral-800"placeholder="Search your boards" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
