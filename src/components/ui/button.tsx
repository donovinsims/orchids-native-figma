import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-xs whitespace-nowrap rounded-lg text-body-md font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 min-h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-accent/10 focus-visible:ring-offset-0 focus-visible:border-accent",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground border-none hover:bg-[#1a1a1a] dark:hover:bg-[#e5e5e5] hover:-translate-y-[1px]",
        secondary: "bg-[#fafafa] dark:bg-[#1a1a1a] text-[#000000] dark:text-[#ffffff] border border-[#e5e5e5] dark:border-[#262626] hover:bg-[#f5f5f5] dark:hover:bg-[#262626]",
        tertiary: "bg-transparent text-secondary hover:text-primary hover:bg-surface-raised",
          ghost: "bg-transparent border-none p-2 rounded-lg min-w-[40px] min-h-[40px] hover:bg-[#f5f5f5] dark:hover:bg-[#1a1a1a]",
        link: "text-accent underline-offset-4 hover:underline",
        destructive: "bg-error text-white hover:bg-error/90",
      },
      size: {
        default: "px-lg py-3",
        sm: "px-md py-sm text-body-sm min-h-[36px]",
        lg: "px-xl py-lg text-h4 min-h-[52px]",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
