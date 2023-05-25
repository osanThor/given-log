import BoardsContainer from "@/containers/boards/BoardsContainer";
import { getTags } from "@/services/boards_service";

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
  let category;
  let tag;
  if (Array.isArray(slug)) {
    category =
      slug[0] === "dev" ? slug[0] : slug[0] === "life" ? slug[0] : "unknown";
    tag = slug[1];
  } else {
    category = slug === "dev" ? "dev" : slug === "life" ? slug : "unknown";
    tag = undefined;
  }
  const tags = await getTags(category);

  return <BoardsContainer category={category} tag={tag} tags={tags} />;
};

export default ListPage;
