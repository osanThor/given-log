import { InGetLogProps } from "@/interfaces/in_Boards";

const basicUrl = process.env.NEXT_PUBLIC_BASE_URL || "http:localhost:3000";
export async function getLatestList(): Promise<Array<InGetLogProps>> {
  const res = await fetch(`${basicUrl}/api/boards/getList/latest`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export async function getFeaturedList(): Promise<Array<InGetLogProps>> {
  const res = await fetch(`${basicUrl}/api/boards/getList/featured`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}
