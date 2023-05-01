"use client";
import styles from "./editor.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ align: [] }],
    ["code", "link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "align",
  "code",
  "link",
  "image",
];
export default function Editor() {
  return (
    <div id="editor" className={styles.editorBlock}>
      <ReactQuill
        theme="bubble"
        className={styles.quill}
        modules={modules}
        scrollingContainer={"#editor"}
        formats={formats}
      />
    </div>
  );
}
