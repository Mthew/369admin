import { NextResponse } from "next/server";
import { RoleEntity } from "@/models";

import asyncHandler from "@/core/helpers/asyncHandler";

interface Params {
  params: { id: string };
}

export const GET = async (request: Request, { params }: Params) =>
  asyncHandler(async () => {
    const item = await new RoleEntity().findById(params.id);
    if (!item)
      return NextResponse.json({ message: "Item not found" }, { status: 404 });

    return NextResponse.json(item);
  });

export const DELETE = async (request: Request, { params }: Params) =>
  asyncHandler(async () => {
    const item = await new RoleEntity().delete(params.id);
    if (!item)
      return NextResponse.json({ message: "Item not found" }, { status: 404 });

    return NextResponse.json(item);
  });

export const UPDATE = async (request: Request, { params }: Params) =>
  asyncHandler(async () => {
    const { name, description } = await request.json();
    const item = await new RoleEntity().update(params.id, {
      name,
      description,
    });
    if (!item)
      return NextResponse.json({ message: "Item not found" }, { status: 404 });

    return NextResponse.json(item);
  });
