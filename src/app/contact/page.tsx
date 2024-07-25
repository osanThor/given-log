import ContactContainer from "@/containers/contact/ContactContainer";
import { getMetadata } from "@/utils/getMetadata";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return getMetadata({
    title: `Contact Me!`,
    description: "FrontEnd Developer Given Logs | Contact Me",
  });
}

export default function contactPage() {
  return <ContactContainer />;
}
