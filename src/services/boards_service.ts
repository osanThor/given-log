import { InGetLogProps, InLogData, getListProps } from "@/interfaces/in_Boards";
import { cache } from "react";

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || "http:localhost:3000";
export async function getLatestList(): Promise<Array<InGetLogProps>> {
  const res = await fetch(`${BASEURL}/api/boards/getList/latest`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export async function getFeaturedList(): Promise<Array<InGetLogProps>> {
  const res = await fetch(`${BASEURL}/api/boards/getList/featured`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export const getList = cache(
  async (
    category: string,
    page: number,
    tag: string | undefined
  ): Promise<getListProps> => {
    const res = await fetch(
      `${BASEURL}/api/boards/getList?cate=${category}&page=${page}${
        tag ? `&tag=${tag}` : ""
      }`
    );
    const data = await res.json();
    return data;
  }
);

export const getTags = cache(
  async (category: string): Promise<Array<string>> => {
    const res = await fetch(
      `${BASEURL}/api/boards/getList/tags?cate=${category}`
    );
    const data = await res.json();
    return data;
  }
);

export const getLog = async (id: string): Promise<InLogData> => {
  const res = await fetch(`${BASEURL}/api/boards/getItem?id=${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
};
