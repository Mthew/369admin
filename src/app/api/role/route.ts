import { NextResponse } from "next/server";
import { PrismaDB } from "@/lib";

export async function GET() {
  try {
    const notes = await PrismaDB.roles.findMany();
    return NextResponse.json(notes);
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

export async function POST(request: Request) {
  try {
    const { name, description } = await request.json();

    const newItem = await PrismaDB.roles.create({
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(newItem);
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
