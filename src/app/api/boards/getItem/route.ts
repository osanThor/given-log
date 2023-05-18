import BadReqError from "@/controllers/error/bad_req_error";
import BoardsModel from "@/models/boards.model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      throw new BadReqError("id 누락");
    }

    const resp = await BoardsModel.getItem({
      id,
    });
    return NextResponse.json(resp);
  } catch (err) {
    console.error(err);
  }
}
