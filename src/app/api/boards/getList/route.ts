import BadReqError from "@/controllers/error/bad_req_error";
import BoardsModel from "@/models/boards.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("cate");
    const page = searchParams.get("page");
    const size = searchParams.get("size");
    const tag = searchParams.get("tag");

    if (!category) {
      throw new BadReqError("category 누락");
    }

    console.log(tag);

    const convertPage = page ? page : "1";
    const convertSize = size ? size : "8";
    const pageToStr = Array.isArray(convertPage) ? convertPage[0] : convertPage;
    const sizeToStr = Array.isArray(convertSize) ? convertSize[0] : convertSize;
    const resp = await BoardsModel.getList({
      category,
      page: parseInt(pageToStr, 10),
      size: parseInt(sizeToStr, 10),
      tag: tag ? tag : undefined,
    });
    return NextResponse.json(resp);
  } catch (err) {
    console.error(err);
  }
}
