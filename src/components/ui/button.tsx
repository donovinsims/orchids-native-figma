import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-xs whitespace-nowrap rounded-sm text-body-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 min-h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-accent/10 focus-visible:ring-offset-0 focus-visible:border-accent",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-foreground hover:bg-[#e63e00] active:bg-[#cc3700]",
        secondary: "bg-background-primary text-text-primary border border-border hover:bg-background-tertiary active:bg-background-secondary",
        tertiary: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-background-tertiary",
        ghost: "hover:bg-background-tertiary hover:text-text-primary",
        link: "text-accent underline-offset-4 hover:underline",
        destructive: "bg-error text-white hover:bg-error/90",
      },
      size: {
        default: "px-lg py-md",
        sm: "px-md py-sm text-body-sm min-h-[36px]",
        lg: "px-xl py-lg text-h4 min-h-[52px]",
        icon: "size-11 p-0",
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
