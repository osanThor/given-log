import { NextApiRequest, NextApiResponse } from "next";
import BadReqError from "./error/bad_req_error";
import AdminModel from "@/models/admin.model";
import { NextResponse } from "next/server";

async function check(req: NextApiRequest) {
  const { uid } = req.query;
  if (!uid) {
    throw new BadReqError("uid");
  }
  const uidToStr = Array.isArray(uid) ? uid[0] : uid;
  const checkResult = await AdminModel.check({ uid: uidToStr });

  return NextResponse.json(checkResult);
}

const AdminCtrl = { check };
export default AdminCtrl;
