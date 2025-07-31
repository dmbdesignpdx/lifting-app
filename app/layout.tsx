// Theirs
import type { PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";

// Ours
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Label, Url, Meta } from "@/constants";
import "./globals.css";


const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: Url.BASE,
  title: Meta.NAME,
  description: Meta.DESCRIPTION,
  authors: [{ name: Meta.AUTHOR, url: Url.AUTHOR.origin }],
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: Url.AUTHOR.pathname,
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
  themeColor: Meta.THEME_COLOR,
  colorScheme: "light dark",
};


export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        <Header heading={Label.HEADING} />
        <main data-wrap>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
