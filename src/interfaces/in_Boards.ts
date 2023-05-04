import { firestore } from "firebase-admin";
import ReactQuill from "react-quill";

export interface BasicProps {
  category: string;
  featured: boolean;
  title: string;
  subTitle?: string;
  tags?: Array<string>;
  thumbnail?: string;
  contant: ReactQuill.Value | string;
}

export interface InLogData extends BasicProps {
  createAt: string | firestore.FieldValue;
  logNum: number;
}

export interface InBlogColData {
  category: string;
  logCount: number;
}

export interface InGetListProps {
  category?: string;
  page?: number;
  size?: number;
}

export interface InBoardItemProps {
  title: string;
  subTitle: string;
  category: string;
  createAt: string | firestore.FieldValue;
  thumbnail: string;
}
