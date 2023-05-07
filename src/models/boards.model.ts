import CustomServerError from "@/controllers/error/custom_server_error";
import {
  BasicProps,
  InBlogColData,
  InGetListProps,
  InGetLogProps,
  InLogDataServer,
  InLogData,
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
  const logs: Array<any> = [];

  const blogRef = Firestore.collection(BLOG_COL);
  const docsQuerySnapshot = await blogRef
    .where("category", "in", [DEV_DOC, LIFE_DOC])
    .get();
  // 각 문서에서 "logs" 하위 컬렉션에서 createAt 기준으로 최신글 8개 가져오기
  for (const doc of docsQuerySnapshot.docs) {
    const logsRef = blogRef.doc(doc.id).collection(LOGS_COL);
    const logsQuerySnapshot = await logsRef
      .where("featured", "==", true)
      .limit(8)
      .get();
    logsQuerySnapshot.forEach((logDoc) => {
      const { title, subTitle, category, createAt, thumbnail } =
        logDoc.data() as Omit<InLogDataServer, "id">;
      logs.push({
        id: logDoc.id,
        title,
        subTitle: subTitle ? subTitle : "",
        category,
        createAt,
        thumbnail: thumbnail ? thumbnail : "",
      });
    });
  }
  // 최신글 8개만 반환
  logs
    .sort((a, b) => b.createAt.toMillis() - a.createAt.toMillis())
    .slice(0, 8);
  const result: Array<InGetLogProps> = logs.map((lg) => {
    const data = lg;
    const returnData = {
      ...data,
      createAt: data.createAt.toDate().toISOString(),
    };
    return returnData;
  });
  return result;
}

async function getLatestList() {
  const logs: Array<any> = [];

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
        subTitle: subTitle ? subTitle : "",
        category,
        createAt,
        thumbnail: thumbnail ? thumbnail : "",
      });
    });
  }
  // 최신글 8개만 반환
  logs
    .sort((a, b) => b.createAt.toMillis() - a.createAt.toMillis())
    .slice(0, 8);
  const result: Array<InGetLogProps> = logs.map((lg) => {
    const data = lg;
    const returnData = {
      ...data,
      createAt: data.createAt.toDate().toISOString(),
    };
    return returnData;
  });
  return result;
}

async function getList({ category, page = 1, size = 8, tag }: InGetListProps) {
  {
    /** TODO: tag list 요청시 startAt 기준 수정 */
  }
  const bloDocgRef = Firestore.collection(BLOG_COL).doc(category);
  const dataList = await Firestore.runTransaction(async (transaction) => {
    const blogDoc = await transaction.get(bloDocgRef);
    if (blogDoc.exists === false) {
      throw new CustomServerError({
        statusCode: 400,
        message: "존재하지 않는 카테고리",
      });
    }
    const blogDocInfo = blogDoc.data() as InBlogColData;
    const { logCount = 0 } = blogDocInfo;
    let totalElements;
    if (tag) {
      const tagsCol = await bloDocgRef
        .collection(LOGS_COL)
        .where("tags", "array-contains", tag)
        .get();
      totalElements = tagsCol.docs.length - 1;
    } else {
      totalElements = logCount !== 0 ? logCount - 1 : 0;
    }
    const remains = totalElements % size;
    const totalPages = (totalElements - remains) / size + (remains > 0 ? 1 : 0);
    const startAt = totalElements - (page - 1) * size;
    if (startAt < 0) {
      return { totalElements, totalPages: 0, page, size, content: [] };
    }
    let allTags: Array<string> = [];
    const logsColTags = await bloDocgRef.collection(LOGS_COL).get();
    logsColTags.forEach((log) => {
      const logTags = log.data().tags;
      logTags.forEach((tag: string) => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      });
    });
    let logsCol;
    if (tag) {
      logsCol = bloDocgRef
        .collection(LOGS_COL)
        .where("tags", "array-contains", tag)
        .orderBy("logNum", "desc");
    } else {
      logsCol = bloDocgRef.collection(LOGS_COL).orderBy("logNum", "desc");
    }
    // const logColLimeted = logsCol.startAt(startAt).limit(size);
    const logsColDoc = await transaction.get(logsCol);
    const data = logsColDoc.docs.map((log) => {
      const docData = log.data() as Omit<InLogDataServer, "id">;
      const returnData = {
        id: log.id,
        title: docData.title,
        subTitle: docData.subTitle || "",
        category: docData.category,
        createAt: docData.createAt.toDate().toISOString(),
        thumbnail: docData.thumbnail || "",
      } as InGetLogProps;
      return returnData;
    });
    return {
      totalElements,
      totalPages,
      page,
      size,
      allTags,
      contents: data,
    };
  });
  return dataList;
}

async function getItem({ id }: { id: string }) {
  const blogRef = Firestore.collection(BLOG_COL);
  const devRef = blogRef.doc(DEV_DOC).collection(LOGS_COL).doc(id);
  const lifeRef = blogRef.doc(LIFE_DOC).collection(LOGS_COL).doc(id);
  const data = await Firestore.runTransaction(async (transaction) => {
    const devRefDoc = await transaction.get(devRef);
    const lifeRefDoc = await transaction.get(lifeRef);
    if (!devRefDoc.exists && !lifeRefDoc.exists) {
      throw new CustomServerError({
        statusCode: 400,
        message: "log를 찾을 수 없음",
      });
    }
    if (devRefDoc.exists) {
      const devLogData = devRefDoc.data() as Omit<InLogDataServer, "id">;
      const returnData = {
        ...devLogData,
        createAt: devLogData.createAt.toDate().toISOString(),
      } as InLogData;
      return returnData;
    }
    if (lifeRefDoc.exists) {
      const lifeLogData = lifeRefDoc.data() as Omit<InLogDataServer, "id">;
      const returnData = {
        ...lifeLogData,
        createAt: lifeLogData.createAt.toDate().toISOString(),
      } as InLogData;
      return returnData;
    }
  });
  return data;
}

const BoardsModel = { post, getList, getFeaturedList, getLatestList, getItem };

export default BoardsModel;
