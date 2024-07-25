import BoardViewContainer from "@/containers/board/BoardViewContainer";
import { getLog } from "@/services/boards_service";
import { getMetadata } from "@/utils/getMetadata";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

interface Props {
  params: { id: string };
}
export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { title, subTitle } = await getLog(id);
  return getMetadata({
    title,
    description: subTitle,
  });
}

export default async function BoardPage({ params: { id } }: Props) {
  const data = await getLog(id);
  return <BoardViewContainer data={data} />;
}
