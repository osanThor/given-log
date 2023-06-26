"use client";

import { useAuth } from "@/contexts/auth.context";
import { redirect } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { BeatLoader } from "react-spinners";

export default function AuthLoginContainer() {
  const { loginByGithub, loading, user } = useAuth();

  if (user) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center w-full py-40">
        {loading ? (
          <BeatLoader color="#3b82f6" />
        ) : (
          <button
            className="flex items-center gap-4 px-8 py-2 text-white border rounded-lg hover:bg-neutral-700 bg-neutral-900 md:text-2xl"
            onClick={loginByGithub}
          >
            <AiFillGithub className="text-2xl md:text-4xl" />
            GITHUB
      </button>
        )}
    </div>
  );
}
