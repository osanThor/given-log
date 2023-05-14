import { EmailData } from "@/interfaces/in_Contact";
import client from "@/lib/api/client";

export const postContact = async ({ from, subject, message }: EmailData) => {
  const resp = await client.post("/api/contact", {
    from,
    subject,
    message,
  });
  const res = await resp.data;
  return res;
};
