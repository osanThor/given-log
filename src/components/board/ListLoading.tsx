import uuid from "react-uuid";
import BoardSkeletonItem from "./BoardSkeletonItem";

const arr = [1, 2, 3, 4];

export default function ListLoading() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {arr.map((el) => (
        <BoardSkeletonItem key={uuid()} />
      ))}
    </div>
  );
}
