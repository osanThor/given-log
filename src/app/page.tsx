import { getFeaturedList, getLatestList } from "@/services/boards_service";
import Profile from "@/components/common/Profile";
import Title from "@/components/common/Title";
import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";

export default async function HomePage() {
  const latestData = getLatestList();
  const featuredData = getFeaturedList();

  const [latestList, featuredList] = await Promise.all([
    latestData,
    featuredData,
  ]);

  return (
    <>
      <Profile />
      <Title title="⭐️ Featured Logs" />
      <List list={featuredList} />
      <Title title="📑 Latest Logs" />
      <SlideList list={latestList} />
    </>
  );
}
