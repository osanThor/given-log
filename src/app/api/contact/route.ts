import BadReqError from "@/controllers/error/bad_req_error";
import ContactModel from "@/models/contact.model";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { from, subject, message } = body;
    if (!from || !subject || !message) {
      throw new BadReqError("이메일 form 누락");
    }
    const data = await ContactModel.SendEmail({ from, subject, message });
    return Response.json({ result: "SUCCESS" });
  } catch (err) {
    console.error("CONTACT ERROR", err);
  }
}
