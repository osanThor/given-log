"use client";

import { useAuth } from "@/contexts/auth.context";

export default function AuthLoginContainer() {
  const { loginByGithub } = useAuth();

  return (
    <div className="flex items-center justify-center w-full py-40">
      <button onClick={loginByGithub}>GITHUB</button>
    </div>
  );
}
