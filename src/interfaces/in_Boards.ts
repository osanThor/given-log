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

export interface InLogDataServer extends BasicProps {
  createAt: firestore.Timestamp;
  logNum: number;
}

export interface InLogData extends BasicProps {
  createAt: string;
}

export interface InGetLogProps {
  category: string;
  title: string;
  subTitle: string;
  createAt: string;
  thumbnail: string;
  id: string;
}

export interface InBlogColData {
  category: string;
  logCount: number;
}

export interface InGetListProps {
  category: string;
  page?: number;
  size?: number;
  tag?: string;
}
