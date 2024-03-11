import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const profile = await CurrentProfile();
    const { name, boardId } = await req.json();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const board = await db.list.create({
      data  : { 
        name, 
        boardId
      }
    });

    return NextResponse.json(board);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
