import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";
import Title from "@/components/common/Title";
import axios from "axios";

const HomePage = async () => {
  const resp = await axios(
    "http://localhost:3000//api/boards/getList/featured"
  );
  return (
    <>
      <Title title="📑 Latest Logs" />
      <List list={resp.data} />
      <Title title="⭐️ Featured Logs" />
      <SlideList />
    </>
  );
};
export default HomePage;
