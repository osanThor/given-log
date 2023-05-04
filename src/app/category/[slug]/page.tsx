import List from "@/components/board/List";
import Title from "@/components/common/Title";
import client from "@/lib/api/client";

type Props = {
  params: {
    slug: string;
  };
};
export function generateMetadata({ params }: Props) {
  const category =
    params.slug === "developer"
      ? "개발"
      : params.slug === "life"
      ? "인생"
      : "기묘한";
  return {
    title: `GIVEN's LOG | ${category} 이야기`,
  };
}

export default async function ListPage({ params: { slug } }: Props) {
  const data = [
    {
      id: "mSTFNjaz2i5MHDukLthf",
      title: "렌더링 방식",
      subTitle: "next 렌더링 방식을 알아보자",
      category: "dev",
      createAt: "2023-05-02T16:12:11.891Z",
      thumbnail:
        "https://res.cloudinary.com/dynkqtrus/image/upload/v1683043844/cplemzbtpeqsawoejkrm.png",
    },
  ];

  return (
    <div>
      <Title title={`${slug} Logs`} />
      <List list={data} />
    </div>
  );
}
export async function generateStaticParams() {
  //ssg
  const categories = ["developer", "life"];
  return categories.map((category) => ({
    slug: category,
  }));
}
