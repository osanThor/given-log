import Title from "@/components/common/Title";
import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";
import { getFeaturedList, getLatestList } from "@/services/get_list";

export const revalidate = 3;

const HomePage = async () => {
  const latestData = getLatestList();
  const featuredData = getFeaturedList();

  const [latestList, featuredList] = await Promise.all([
    latestData,
    featuredData,
  ]);

  return (
    <>
      <Title title="📑 Latest Logs" />
      <List list={latestList} />
      <Title title="⭐️ Featured Logs" />
      <SlideList list={featuredList} />
    </>
  );
};

export default HomePage;
