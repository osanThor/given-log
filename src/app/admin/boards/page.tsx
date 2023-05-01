"use client";

import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function BoardsPage() {
  const { isAdmin } = useAuth();
  if (!isAdmin) {
    redirect("/");
  }
  return (
    <div>
      {/** TODO: get boards list  */}
      <Link href={"/admin/boards/write"}>글쓰기</Link>
    </div>
  );
}
