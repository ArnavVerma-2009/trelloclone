import { db } from "@/lib/db";
import React from "react";
import Navbar from "../Navbar";
import Image from "next/image";
import ListCard from "../list-card";

interface BoardPageProps {
  name: string | undefined;
  imageUrl: string;
  id: string | undefined;
}

const BoardPage = async ({ name, imageUrl, id }: BoardPageProps) => {
  const lists = await db.list.findMany({
    where: {
      boardId: id,
    },
  });

  return (
    <>
      {" "}
      <div
        className="absolute h-full w-screen  -z-10"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          opacity: 0.4,
        }}
      />
      <div className="w-full h-full">
        <Navbar title={name} boardId={id} />
      </div>
      <div className="h-[calc(100vh-80px)] gap-2 p-2 flex w-full">
        {lists.map((list) => (
          <div key={list.id}>
            <ListCard name={list.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default BoardPage;
