import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PATH } from "@/constants";
import { label, metaData } from "@/content";
import "./globals.css";

const geistMono = Geist_Mono({
  display: "swap",
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ["monospace"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: PATH.site.origin,
  title: metaData.title,
  description: metaData.description,
  authors: [{ name: metaData.author.name, url: metaData.author.website }],
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: metaData.canonical,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: metaData.themeColor,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={geistMono.variable}
      lang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
    >
      <body>
        <Header heading={label.heading} />
        <main className="wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
