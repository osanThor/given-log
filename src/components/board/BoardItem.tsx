"use client";
import Image from "next/image";
import Link from "next/link";
import { InGetLogProps } from "@/interfaces/in_Boards";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Moment from "react-moment";
import { useEffect, useState } from "react";
import React from "react";

const ImageLoader = ({ src }: { src: string }) => {
  const imageSrc = `${src}`;
  return imageSrc;
};

const BoardItem = ({ item }: { item: InGetLogProps }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="overflow-hidden group transition-transform border border-gray-300 rounded-lg shadow-lg h-ful max-h-96">
      <Link className="flex-col flex w-full h-full" href={`/board/${item.id}`}>
        {item && (
          <div className="relative max-h-[calc(100%-120px)] h-full min-h-[calc(100%-120px)] overflow-hidden">
            <Image
              loader={ImageLoader}
              src={item.thumbnail || "/assets/images/noimage.png"}
              alt="no-image"
              className="object-cover"
              onLoad={() => setLoading(false)}
              width={"400"}
              height={160}
              unoptimized
              style={{ width: "100%", minHeight: "100%", height: "100%" }}
            />
            <div className="transition-all opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/40" />
            {loading && (
              <Skeleton
                height={160}
                borderRadius={0}
                className="absolute top-0 left-0 flex"
              />
            )}
          </div>
        )}
        <div className="px-2 pt-2 pb-4 flex-1">
          <span className="mb-2 text-xs font-bold text-green-500 uppercase">
            {item?.category || <Skeleton width={70} />}
          </span>
          <h2 className="w-full mb-1 font-bold truncate">
            {item?.title || <Skeleton />}
          </h2>
          <h3 className="w-full mb-2 text-sm text-gray-400 truncate">
            {item?.subTitle || <Skeleton width={70} />}
          </h3>
          <div className="flex justify-between">
            <span className="text-xs text-gray-500">
              {item && mounted ? (
                <Moment format="YYYY.MM.DD">{item?.createAt}</Moment>
              ) : (
                <Skeleton width={70} />
              )}
            </span>
            {/* 후에 댓글, 좋아요 count 추가   */}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default React.memo(BoardItem);
