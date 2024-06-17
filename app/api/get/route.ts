import { NextResponse } from "next/server";
import { getAllFlaggedRows } from "@/db/tables";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const data = await getAllFlaggedRows();

    return NextResponse.json(data);
  } else {
    // Handle any other HTTP method
  }
}
