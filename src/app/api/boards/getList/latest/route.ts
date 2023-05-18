import BoardsModel from "@/models/boards.model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const resp = await BoardsModel.getLatestList();
    return NextResponse.json(resp);
  } catch (err) {
    console.error(err);
  }
}
