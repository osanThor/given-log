import { InAuthUser, InEmailLoginPayload } from "@/interfaces/in_Auth";
import FirebaseClient from "@/services/firebase_client";
import { User, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const { Auth } = FirebaseClient.getInstance();

export default function useFirebaseAuth() {
  const [user, setUser] = useState<InAuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function loginByEmail({ email, password }: InEmailLoginPayload) {
    try {
      const { user } = await signInWithEmailAndPassword(Auth, email, password);
      if (user) {
        return user;
      }
    } catch (err) {
      console.error(err);
    }
  }

  const clear = () => {
    setUser(null);
    setLoading(true);
  };

  function logout() {
    Auth.signOut().then(clear);
  }

  async function authStateChanged(_user: User | null) {
    if (_user === null) {
      setUser(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    setUser({
      uid: _user.uid,
      email: _user.email,
    });
    setLoading(false);
  }

  useEffect(() => {
    const onAuthChange = Auth.onAuthStateChanged(authStateChanged);
    return () => onAuthChange();
  }, []);

  return {
    user,
    loading,
    loginByEmail,
    logout,
  };
}
