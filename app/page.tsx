import { Button } from "@/components/ui/button";
import { initialProfile } from "@/lib/create-profile";
import { db } from "@/lib/db";
import { UserButton, redirectToSignIn } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await initialProfile();
    return redirect(`${user?.id}`)
}
