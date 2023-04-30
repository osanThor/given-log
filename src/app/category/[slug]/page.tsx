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
export default function DeveloperPage({ params: { slug } }: Props) {
  return <div>{slug} page</div>;
}
export async function generateStaticParams() {
  //ssg
  const categories = ["developer", "life"];
  return categories.map((category) => ({
    slug: category,
  }));
}
