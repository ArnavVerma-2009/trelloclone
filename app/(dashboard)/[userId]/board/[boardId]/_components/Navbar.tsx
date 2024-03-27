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
import { PlusCircle } from "lucide-react";
import React from "react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";

interface NavbarProps {
  title: string | undefined;
  boardId: string | undefined;
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <div className="h-20 justify-between border-b z-[1000] bg-transparent border-[#00000090] dark:border-[#ffffff25] flex items-center px-4">
      <div className="text-xl">
        Taskify | <span>{title}</span>
      </div>
      <Button
        variant={"secondary"}
        size={"default"}
        className="text-md ring-2 ring-neutral-700 hover:ring-neutral-900 hover:ring-2 transition"
      >
        Create list <PlusCircle className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default Navbar;
