import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";
import Title from "@/components/common/Title";
import { InGetLogProps } from "@/interfaces/in_Boards";
import { getMainList } from "@/services/get_list";

export const dynamicParams = true;

interface Props {
  latestList: Array<InGetLogProps>;
  featuredist: Array<InGetLogProps>;
}

const HomePage = async () => {
  const test = await getMainList();

  if (!test) return <div>데이터가 없습니다</div>;

  return (
    <>
      <Title title="📑 Latest Logs" />
      <List list={test} />
      <Title title="⭐️ Featured Logs" />
      <SlideList list={test} />
    </>
  );
};

export default HomePage;
