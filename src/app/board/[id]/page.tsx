import BoardViewContainer from "@/containers/board/BoardViewContainer";
import { getLog } from "@/services/boards_service";

interface Props {
  params: { id: string };
}

export default async function BoardPage({ params: { id } }: Props) {
  // const data = await getLog(id);
  return <BoardViewContainer id={id} />;
}
