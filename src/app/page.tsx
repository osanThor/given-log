import dynamic from "next/dynamic";
import { getFeaturedList, getLatestList } from "@/services/boards_service";
import Profile from "@/components/common/Profile";
import Title from "@/components/common/Title";
const List = dynamic(() => import("@/components/board/List"), { ssr: false });
const SlideList = dynamic(() => import("@/components/board/SlideList"), {
  ssr: false,
});

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
