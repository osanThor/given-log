"use client";

import { useState } from "react";
import uuid from "react-uuid";
import { AiFillCloseCircle } from "react-icons/ai";
import Editor from "@/components/admin/boards/Editor";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import ReactQuill from "react-quill";
import { BasicProps } from "@/interfaces/in_Boards";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function BoardWritePage() {
  const router = useRouter();

  const [category, setCategory] = useState<string>("dev");
  const [featured, setFeatured] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [contant, setContent] = useState<ReactQuill.Value | string>("");

  const handleChangeCate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (value === "dev" && checked) {
      setCategory(value);
    } else if (value === "life" && checked) {
      setCategory(value);
    }
  };

  const handleChangeFeatured = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFeatured(checked);
  };

  const handleChangeTitleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "subTitle") {
      setSubTitle(value);
    }
  };

  const handleUploadImage = async (e: any) => {
    console.log(e);
    const resp = await e.info.secure_url;
    if (resp) {
      setThumbnail(resp);
      console.log(thumbnail);
    }
  };

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

  const handleChangeContant = (val: string) => {
    setContent(val);
  };

  const handlePost = async () => {
    if (!title) return alert("제목!");
    if (!subTitle) return alert("부제목!");
    if (!contant) return alert("내용 써야지!");

    try {
      const body: BasicProps = {
        category,
        featured,
        title,
        subTitle,
        thumbnail,
        tags,
        contant,
      };
      const resp = await axios.post("/api/boards/post", body);
      console.log(resp);

      if (resp) {
        alert("작성 완료");
        router.push("/admin/boards");
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <div className="w-full">
      {/** TODO: FEATURED, TITLE,SUBTITLE,TAGS, THUMBNAIL, CONTANT,  POST  */}
      <div className="px-2 py-4 mb-4 font-bold text-gray-800 border-b border-gray-300">
        글쓰기
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 ">
          <label className="min-w-[120px]">Category</label>
          <div className="flex items-center h-10 gap-2">
            <label className="cursor-pointer">
              <input
                type="radio"
                className="mr-1"
                name="category"
                value="dev"
                onChange={handleChangeCate}
                checked={category === "dev"}
              />
              DEV
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                className="mr-1"
                name="category"
                value="life"
                onChange={handleChangeCate}
                checked={category === "life"}
              />
              Life
            </label>
          </div>
        </div>
        <div className="flex gap-2 ">
          <label className="min-w-[120px]">Featured</label>
          <div className="flex items-start h-10 pt-1">
            <input
              type="checkbox"
              name="featured"
              onChange={handleChangeFeatured}
              checked={featured}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row ">
          <label className="min-w-[120px]">Title</label>
          <input
            type="text"
            name="title"
            autoComplete="title"
            value={title ? title : ""}
            onChange={handleChangeTitleInputs}
            className="w-full h-10 px-2 border border-gray-300 rounded focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2 md:flex-row ">
          <label className="min-w-[120px]">Sub Title</label>
          <input
            type="text"
            name="subTitle"
            autoComplete="subTitle"
            value={subTitle ? subTitle : ""}
            onChange={handleChangeTitleInputs}
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
          <div className="flex flex-col w-full gap-2">
            {thumbnail && (
              <CldImage
                alt={"preview"}
                src={thumbnail}
                width={600}
                height={400}
              />
            )}
            <CldUploadWidget
              uploadPreset={"qalkk6fn"}
              onUpload={handleUploadImage}
            >
              {({ open, results }) => {
                function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
                  e.preventDefault();
                  open();
                }
                return (
                  <button
                    onClick={handleOnClick}
                    className="h-10 text-white bg-blue-500 rounded"
                  >
                    Upload
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row ">
          <label className="min-w-[120px]">Contant</label>
          <Editor contant={contant} onChange={handleChangeContant} />
        </div>
        <button
          onClick={handlePost}
          className="w-full max-w-[200px] mx-auto h-10 bg-blue-600 text-white"
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}
