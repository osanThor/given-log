"use client";
import { useAuth } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const { user, loginByEmail } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    if (!email) return alert("아이디 입력");
    if (!password) return alert("비밀번호 입력");
    loginByEmail({ email, password });
  };

  useEffect(() => {
    if (user) {
      return router.push("/");
    }
  }, [user, router]);

  return (
    <div className="flex min-h-[500px] items-center justify-center w-full ">
      <div className="w-full max-w-[400px] h-max border border-gray-300 rounded-md flex flex-col items-center min-h-full py-6 px-4">
        <h2 className="w-full py-2 mb-4 text-lg font-medium text-center text-gray-600 border-b border-gray-300">
          ADMIN
        </h2>
        <form className="flex flex-col w-full" onSubmit={handleAdminLogin}>
          <label className="text-sm text-gray-400">ID</label>
          <input
            className="w-full h-10 px-2 mb-3 text-sm border border-gray-300 rounded-md"
            type="email"
            name="email"
            autoComplete="emailId"
            placeholder="id 입력"
            onChange={handleChange}
            value={email}
          />
          <label className="text-sm text-gray-400">PW</label>
          <input
            className="w-full h-10 px-2 mb-3 text-sm border border-gray-300 rounded-md "
            type="password"
            name="password"
            autoComplete="password"
            placeholder="비밀번호 입력"
            onChange={handleChange}
            value={password}
          />
          <button
            type="submit"
            className="h-10 text-white bg-blue-500 rounded-md hover:bg-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
