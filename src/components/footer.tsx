import { Suspense } from "react";

import { Link } from "@/components/link";
import { footer, footerLink } from "@/content";

async function CurrentYear() {
  "use cache";
  return <span>{new Date().getFullYear()}</span>;
}

export function Footer() {
  return (
    <footer className="py-14 mbs-20 bg-surface text-surface-foreground [content-visibility:auto] [contain-intrinsic-size:auto_300px]">
      <div className="wrapper">
        <p>
          {footer.author}{" "}
          <Link
            href={footerLink.author.url}
            label={footerLink.author.label}
            newTab
          />{" "}
          using{" "}
          <Link
            href={footerLink.next.url}
            label={footerLink.next.label}
            newTab
          />{" "}
          and{" "}
          <Link
            href={footerLink.tailwind.url}
            label={footerLink.tailwind.label}
            newTab
          />
          .
        </p>
        <p>
          <small>
            {footer.copyright}{" "}
            <Suspense fallback={<span>1985</span>}>
              <CurrentYear />
            </Suspense>{" "}
            {footer.disclaimer}
          </small>
        </p>
      </div>
    </footer>
  );
}
