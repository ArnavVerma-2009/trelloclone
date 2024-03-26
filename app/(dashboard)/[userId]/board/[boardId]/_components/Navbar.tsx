"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";

interface NavbarProps {
  title: string | undefined;
  boardId: string | undefined;
}



const Navbar = ({ title, boardId}: NavbarProps) => {
  return (
    <div className="h-20 justify-between border-b  bg-neutral-200 dark:bg-neutral-900 border-[#00000090] dark:border-[#ffffff25] flex items-center px-4">
      <div className="text-xl">
        Taskify | <span>{title}</span>
  
      </div>
      <Button variant={"ghost"}>
          Create list
      </Button>
    </div>
  );
};

export default Navbar;
