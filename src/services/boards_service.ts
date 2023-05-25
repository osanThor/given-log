import { InGetLogProps } from "@/interfaces/in_Boards";

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

export async function getTags(category: string): Promise<Array<string>> {
  const res = await fetch(
    `${basicUrl}/api/boards/getList/tags?cate=${category}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

export async function getLog(id: string) {
  try {
    if (!id) {
      return null;
    }
    const res = await fetch(`${basicUrl}/api/boards/getItem?id=${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
