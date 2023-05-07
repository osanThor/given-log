"use client";

import classNames from "classnames";
import Link from "next/link";
import uuid from "react-uuid";

const TagsBox = ({
  allTags,
  cate,
  tag: tagProps,
}: {
  allTags: Array<string>;
  cate: string;
  tag: string | undefined;
}) => {
  const handleClickTag = () => {
    alert("준비중입니다.");
    return;
  };
  return (
    <div className="flex-[0.5] border p-2 px-3 rounded-xl w-full border-gray-300 order-1 md:order-2 md:w-auto bg-gray-100">
      <h3 className="w-full mb-2 text-sm font-medium">Tags</h3>
      <ul className="flex flex-wrap gap-1">
        <li
          className={classNames(
            "p-1 px-2 text-xs border border-gray-300 rounded-full cursor-pointer",
            { "bg-blue-200": !tagProps, "bg-white": tagProps }
          )}
        >
          <Link href={`/category/${cate}`}>#ALL</Link>
        </li>
        {allTags.map((tag) => (
          <li
          onClick={handleClickTag}  
          key={uuid()}
            className={classNames(
              "p-1 px-2 text-xs border border-gray-300 rounded-full  cursor-pointer",
              { "bg-blue-200": tagProps === tag, "bg-white": tagProps !== tag }
            )}
          >
            #{tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsBox;
