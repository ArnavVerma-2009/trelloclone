import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div>
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
    </div>
  );
}

export default Navbar
