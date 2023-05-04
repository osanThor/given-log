import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";
import Title from "@/components/common/Title";
import client from "@/lib/api/client";

const HomePage = async () => {
  const { data: latestList } = await client("/api/boards/getList/latest");
  const { data: featuredList } = await client("/api/boards/getList/featured");

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
