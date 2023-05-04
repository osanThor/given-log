import BadReqError from "@/controllers/error/bad_req_error";
import { BasicProps } from "@/interfaces/in_Boards";
import BoardsModel from "@/models/boards.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { category, featured, title, subTitle, tags, thumbnail, contant } =
      (await req.json()) as BasicProps;
    if (category === undefined) {
      throw new BadReqError("카테고리 누락");
    }
    if (!title) {
      throw new BadReqError("제목 누락");
    }
    if (!contant) {
      throw new BadReqError("내용 누락");
    }

    await BoardsModel.post({
      category,
      featured,
      title,
      subTitle,
      tags,
      thumbnail,
      contant,
    });

    return NextResponse.json({ result: "SUCCESS" });
  } catch (err) {
    console.error(err);
  }
}
