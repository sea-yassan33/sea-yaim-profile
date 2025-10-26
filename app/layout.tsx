import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";

export const metadata: Metadata = {
  title: "SYAIM | Sea-yassan portfolio",
  description: "SYIM | ポートフォリオサイト。開発メソッドや制作実績を掲載しています。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/icon.png" type="image/x-icon" sizes="16x16" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
