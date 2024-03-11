import { db } from "@/lib/db";
import React from "react";
import Navbar from "../Navbar";

interface BoardPageProps {  
    boardId: string;
}

const BoardPage = async ({ boardId }: BoardPageProps) => {
  
    const board = await db.board.findUnique({
    where: {
      id: boardId,
    },
  });

  return (
    <div
      className="bg-cover h-full  "
      style={{
        backgroundImage: `url(${board?.coverImage})`,
      }}
    >
      <Navbar title={board?.name} boardId={boardId} />
      <div className="h-[calc(100vh - 80px)] bg-gradient-to-t from-[#000000] to-[#ffffff50]"></div>
    </div>
  );
};

export default BoardPage;
