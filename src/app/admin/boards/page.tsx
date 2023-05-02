import Link from "next/link";

export default function BoardsPage() {
  return (
    <div>
      {/** TODO: get boards list  */}
      <Link href={"/admin/boards/write"}>글쓰기</Link>
    </div>
  );
}
