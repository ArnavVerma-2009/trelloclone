import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Plus, PlusCircle } from "lucide-react";
import React from "react";

interface NavbarProps {
  boardId: string;
}
const Navbar = async ({ boardId }: NavbarProps) => {
  const board = await db.board.findUnique({
    where: {
      id: boardId,
    },
  });

  return (
    <div className="h-20 justify-between border-b  bg-neutral-200 dark:bg-neutral-900 border-[#00000090] dark:border-[#ffffff25] flex items-center px-4">
      <div className="text-xl">
        Taskify | <span>{board?.name}</span>
      </div>
      <Button
        variant={"outline"}
        className="text-md bg-neutral-300 dark:kbg-neutral-900/70"
      >
        Create Column <Plus className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Navbar;
