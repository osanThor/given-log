import BoardItem from "./BoardItem";

const Array = [1, 2, 3, 4, 5, 6, 7, 8];

export default function List() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 p-4 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.map((el, idx) => (
        <BoardItem key={idx} />
      ))}
    </div>
  );
}
