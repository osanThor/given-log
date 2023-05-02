import { firestore } from "firebase-admin";

export interface BasicProps {
  category: string;
  featured: boolean;
  title: string;
  subTitle?: string;
  tags?: Array<string>;
  thumbnail?: string;
  contant: string;
}

export interface InLogData extends BasicProps {
  createAt: string | firestore.FieldValue;
  logNum: number;
}

export interface InBlogColData {
  category: string;
  logCount: number;
}
