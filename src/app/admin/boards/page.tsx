import Link from "next/link";

export default function BoardsPage() {
  return (
    <div>
      {/** TODO: get boards list  */}
<div className="flex justify-center w-full">
      <Link href={"/admin/boards/write"} className="px-8 py-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-400">
        글쓰기
      </Link>
    </div>
    </div>
  );
}
