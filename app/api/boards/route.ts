import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

const images = [
  "https://images.unsplash.com/photo-1707343843598-39755549ac9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1708721205323-98eaaa0482ac?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682695799561-033f55f75b25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708913156945-df01fdf89809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708959978694-74618342f2a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708856186498-754432f732c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D",
];

const RandomImageGen = () => {
  const RandomInt = Math.floor(Math.random() * 9);

  return images[RandomInt];
};

export async function POST(req: Request) {
  try {
    const profile = await CurrentProfile();
    const { name } = await req.json();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const board = await db.board.create({
      data: {
        name,
        ownerId: profile.id,
        coverImage: RandomImageGen(),
      },
    });

    const list = await db.list.createMany({
      data: [
        {
          name: "Todo",
          boardId: board.id,
        },
        {
          name: "Doing",
          boardId: board.id,
        },
        {
          name: "Done",
          boardId: board.id,
        },
      ],
    });
    return NextResponse.json({ board, list });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
