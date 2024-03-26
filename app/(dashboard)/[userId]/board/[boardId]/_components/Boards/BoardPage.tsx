import { db } from "@/lib/db";
import React from "react";
import Navbar from "../Navbar";

interface BoardPageProps {  
    name: string | undefined;
    imageUrl: string | undefined;
    id : string | undefined; 
}

const BoardPage = async ({ name, imageUrl, id }: BoardPageProps) => {
  


  return (
    <div
      className="bg-cover h-full  "
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Navbar title={name} boardId={id} />
      <div className="h-[calc(100vh - 80px)] bg-gradient-to-t from-[#000000] to-[#ffffff50]"></div>
    </div>
  );
};

export default BoardPage;
