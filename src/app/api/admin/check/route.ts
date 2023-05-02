import BadReqError from "@/controllers/error/bad_req_error";
import AdminModel from "@/models/admin.model";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const uid = searchParams.get("uid");
    if (!uid) {
      throw new BadReqError("uid");
    }
    const uidToStr = Array.isArray(uid) ? uid[0] : uid;
    const resp = await AdminModel.check({ uid: uidToStr });
    return NextResponse.json(resp);
  } catch (err) {
    console.error(err);
  }
}
