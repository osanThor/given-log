import { EmailData } from "@/interfaces/in_Contact";
import client from "@/lib/api/client";

export const postContact = async (body: EmailData) => {
  const resp = await client.post("/api/contact", body);
  const res = await resp.data;
  return res;
};
