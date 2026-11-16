import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
}

const buttonVariants = cva(
  "font-bold min-size-ui rounded-sm py-2 mbs-6 whitespace-nowrap outline-none select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "px-4 bg-primary text-white hover:bg-primary-action active:scale-[0.95]",
        gradient:
          "px-4 text-white bg-linear-to-r from-primary to-primary-accent hover:to-primary active:scale-[0.95]",
        text: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  },
);

function Button({ className, label, variant = "solid", ...props }: Props) {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {label}
    </button>
  );
}

export { Button, buttonVariants };
