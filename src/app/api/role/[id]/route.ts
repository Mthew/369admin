import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { PrismaDB } from "@/lib";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  console.log(params.id);
  try {
    const item = await PrismaDB.roles.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!item)
      return NextResponse.json({ message: "Item not found" }, { status: 404 });

    return NextResponse.json(item);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedItem = await PrismaDB.roles.delete({
      where: {
        id: Number(params.id),
      },
    });
    if (!deletedItem)
      return NextResponse.json({ message: "Item not found" }, { status: 404 });

    return NextResponse.json(deletedItem);
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { name, description } = await request.json();

    const updatedNote = await PrismaDB.roles.update({
      where: {
        id: Number(params.id),
      },
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(updatedNote);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
