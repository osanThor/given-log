import Header, { HeaderSpacer } from "@/components/common/Header";
import "./globals.css";
import Container from "@/components/common/Container";
import { Metadata } from "next";
import Footer from "@/components/common/Footer";
import { AuthProvider } from "@/contexts/auth.context";
import ReactQueryProvider from "@/contexts/ReactQuery";

import { pretendard } from "@/app/fonts";
import { getMetadata } from "@/utils/getMetadata";

export const metadata: Metadata = getMetadata();

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
