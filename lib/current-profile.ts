import { auth } from "@clerk/nextjs";
import { db } from "./db";

export const CurrentProfile = async () => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const profile = await db.user.findFirst({
    where: {
      userId,
    },
  });

  return profile;
};
