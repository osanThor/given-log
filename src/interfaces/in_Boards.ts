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

export interface InSubProps {
  id: string;
  title: string;
  thumbnail: string;
}

export interface InLogData {
  category: string;
  featured: boolean;
  title: string;
  subTitle?: string;
  tags?: Array<string>;
  thumbnail?: string;
  contant: string;
  createAt: string;
  logNum: number;
  prev: InSubProps;
  next: InSubProps;
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

export interface getListProps {
  contents: Array<InGetLogProps>;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
