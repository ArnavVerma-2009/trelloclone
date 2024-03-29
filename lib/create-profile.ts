import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";
import { redirect } from "next/navigation";

export const initialProfile = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/");
  }

  const profile = await db.user.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.user.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: `${user.imageUrl}`,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newProfile;
};
