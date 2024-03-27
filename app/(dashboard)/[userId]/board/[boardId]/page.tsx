import { db } from "@/lib/db";
import React from "react";
import Navbar from "./_components/Navbar";
import BoardPage from "./_components/Boards/BoardPage";

interface BoardPageProps {
  params: {
    boardId: string;
  };
}

const page = async ({ params }: BoardPageProps) => {
  const board = await db.board.findUnique({
    where: {
      id: params.boardId,
    },
  });

  return (
    <div>
      <BoardPage name={board?.name} imageUrl={board?.coverImage as string} id={board?.id} />
    </div>
  );
};

export default page;
