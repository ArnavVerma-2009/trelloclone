import axios from "axios";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CreateBoard from "@/components/boards/CreateBoard";
import { BoardList } from "@/components/boards/BoardList";

const Projects = () => {
  return (
    <>
      <div className="">
        <div className="h-full  flex border-b border-[#ffffff25] w-full" />
        <div className="grid grid-cols-4  w-auto space-x-2 px-4 h-full ">
          <CreateBoard />
          <BoardList />
        </div>
      </div>
    </>
  );
};

export default Projects;
