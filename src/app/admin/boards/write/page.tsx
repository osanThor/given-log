"use client";

import { useState } from "react";
import uuid from "react-uuid";
import { AiFillCloseCircle } from "react-icons/ai";
import Editor from "@/components/admin/boards/Editor";

export default function BoardWritePage() {
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const handleChangeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTag(value);
  };
  const handleAddTag = () => {
    if (!tag) return alert("tag 입력해줘");
    if (tags.includes(tag)) {
      return alert("존재하는 tag");
    }
    setTags((prev) => [...prev, tag]);
    setTag("");
  };
  const handleDeleteTag = (str: string) => {
    setTags(tags.filter((el) => el !== str));
  };

  return (
    <div className="w-full">
      {/** TODO: FEATURED, TITLE,SUBTITLE,TAGS, THUMBNAIL, CONTANT,  POST  */}
      <div className="px-2 py-4 mb-4 font-bold text-gray-800 border-b border-gray-300">
        글쓰기
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 ">
          <label className="min-w-[120px]">Featured</label>
          <input type="checkbox" name="featured" />
        </div>
        <div className="flex flex-col gap-2 md:flex-row ">
          <label className="min-w-[120px]">Title</label>
          <input
            type="text"
            name="title"
            autoComplete="title"
            className="w-full h-10 px-2 border border-gray-300 rounded focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row ">
          <label className="min-w-[120px]">Sub Title</label>
          <input
            type="text"
            name="subTitle"
            autoComplete="subTitle"
            className="w-full h-10 px-2 border border-gray-300 rounded focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row ">
          <label className="min-w-[120px]">Tags</label>
          <div className="flex flex-col w-full">
            <div className="flex w-full gap-1">
              <input
                type="text"
                name="tags"
                autoComplete="tags"
                value={tag}
                onChange={handleChangeTag}
                className="w-full h-10 px-2 border border-gray-300 rounded focus:border-blue-500"
              />
              <button
                onClick={handleAddTag}
                className="px-2 py-1 bg-blue-500 min-w-[80px] rounded text-white text-xs font-bold "
              >
                추가
              </button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap w-full gap-2 py-4">
                {tags.map((el) => (
                  <div
                    key={uuid()}
                    className="flex items-center gap-1 px-2 py-1 text-gray-700 border border-gray-700 rounded"
                  >
                    {`#${el}`}
                    <button onClick={() => handleDeleteTag(el)}>
                      <AiFillCloseCircle />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row ">
          <label className="min-w-[120px]">Thumbnail</label>
          <input type="file" name="thumbnail" className="h-10" />
        </div>
        <div className="flex flex-col gap-2 md:flex-row ">
          <label className="min-w-[120px]">Contant</label>
          <Editor />
        </div>
        <button className="w-full max-w-[200px] mx-auto h-10 bg-blue-600 text-white">
          글쓰기
        </button>
      </div>
    </div>
  );
}
