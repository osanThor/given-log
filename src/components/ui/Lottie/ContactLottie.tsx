"use client";

import { useEffect, useState } from "react";
import contactEmail from "@/data/lottie/contact.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
export default function ContactLottie() {
  return <Lottie animationData={contactEmail} renderer="svg" />;
}
