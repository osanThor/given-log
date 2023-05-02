import CustomServerError from "@/controllers/error/custom_server_error";
import { BasicProps, InBlogColData, InLogData } from "@/interfaces/in_Boards";
import FirebaseAdmin from "@/services/firebase_admin";
import { firestore } from "firebase-admin";

const BLOG_COL = "blog";
const LOGS_COL = "logs";

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
    const blogDoc = await transaction.get(blogRef);
    if (!blogDoc.exists) {
      throw new CustomServerError({
        statusCode: 400,
        message: "카테고리가 존재하지 않는다",
      });
    }
    const blogData = blogDoc.data() as InBlogColData;
    if (blogData.logCount !== undefined) {
      logCount = blogData.logCount;
    }
    const newBlogRef = blogRef.collection(LOGS_COL).doc();
    const newLogBody: InLogData = {
      category,
      featured,
      title,
      subTitle: subTitle ? subTitle : "",
      tags: tags ? tags : [],
      thumbnail: thumbnail ? thumbnail : "",
      contant,
      logNum: logCount,
      createAt: firestore.FieldValue.serverTimestamp(),
    };
    await transaction.set(newBlogRef, newLogBody);
    await transaction.update(blogRef, { logCount: logCount + 1 });
  });
}

const BoardsModel = { post };
export default BoardsModel;
