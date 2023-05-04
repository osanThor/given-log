import CustomServerError from "@/controllers/error/custom_server_error";
import {
  BasicProps,
  InBlogColData,
  InGetListProps,
  InGetLogProps,
  InLogData,
  InLogDataServer,
} from "@/interfaces/in_Boards";
import FirebaseAdmin from "@/services/firebase_admin";
import { firestore } from "firebase-admin";
import ReactQuill from "react-quill";

const BLOG_COL = "blog";

const DEV_DOC = "dev";
const LIFE_DOC = "life";

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
    const newLogBody: {
      category: string;
      featured: boolean;
      title: string;
      subTitle?: string;
      tags?: Array<string>;
      thumbnail?: string;
      contant: ReactQuill.Value | string;
      createAt: firestore.FieldValue;
      logNum: number;
    } = {
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

async function getFeaturedList() {
  const blogRef = Firestore.collection(BLOG_COL);
  const devRef = blogRef.doc(DEV_DOC).collection(LOGS_COL);
  const lifeRef = blogRef.doc(LIFE_DOC).collection(LOGS_COL);

  const querySnapshotDev = await devRef.where("featured", "==", true).get();
  const querySnapshotLife = await lifeRef.where("featured", "==", true).get();

  const devLogs = querySnapshotDev.docs.map((doc) => {
    const { title, subTitle, category, createAt, thumbnail } =
      doc.data() as Omit<InLogDataServer, "id">;
    const data = {
      id: doc.id,
      title,
      subTitle,
      category,
      createAt: createAt.toDate().toISOString(),
      thumbnail,
    } as InGetLogProps;
    return data;
  });
  const lifeLogs = querySnapshotLife.docs.map((doc) => {
    const { title, subTitle, category, createAt, thumbnail } =
      doc.data() as Omit<InLogDataServer, "id">;
    const data = {
      id: doc.id,
      title,
      subTitle,
      category,
      createAt: createAt.toDate().toISOString(),
      thumbnail,
    } as InGetLogProps;
    return data;
  });

  return devLogs.concat(lifeLogs).slice(0, 8);
}

async function getLatestList() {
  const logs: any[] = [];

  const blogRef = Firestore.collection(BLOG_COL);
  const docsQuerySnapshot = await blogRef
    .where("category", "in", [DEV_DOC, LIFE_DOC])
    .get();
  // 각 문서에서 "logs" 하위 컬렉션에서 createAt 기준으로 최신글 8개 가져오기
  for (const doc of docsQuerySnapshot.docs) {
    const logsRef = blogRef.doc(doc.id).collection(LOGS_COL);
    const logsQuerySnapshot = await logsRef
      .orderBy("createAt", "desc")
      .limit(8)
      .get();
    logsQuerySnapshot.forEach((logDoc) => {
      const { title, subTitle, category, createAt, thumbnail } =
        logDoc.data() as Omit<InLogDataServer, "id">;
      logs.push({
        id: logDoc.id,
        title,
        subTitle,
        category,
        createAt: createAt.toDate().toISOString(),
        thumbnail,
      });
    });
  }
  // 최신글 8개만 반환
  return logs.sort((a, b) => b.createAt - a.createAt).slice(0, 8);
}

async function getList({ category, page = 1, size = 8 }: InGetListProps) {
  const blogRef = Firestore.collection(BLOG_COL);
  const devRef = blogRef.doc(DEV_DOC).collection(LOGS_COL);
  const lifeRef = blogRef.doc(LIFE_DOC).collection(LOGS_COL);
}

const BoardsModel = { post, getFeaturedList, getLatestList };
export default BoardsModel;
