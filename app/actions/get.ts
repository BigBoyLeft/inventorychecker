"use server";

import { getAllFlaggedRows } from "@/db/tables";

export async function getFlaggedRows() {
  return await getAllFlaggedRows();
}
