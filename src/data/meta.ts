const BASE_URL = new URL(
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
);
export const META = {
  title: "GIVEN's LOG: 개발자 준영의 블로그",
  siteName: "GIVEN's LOG",
  description:
    "개발자 준영의 이것저것 블로그 - Front End Developer Given's Blog",
  keyword: [
    "블로그",
    "개발자",
    "프론트엔드",
    "일상",
    "개발",
    "javascript",
    "react",
    "next",
    "캠핑",
    "목표달성",
  ],
  url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  naverVerification: process.env.NAVER_SITE_VERIFICATION || "",
  ogImage: `/assets/images/op_image.png`,
} as const;
