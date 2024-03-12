"use client";

import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const clientRef = useRef<QueryClient>();
  if (!clientRef.current) {
    clientRef.current = new QueryClient();
  }
  return (
    <QueryClientProvider client={clientRef.current}>
      {children}
    </QueryClientProvider>
  );
}
