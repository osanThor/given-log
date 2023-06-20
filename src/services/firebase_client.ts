import { getApps, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

interface FirebaseClientConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
}
const firebaseConfig: FirebaseClientConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_HOST || "",
  projectId: process.env.projectId || "",
};

export default class FirebaseClient {
  private static instance: FirebaseClient;

  private auth: Auth;

  public constructor() {
    const apps = getApps();
    if (apps.length === 0) {
      initializeApp(firebaseConfig);
    }
    this.auth = getAuth();
  }

  public static getInstance(): FirebaseClient {
    if (
      FirebaseClient.instance === undefined ||
      FirebaseClient.instance === null
    ) {
      FirebaseClient.instance = new FirebaseClient();
    }
    return FirebaseClient.instance;
  }

  public get Auth(): Auth {
    return this.auth;
  }
}
