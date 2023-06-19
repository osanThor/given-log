import { InSubProps } from "@/interfaces/in_Boards";
import Image from "next/image";
import Link from "next/link";
import NoImage from "../../../public/assets/images/noimage.png";
import { RiArrowLeftSFill,RiArrowRightSFill } from "react-icons/ri";

type Props = {
  board: InSubProps;
  type: "prev" | "next";
};
export default function AdjacentBoardCard({
  board: { id, thumbnail, title },
  type,
}: Props) {
  return (
    <Link
      href={`/board/${id}`}
      className="relative flex items-center justify-center flex-1 overflow-hidden bg-black group max-h-40"
    >
      <Image
        src={thumbnail || NoImage}
        alt={`${title} thumbnail`}
        className="object-cover w-full transition opacity-40 group-hover:scale-105"
        width={150}
        height={100}
      />
      <div className="absolute z-10 flex items-center justify-center w-full gap-2 font-bold transition -translate-x-1/2 -translate-y-1/2 text-neutral-300 group-hover:text-white top-1/2 left-1/2 ">
        {type === "prev" && (
          <RiArrowLeftSFill className="transition group-hover:text-2xl" />
        )}
        <p>{title}</p>
        {type === "next" && (
          <RiArrowRightSFill className="transition group-hover:text-2xl" />
        )}
      </div>
    </Link>
  );
}
