"use client";

import { InLogData } from "@/interfaces/in_Boards";
import Moment from "react-moment";
import { v4 as uuid } from "uuid";
import Img from "@/components/common/Img";
import Viewer from "@/components/board/viewer/Viewer";
import AdjacentBoardCard from "@/components/board/AdjacentBoardCard";

export default function BoardViewContainer({ data }: { data: InLogData }) {
  const { thumbnail, category, title, subTitle, createAt, tags, prev, next } =
    data;
  return (
    <div className="relative w-full overflow-hidden rounded max-h-max">
      <div className="max-h-[500px] overflow-hidden">
        <Img
          src={thumbnail || "/assets/images/noimage.png"}
          alt="log thumbnail"
          unoptimized
          priority
        />
      </div>
      <div className="relative left-0 w-full px-0 py-4 overflow-hidden bg-white rounded h-max md:px-2">
        <div className="flex flex-col gap-1 mb-4 border-b border-gray-200">
          <div className="text-sm font-bold text-green-500 uppercase">
            {category}
          </div>
          <div className="text-3xl font-bold">{title}</div>
          <div className="text-lg font-bold text-gray-700">{subTitle}</div>
          <div className="text-sm text-gray-400">
            <Moment format="YYYY.MM.DD">{createAt}</Moment>
          </div>
          <div className="flex flex-wrap gap-1 py-2">
            {tags &&
              tags.map((el) => (
                <div
                  key={uuid()}
                  className="px-2 py-1 text-sm text-gray-500 border border-gray-300 rounded-full"
                >
                  #{el}
                </div>
              ))}
          </div>
        </div>
        <Viewer content={data.contant} />
      </div>
      <div className="flex shadow-40">
        {prev && <AdjacentBoardCard board={prev} type="prev" />}
        {next && <AdjacentBoardCard board={next} type="next" />}
      </div>
    </div>
  );
}
