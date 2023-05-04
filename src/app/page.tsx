import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";
import Title from "@/components/common/Title";
import { InGetLogProps } from "@/interfaces/in_Boards";
import { getMainList } from "@/services/get_list";

interface Props {
  latestList: Array<InGetLogProps>;
  featuredist: Array<InGetLogProps>;
}

async function getData() {
  const res = await fetch("http://localhost:300/api/boards/getList/latest", {
    next: { revalidate: 10 },
  });
  const data = res.json();
  return data;
  // const result = await getMainList();
  // const latestList = await result[0].data;
  // const featuredist = await result[1].data;
  // return { props: { latestList, featuredist } };
}

const HomePage = async () => {
  // const data = await getData();
  return (
    <>
      <Title title="📑 Latest Logs" />
      {/* <List list={data} /> */}
      <Title title="⭐️ Featured Logs" />
      {/* <SlideList list={data} /> */}
    </>
  );
};

export default HomePage;
