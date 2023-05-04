import BoardsModel from "@/models/boards.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const resp = await BoardsModel.getFeaturedList();
    return NextResponse.json(resp);
  } catch (err) {
    console.error(err);
  }
}