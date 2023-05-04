import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";
import Title from "@/components/common/Title";
import { getMainList } from "@/services/get_list";

const HomePage = async () => {
  const result = await getMainList();

  return (
    <>
      <Title title="📑 Latest Logs" />
      <List list={result[0].data} />
      <Title title="⭐️ Featured Logs" />
      <SlideList list={result[1].data} />
    </>
  );
};

export default HomePage;
