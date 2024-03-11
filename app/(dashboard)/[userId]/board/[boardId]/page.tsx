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
  return (
    <div>
      <BoardPage boardId={params.boardId} />
    </div>
  );
};

export default page;
