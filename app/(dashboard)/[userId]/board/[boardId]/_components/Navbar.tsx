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
  boardId: string;
}

const formSchema = z.object({
  name: z.string().min(3, {
    message: "name is too short",
  }),
  boardId : z.string()
});

const Navbar = ({ title, boardId }: NavbarProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Untitled",
      boardId : boardId
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/list", values);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className="h-20 justify-between border-b  bg-neutral-200 dark:bg-neutral-900 border-[#00000090] dark:border-[#ffffff25] flex items-center px-4">
      <div className="text-xl">
        Taskify | <span>{title}</span>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex space-y-2  flex-col "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Create a board</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    disabled={isSubmitting}
                    placeholder="name"
                    {...field}
                    className="w-full flex bg-neutral-800 ring-0 border-0 outline-0 active:outline-0  active:border-0 active:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-x-2 w-full mt-2">
            <Button
              type="submit"
              className="border border-[#ffffff25] flex w-full"
              variant={"ghost"}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Navbar;
