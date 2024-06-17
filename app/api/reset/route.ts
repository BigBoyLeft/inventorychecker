import { NextResponse } from "next/server";
import { handleResetRows } from "@/db/tables";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = await req.json();

    await handleResetRows(data);

    return NextResponse.json({ success: true });
  } else {
    // Handle any other HTTP method
  }
}
