"use client";
import useFirebaseAuth from "@/hooks/use_firebase_auth";
import { InAuthUser, InEmailLoginPayload } from "@/interfaces/in_Auth";
import { createContext, useContext } from "react";

interface InAuthContext {
  user: InAuthUser | null;
  isAdmin: boolean;
  loading: boolean;
  loginByGithub: () => void;
  loginByEmail: ({ email, password }: InEmailLoginPayload) => void;
  logout: () => void;
}

const AuthContext = createContext<InAuthContext>({
  user: null,
  loading: true,
  isAdmin: false,
  loginByGithub: async () => ({ user: null, credential: null }),
  loginByEmail: async () => ({ user: null, credential: null }),
  logout: () => {},
});

export const AuthProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useFirebaseAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
export const useAuth = () => useContext(AuthContext);
