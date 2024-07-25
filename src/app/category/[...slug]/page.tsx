import { getTags } from "@/services/boards_service";
import { Metadata } from "next";
import BoardsContainer from "@/containers/boards/BoardsContainer";
import { getMetadata } from "@/utils/getMetadata";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    slug: string | Array<string>;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const cate = slug[0];
  const category =
    cate === "dev" ? "개발" : cate === "life" ? "인생" : "기묘한";

  return getMetadata({
    title: `${category} 이야기`,
    description: `개발자 준영의 ${category} 이야기- FrontEnd Developer Given's ${cate} Logs`,
  });
}

const ListPage = async ({ params: { slug } }: Props) => {
  const category = slug[0] ?? "";
  const tag = slug[1] ?? "";
  const tags = await getTags(category);

  return (
    <>
      <BoardsContainer category={category} tag={tag} tags={tags} />
    </>
  );
};

export default ListPage;
