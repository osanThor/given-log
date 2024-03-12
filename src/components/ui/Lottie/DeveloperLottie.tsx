"use client";

import React from "react";
import developerAnimation from "@/data/lottie/developer.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function DeveloperLottie() {
  return <Lottie animationData={developerAnimation} />;
}
