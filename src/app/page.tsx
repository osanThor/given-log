import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";
import Title from "@/components/common/Title";
import client from "@/lib/api/client";

const HomePage = async () => {
  const { data: featuredList } = await client("/api/boards/getList/featured");
  const { data: latestList } = await client("/api/boards/getList/latest");

  return (
    <>
      <Title title="📑 Latest Logs" />
      <List list={featuredList} />
      <Title title="⭐️ Featured Logs" />
      <SlideList list={latestList} />
    </>
  );
};
export default HomePage;
