import Header, { HeaderSpacer } from "@/components/common/Header";
import "./globals.css";
import localFont from "next/font/local";
import Container from "@/components/common/Container";
import { Metadata } from "next";
import Footer from "@/components/common/Footer";
import { AuthProvider } from "@/contexts/auth.context";
import ReactQueryProvider from "@/contexts/ReactQuery";

const BASE_URL = new URL(
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
);

const pretendard = localFont({
  src: [
    {
      path: "./assets/fonts/pretendard/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/fonts/pretendard/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/pretendard/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./assets/fonts/pretendard/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/pretendard/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: { default: "GIVEN's LOG", template: "GIVEN's LOG | %s" },
  description: "Front End Developer Given's Blog",
  metadataBase: BASE_URL,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: { rel: "icon", url: "/favicon.ico", sizes: "48x48" },
    apple: [
      { rel: "", url: `${BASE_URL}assets/images/apple-icon.png` },
      {
        url: `${BASE_URL}assets/images/apple-icon-57x57.png`,
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/apple-icon-60x60.png`,
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/apple-icon-76x76.png`,
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/apple-icon-114x114.png`,
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/apple-icon-120x120.png`,
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/apple-icon-144x144.png`,
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/apple-icon-152x152.png`,
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/apple-icon-180x180.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: `${BASE_URL}assets/images/apple-icon-precomposed.png`,
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: { default: "GIVEN's LOG", template: "GIVEN's LOG | %s" },
    description: "Front End Developer Given's Blog",
    url: BASE_URL,
    siteName: "Given's log",
    images: [
      {
        url: `${BASE_URL}assets/images/op_image.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${BASE_URL}assets/images/op_image.png`,
        width: 1800,
        height: 1600,
        alt: "Given's log",
      },
    ],
    type: "website",
  },
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <ReactQueryProvider>
          <AuthProvider>
            <Header />
            <HeaderSpacer />
            <Container>{children}</Container>
            <Footer />
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
