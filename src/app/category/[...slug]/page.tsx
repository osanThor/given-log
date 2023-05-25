import dynamic from "next/dynamic";
import { getTags } from "@/services/boards_service";
const BoardsContainer = dynamic(
  () => import("@/containers/boards/BoardsContainer"),
  { ssr: false }
);

type Props = {
  params: {
    slug: string | Array<string>;
  };
};

export function generateMetadata({ params }: Props) {
  let category;
  if (Array.isArray(params.slug)) {
    category =
      params.slug[0] === "dev"
        ? "개발"
        : params.slug[0] === "life"
        ? "인생"
        : "기묘한";
  } else {
    category =
      params.slug === "dev"
        ? "개발"
        : params.slug === "life"
        ? "인생"
        : "기묘한";
  }
  return {
    title: `GIVEN's LOG | ${category} 이야기`,
  };
}

const ListPage = async ({ params: { slug } }: Props) => {
  const category = slug[0] ?? "";
  const tag = slug[1] ?? "";
  const tags = await getTags(category);

  return <BoardsContainer category={category} tag={tag} tags={tags} />;
};

export default ListPage;
