import uuid from "react-uuid";
import BoardItem from "./BoardItem";

const Array = [1, 2, 3, 4, 5, 6, 7, 8];

export default function List({ list }: { list?: Array<any> }) {
  return (
    <div className="grid w-full grid-cols-1 gap-8 py-4 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {list
        ? list.map((el) => <BoardItem key={uuid()} item={el} />)
        : Array.map(() => <BoardItem key={uuid()} />)}
    </div>
  );
}
