import { RoleEntity } from "@/models";
import { NextResponse } from "next/server";
import asyncHandler, { errorHandler } from "@/core/helpers/asyncHandler";

export const GET = async () => {
  try {
    const items = await new RoleEntity().findMany();
    return NextResponse.json(items);
  } catch (error) {
    errorHandler(error);
  }
};

export const POST = async (req: Request) =>
  asyncHandler(async () => {
    const { name, description } = await req.json();

    const newItem = await new RoleEntity().create({
      id: 0,
      name,
      description,
    });

    return NextResponse.json(newItem);
  });
