import { db } from "@/lib/db";
import React from "react";
import Navbar from "./_components/Navbar";

interface BoardPageProps {
  params: {
    boardId: string;
  };
}
const page = async ({ params }: BoardPageProps) => {
  const board = await db.board.findUnique({
    where: {
      id: params?.boardId,
    },
  });

  return (
    <div
      className="bg-cover h-full  "
      style={{
        backgroundImage: `url(${board?.coverImage})`,
      }}
    >
      <Navbar boardId={params?.boardId} />
      <div className="h-[calc(100vh - 80px)] bg-gradient-to-t from-[#000000] to-[#ffffff50]"></div>
    </div>
  );
};

export default page;
