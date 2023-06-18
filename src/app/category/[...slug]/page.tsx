import { getTags } from "@/services/boards_service";
import { Metadata } from "next";
import BoardsContainer from "@/containers/boards/BoardsContainer";

type Props = {
  params: {
    slug: string | Array<string>;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  let category;
  if (Array.isArray(slug)) {
    category =
      slug[0] === "dev" ? "개발" : slug[0] === "life" ? "인생" : "기묘한";
  } else {
    category = slug === "dev" ? "개발" : slug === "life" ? "인생" : "기묘한";
  }
  return {
    title: `${category} 이야기`,
    description: "FrontEnd Developer Given Logs",
  };
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
