import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

export const BoardList = async () => {
  const ownerId = await CurrentProfile();
  const boards = await db.board.findMany({
    where: {
      ownerId: ownerId?.id,
    },
  });

  return (
    <>
      {boards.map((board) => (
        <Link href={`/${ownerId?.id}/board/${board.id}`} key={board.id}>
          <div className=" mt-4 shadow-md items-center flex justify-end overflow-hidden bg-[#00000090] h-[calc((100vh / 3)]    w-[calc((100vh / 3) + 6px] h-44  rounded-xl">
            <div
              className="h-full w-full flex justify-start items-end text-2xl font-bold "
              style={{
                backgroundImage: `url(${board?.coverImage})`,
                backgroundSize: "cover",
              }}
            >
              <div className="h-full w-full bg-gradient-to-t flex items-end from-black/90   p-2 to-transparent">
                {board.name}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
