"use client";
import styles from "./viewer.module.css";
import ReactMarkdown from "react-markdown";

export interface ViewerProps {
  content: string;
}

export default function Viewer({ content }: ViewerProps) {
  return (
    <div
      className={styles.viewer}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
