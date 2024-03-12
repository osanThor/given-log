import { InCeckAdmin } from "@/interfaces/in_Admin";
import { InAuthUser, InEmailLoginPayload } from "@/interfaces/in_Auth";
import FirebaseClient from "@/services/firebase_client";
import axios, { AxiosResponse } from "axios";
import {
  GithubAuthProvider,
  User,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

const { Auth } = FirebaseClient.getInstance();

export default function useFirebaseAuth() {
  const [user, setUser] = useState<InAuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  async function loginByGithub() {
    const provider = new GithubAuthProvider();
    try {
      const { user } = await signInWithPopup(Auth, provider);
      if (user) {
        console.log(user);
      }
    } catch (err) {
      console.error(err);
    }
  }

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
    setIsAdmin(false);
  }

  async function authStateChanged(_user: User | null) {
    if (_user === null) {
      setUser(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    const res: AxiosResponse<InCeckAdmin> = await axios(
      `/api/admin/check?uid=${_user.uid}`
    );
    const { isAdmin } = res.data;
    if (isAdmin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setUser({
      uid: _user.uid,
      email: _user.email,
      displayName: _user.displayName ?? null,
      photoURL: _user.photoURL ?? null,
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
    loginByGithub,
    loginByEmail,
    logout,
    isAdmin,
  };
}
