// Theirs
import type { PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";

// Ours
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Label } from "@/constants";
import "./globals.css";


const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: Label.HEADING,
  description: "A simple calculator for Olympic lifting",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#a855f7",
  colorScheme: "light dark",
};


export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.className}`}
        data-wrap
      >
        <Header heading={Label.HEADING} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
