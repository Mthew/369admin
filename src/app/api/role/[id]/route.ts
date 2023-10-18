import { NextResponse } from "next/server";
import { RoleEntity } from "@/models";

import { errorHandler } from "@/core/helpers/asyncHandler";

interface Params {
  params: { id: string };
}

export const GET = async (request: Request, { params }: Params) => {
  try {
    const item = await new RoleEntity().findById(params.id);
    if (!item)
      return NextResponse.json({ message: "Item not found" }, { status: 404 });

    return NextResponse.json(item);
  } catch (error) {
    errorHandler(error);
  }
};

export const DELETE = async (request: Request, { params }: Params) => {
  try {
    const item = await new RoleEntity().delete(params.id);
    if (!item)
      return NextResponse.json({ message: "Item not found" }, { status: 404 });

    return NextResponse.json(item);
  } catch (error) {
    errorHandler(error);
  }
};

export const PUT = async (request: Request, { params }: Params) => {
  try {
    const { name, description } = await request.json();
    const item = await new RoleEntity().update(params.id, {
      name,
      description,
    });
    if (!item)
      return NextResponse.json({ message: "Item not found" }, { status: 404 });

    return NextResponse.json(item);
  } catch (error) {
    errorHandler(error);
  }
};
