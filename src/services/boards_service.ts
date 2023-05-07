import {
  InGetListPromiseType,
  InGetListProps,
  InGetLogProps,
} from "@/interfaces/in_Boards";

const basicUrl = process.env.NEXT_PUBLIC_BASE_URL || "http:localhost:3000";
export async function getLatestList(): Promise<Array<InGetLogProps>> {
  const res = await fetch(`${basicUrl}/api/boards/getList/latest`, {
    cache: "reload",
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function getFeaturedList(): Promise<Array<InGetLogProps>> {
  const res = await fetch(`${basicUrl}/api/boards/getList/featured`, {
    cache: "reload",
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function getList({
  category,
  page,
  tag,
}: InGetListProps): Promise<InGetListPromiseType> {
  const res = await fetch(
    `${basicUrl}/api/boards/getList?cate=${category}${
      page ? `&page${page}` : ""
    }${tag ? `&tag=${tag}` : ""}`,
    { cache: "reload", next: { revalidate: 1 } }
  );
  const data = await res.json();
  return data;
}

export async function getLog(id: string) {
  const res = await fetch(`${basicUrl}/api/boards/getItem?id=${id}`, {
    cache: "reload",
    next: { revalidate: 1 },
  });
  const data = await res.json();
  return data;
}
