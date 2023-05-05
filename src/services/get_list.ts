import { InGetLogProps } from "@/interfaces/in_Boards";
import client from "@/lib/api/client";
interface Props {
  data: Array<InGetLogProps>;
}

export async function getMainList(): Promise<Array<InGetLogProps>> {
  // const result = await Promise.all([
  //   client("/api/boards/getList/latest"),
  //   client("/api/boards/getList/featured"),
  // ]);
  // const result: Props = await client("/api/boards/getList/latest");
  try {
    const res = await client("/api/boards/getList/latest");
    const json = await res.data;
    if (json.errors) {
      console.log(`url`);

      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }

    return json;
  } catch (e) {
    console.error("api error", { e });
    throw e;
  }
}
