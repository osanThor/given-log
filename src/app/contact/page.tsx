import ContactContainer from "@/containers/contact/ContactContainer";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Contact Me!`,
    description: "FrontEnd Developer Given Logs | Contact Me",
  };
}

export default function contactPage() {
  return <ContactContainer />;
}
