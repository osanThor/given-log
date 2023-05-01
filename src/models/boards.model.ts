import { BasicProps } from "@/interfaces/in_Boards";
import FirebaseAdmin from "@/services/firebase_admin";

const BLOG_COL = "blog";

const { Firestore } = FirebaseAdmin.getInstance();

async function post({
  category,
  featured,
  title,
  subTitle,
  tags,
  thumbnail,
  contant,
}: BasicProps) {
  const blogRef = Firestore.collection(BLOG_COL).doc(category);
  await Firestore.runTransaction(async (transaction) => {
    let logCount = 1;
    const blogDoc = transaction.get(blogRef);
  });
}
