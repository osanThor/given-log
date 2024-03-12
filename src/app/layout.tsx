import Header, { HeaderSpacer } from "@/components/common/Header";
import "./globals.css";
import localFont from "next/font/local";
import Container from "@/components/common/Container";
import { Metadata } from "next";
import Footer from "@/components/common/Footer";
import { AuthProvider } from "@/contexts/auth.context";
import ReactQueryProvider from "@/contexts/ReactQuery";

// Font files can be colocated inside of `app`
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
  description: "Front End Developer Blog",
  icons: {
    icon: "/favicon.ico",
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
