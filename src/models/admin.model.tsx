import FirebaseAdmin from "@/services/firebase_admin";
import FirebaseClient from "@/services/firebase_client";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

const { Firestore } = FirebaseAdmin.getInstance();
const {} = FirebaseClient.getInstance();

const ADMIN_COL = "admin";

async function check({ uid }: { uid: string }) {
  const adminRef = Firestore.collection(ADMIN_COL).doc(uid);
  const adminDoc = await adminRef.get();
  if (adminDoc.exists === false) {
    return false;
  }
  const data = adminDoc.data();
  return data;
}

const AdminModel = { check };
export default AdminModel;
