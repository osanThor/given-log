"use client";

import { InLogData } from "@/interfaces/in_Boards";
import Moment from "react-moment";
import NoImage from "../../../public/assets/images/noimage.png";
import uuid from "react-uuid";
import Img from "@/components/common/Img";
import Viewer from "@/components/board/viewer/Viewer";

export default function BoardViewContainer({ data }: { data: InLogData }) {
  return (
    <div className="relative w-full overflow-hidden rounded max-h-max">
      <div className="max-h-[500px] overflow-hidden">
        <Img src={data.thumbnail || NoImage} alt="log thumbnail" />
      </div>
      <div className="relative left-0 w-full px-2 py-4 overflow-hidden bg-white rounded h-max">
        <div className="flex flex-col gap-1 mb-4 border-b border-gray-200">
          <div className="text-sm font-bold text-green-500 uppercase">
            {data.category}
          </div>
          <div className="text-3xl font-bold">{data.title}</div>
          <div className="text-lg font-bold text-gray-700">{data.subTitle}</div>
          <div className="text-sm text-gray-400">
            <Moment format="YYYY.MM.DD">{data.createAt}</Moment>
          </div>
          <div className="flex flex-wrap gap-1 py-2">
            {data.tags?.map((el) => (
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
    </div>
  );
}
