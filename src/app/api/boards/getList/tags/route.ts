import BadReqError from "@/controllers/error/bad_req_error";
import BoardsModel from "@/models/boards.model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("cate");

    if (!category) {
      throw new BadReqError("category 누락");
    }

    const resp = await BoardsModel.getAllTags({
      category,
    });
    return NextResponse.json(resp);
  } catch (err) {
    console.error(err);
  }
}
