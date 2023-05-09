"use client";

import Lottie from "lottie-react";
import contactEmail from "@/data/lottie/contact.json";

export default function ContactContainer() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 md:flex-row">
      <Lottie animationData={contactEmail} />
      <div className=""></div>
    </div>
  );
}
