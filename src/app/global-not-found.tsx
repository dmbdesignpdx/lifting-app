import type { Metadata, Viewport } from "next";

import { buttonVariants } from "@/components/button";
import { PATH } from "@/constants";
import { notFound } from "@/content/copy";
import { label } from "@/content/labels";
import { metaData } from "@/content/meta";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: PATH.site.origin,
  title: `${notFound.title} - ${metaData.title}`,
  description: notFound.message,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: metaData.themeColor,
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      dir="ltr"
    >
      <body>
        <main className="wrapper block-svh flex flex-col items-center justify-center gap-8 text-center">
          <p
            className="text-3xl"
            aria-hidden="true"
          >
            ☠️
          </p>
          <h2 className="font-[monospace] font-normal text-clamp trim text-primary">
            <span className="sr-only">{notFound.code} - </span>
            {notFound.title}
          </h2>
          <p className="font-[sans-serif] text-gray-200 max-inline-[50ch]">{notFound.message}</p>
          <a
            href="/"
            className={buttonVariants({ variant: "solid" })}
          >
            {label.back}
          </a>
        </main>
      </body>
    </html>
  );
}
