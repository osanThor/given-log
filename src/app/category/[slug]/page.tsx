import List from "@/components/board/List";
import Title from "@/components/common/Title";
import { getList } from "@/services/boards_service";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  const category =
    params.slug === "developer"
      ? "개발"
      : params.slug === "life"
      ? "인생"
      : "기묘한";
  return {
    title: `GIVEN's LOG | ${category} 이야기`,
  };
}

const ListPage = async ({ params: { slug } }: Props) => {
  const category =
    slug === "developer" ? "dev" : slug === "life" ? slug : "unknown";
  const data = await getList({ category });
  return (
    <div>
      <Title title={`${slug} Logs`} />
      <List list={data.contents} />
    </div>
  );
};
export async function generateStaticParams() {
  //ssg
  const categories = ["developer", "life"];
  return categories.map((category) => ({
    slug: category,
  }));
}
export default ListPage;
