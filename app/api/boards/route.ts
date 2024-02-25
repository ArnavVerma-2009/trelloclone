import { CurrentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const profile = await CurrentProfile();
    const { name } = await req.json();

    console.log(name);

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const board = await db.board.create({
      data: {
        name,
        ownerId: profile.id,
        coverImage:
          "https://images.unsplash.com/photo-1708721205323-98eaaa0482ac?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    });

    return NextResponse.json(board);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// import { NextResponse } from "next/server";
// import { MemberRole } from "@prisma/client";

// import { currentProfile } from "@/lib/current-profile";
// import { db } from "@/lib/db";

// export async function POST(req: Request) {
//   try {
//     const profile = await currentProfile();
//     const { name, type } = await req.json();
//     const { searchParams } = new URL(req.url);

//     const serverId = searchParams.get("serverId");

//     if (!profile) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     if (!serverId) {
//       return new NextResponse("Server ID missing", { status: 400 });
//     }

//     if (name === "general") {
//       return new NextResponse("Name cannot be 'general'", { status: 400 });
//     }

//     const server = await db.server.update({
//       where: {
//         id: serverId,
//         members: {
//           some: {
//             profileId: profile.id,
//             role: {
//               in: [MemberRole.ADMIN, MemberRole.MODERATOR],
//             },
//           },
//         },
//       },
//       data: {
//         channels: {
//           create: {
//             profileId: profile.id,
//             name,
//             type,
//           },
//         },
//       },
//     });

//     return NextResponse.json(server);
//   } catch (error) {
//     console.log("CHANNELS_POST", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }
