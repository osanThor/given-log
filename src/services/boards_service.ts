import { InGetLogProps, InLogData, getListProps } from "@/interfaces/in_Boards";
import client from "@/lib/api/client";
import { cache } from "react";

const basicUrl = process.env.NEXT_PUBLIC_BASE_URL || "http:localhost:3000";
export async function getLatestList(): Promise<Array<InGetLogProps>> {
  const res = await fetch(`${basicUrl}/api/boards/getList/latest`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export async function getFeaturedList(): Promise<Array<InGetLogProps>> {
  const res = await fetch(`${basicUrl}/api/boards/getList/featured`, {
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
    const res = await client.get(
      `/api/boards/getList?cate=${category}&page=${page}${
        tag ? `&tag=${tag}` : ""
      }`
    );
    const data = await res.data;
    return data;
  }
);

export const getTags = cache(
  async (category: string): Promise<Array<string>> => {
    const res = await fetch(
      `${basicUrl}/api/boards/getList/tags?cate=${category}`
    );
    const data = await res.json();
    return data;
  }
);

export const getLog = cache(async (id: string): Promise<InLogData> => {
  const res = await fetch(`${basicUrl}/api/boards/getItem?id=${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
});
