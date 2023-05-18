import Title from "@/components/common/Title";
import List from "@/components/board/List";
import SlideList from "@/components/board/SlideList";
import { getFeaturedList, getLatestList } from "@/services/boards_service";
import Profile from "@/components/common/Profile";
import MainPageLoading from "./loading";

export const revalidate = 10;

export default async function HomePage() {
  const latestData = getLatestList();
  const featuredData = getFeaturedList();

  const [latestList, featuredList] = await Promise.all([
    latestData,
    featuredData,
  ]);

  if (!latestList || !featuredList) {
    return <MainPageLoading />;
  }

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
