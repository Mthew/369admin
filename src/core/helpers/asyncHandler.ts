import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export default (execution: any) => {
  try {
    execution();
  } catch (error) {
    return errorHandler(error);
  }
};

const errorHandler = (error: any) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    console.log("ERROR => ", error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
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
};
