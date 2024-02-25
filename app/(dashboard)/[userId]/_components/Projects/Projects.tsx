"use client";

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

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name should be atleast 3 letters long",
  }),
});

const Projects = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Untitled",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/boards", values);
    } catch (error) {
      console.log(error);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <>
      <div className="mt-4">
        <div className="ml-4 text-muted-foreground ">
          You can see your projects here
        </div>
        <div className="h-1 mt-2 mb-2 border-b border-[#ffffff25] w-full" />
        <div className="ml-4">
          <CreateBoard />
        </div>
      </div>
    </>
  );
};

export default Projects;
