"use client";
import styles from "./editor.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useMemo, useRef } from "react";
import ImageUpload from "@/services/image_uploader";

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

export default function Editor({
  contant,
  onChange,
}: {
  contant: ReactQuill.Value | string;
  onChange: (val: string) => void;
}) {
  const quillRef = useRef<ReactQuill>(null);

  function EditorImageUpload() {
    try {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", ".gif, .jpg, .png");
      input.click();

      input.onchange = async () => {
        const file = input.files[0];

        // file 데이터 담아서 서버에 전달하여 이미지 업로드
        const res = await ImageUpload(file);

        if (quillRef.current) {
          // 현재 Editor 커서 위치에 서버로부터 전달받은 이미지 불러오는 url을 이용하여 이미지 태그 추가
          const index = (
            quillRef.current.getEditor().getSelection() as RangeStatic
          ).index;

          const quillEditor = quillRef.current.getEditor();
          quillEditor.setSelection(index, 1);

          quillEditor.clipboard.dangerouslyPasteHTML(
            index,
            `<img src=${res.secure_url} alt=${"alt text"} />`
          );
        }
      };
    } catch (err) {
      console.error(err);
      alert(err);
    }
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
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
        handlers: {
          image: EditorImageUpload, // 이미지 tool 사용에 대한 핸들러 설정
        },
      },
    }),
    []
  );

  return (
    <div id="editor" className={styles.editorBlock}>
      <ReactQuill
        ref={quillRef}
        theme="bubble"
        className={styles.quill}
        modules={modules}
        scrollingContainer={"#editor"}
        formats={formats}
        value={contant}
        onChange={onChange}
      />
    </div>
  );
}
