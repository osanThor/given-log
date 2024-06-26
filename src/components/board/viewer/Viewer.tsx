"use client";

import styles from "./viewer.module.css";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/atom-one-dark.css";

export interface ViewerProps {
  content: string;
}

export default function Viewer({ content }: ViewerProps) {
  return (
    <div className={styles.viewer}>
      <div className="ql-snow">
        <div className="!px-0 ql-editor">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}
