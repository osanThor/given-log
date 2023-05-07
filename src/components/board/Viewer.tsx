"use client";
import ReactMarkdown from "react-markdown";

export interface ViewerProps {
  content: string;
}

export default function Viewer({ content }: ViewerProps) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
