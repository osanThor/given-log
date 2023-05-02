"use client";

import { useAuth } from "@/contexts/auth.context";
import { redirect, usePathname } from "next/navigation";
import AdminLoading from "./loading";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { user, isAdmin, loading } = useAuth();
  if (loading) {
    return <AdminLoading />;
  }
  if (pathname === "/admin/login") {
    if (user && !isAdmin) {
      redirect("/");
    }
    if (isAdmin) {
      redirect("/admin/boards");
    }
  } else {
    if (!isAdmin) {
      redirect("/");
    }
  }
  return <div>{children}</div>;
}
