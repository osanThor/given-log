import BadReqError from "@/controllers/error/bad_req_error";
import BoardsModel from "@/models/boards.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    if (pathname !== "/api/boards/getList/latest") {
      throw new BadReqError("BAD REQUEST");
    }
    const resp = await BoardsModel.getLatestList();
    return NextResponse.json(resp);
  } catch (err) {
    console.error(err);
  }
}
