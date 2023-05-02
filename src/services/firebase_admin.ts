import * as admin from "firebase-admin";

interface FirebaseAdminConfig {
  privateKey: string;
  clientEmail: string;
  projectId: string;
}

export default class FirebaseAdmin {
  public static instance: FirebaseAdmin;

  private init = false;

  public static getInstance(): FirebaseAdmin {
    if (
      FirebaseAdmin.instance === undefined ||
      FirebaseAdmin.instance === null
    ) {
      FirebaseAdmin.instance = new FirebaseAdmin();
    }
    return FirebaseAdmin.instance;
  }

  private initialAdmin(): void {
    const haveApp = admin.apps.length !== 0;
    if (haveApp) {
      this.init = true;
      return;
    }

    const config: FirebaseAdminConfig = {
      projectId: process.env.projectId || "",
      clientEmail: process.env.clientEmail || "",
      privateKey: (process.env.NEXT_PUBLIC_PRIVATE_KEY || "").replace(
        /\\n/g,
        "\n"
      ),
    };
    admin.initializeApp({ credential: admin.credential.cert(config) });
  }

  public get Firestore(): FirebaseFirestore.Firestore {
    if (!this.init) {
      this.initialAdmin();
    }

    return admin.firestore();
  }

  public get Auth(): admin.auth.Auth {
    if (!this.init) {
      this.initialAdmin();
    }
    return admin.auth();
  }
}
