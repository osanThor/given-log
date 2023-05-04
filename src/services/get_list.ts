import client from "@/lib/api/client";

export async function getMainList(): Promise<any> {
  try {
    const result = await Promise.all([
      client("/api/boards/getList/latest"),
      client("/api/boards/getList/featured"),
    ]);

    return result;
  } catch (err) {
    console.error(err);
  }
}
