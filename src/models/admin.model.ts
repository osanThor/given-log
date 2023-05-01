import { InCeckAdmin } from "@/interfaces/in_Admin";
import FirebaseAdmin from "@/services/firebase_admin";

const { Firestore } = FirebaseAdmin.getInstance();

const ADMIN_COL = "admin";

async function check({ uid }: { uid: string }): Promise<InCeckAdmin> {
  const adminRef = Firestore.collection(ADMIN_COL).doc(uid);
  const adminDoc = await adminRef.get();
  if (adminDoc.exists === false) {
    return { isAdmin: false };
  }
  const data = adminDoc.data() as InCeckAdmin;
  return data;
}

const AdminModel = { check };
export default AdminModel;
