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

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name should be atleast 3 letters long",
  }),
});

const CreateBoard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Untitled",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/boards", values);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <>
      <div className="mt-4 shadow-md shadow-[#00000010] flex justidy-center items-center bg-neutral-900/95 border border-[#ffffff25] px-4 py-2 spaxe-y-2  w-[calc((100vh / 3) - 10px)] p-2 h-44  rounded-xl ">
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
    </>
  );
};

export default CreateBoard;
