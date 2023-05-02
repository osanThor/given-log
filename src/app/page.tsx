import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";
import Title from "@/components/common/Title";

export default function Home() {
  return (
    <>
      <Title title="📑 Latest Logs" />
      <List />
      <Title title="⭐️ Featured Logs" />
      <SlideList />
    </>
  );
}
