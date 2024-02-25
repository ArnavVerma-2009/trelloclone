import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export const CurrentProfile = async () => {
  const userId = auth().userId;

  if (!userId) {
    return null;
  }

  const profile = await db.user.findUnique({
    where: {
      userId,
    },
  });

  return profile;
};
