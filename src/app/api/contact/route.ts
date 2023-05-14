import BadReqError from "@/controllers/error/bad_req_error";
import { EmailData } from "@/interfaces/in_Contact";
import ContactModel from "@/models/contact.model";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { from, subject, message } = (await req.json()) as EmailData;
    if (!from || !subject || !message) {
      throw new BadReqError("이메일 form 누락");
    }
    await ContactModel.SendEmail({ from, subject, message });
    return NextResponse.json({ result: "SUCCESS" });
  } catch (err) {
    console.error(err);
  }
}
