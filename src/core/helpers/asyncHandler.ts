import { NextResponse } from "next/server";

export default (execution: any) => {
  try {
    execution();
  } catch (error) {
    return errorHandler(error);
  }
};

const errorHandler = (error: any) => {
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
