import uuid from "react-uuid";
import BoardItem from "./BoardItem";
import { InGetLogProps } from "@/interfaces/in_Boards";

export default function List({ list }: { list: Array<InGetLogProps> }) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {list && list.map((el) => <BoardItem key={uuid()} item={el} />)}
    </div>
  );
}
