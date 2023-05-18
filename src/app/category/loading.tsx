import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import BoardSkeletonItem from "@/components/board/BoardSkeletonItem";
import uuid from "react-uuid";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
export default function BoardsPageLoading() {
  return (
    <>
      <div className="py-2 border-b border-gray-300">
        <Skeleton height={30} />
      </div>
      <div className="grid w-full grid-cols-1 gap-8 py-4 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {arr.map((el) => (
          <BoardSkeletonItem key={uuid()} />
        ))}
      </div>
    </>
  );
}
