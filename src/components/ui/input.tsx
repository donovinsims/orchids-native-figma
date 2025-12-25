import * as React from "react";

import { cn } from "./utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  _placeholder?: string; // Add a dummy member to avoid empty interface warning
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
        <input
          type={type}
            className={cn(
              "flex min-h-[44px] w-full rounded-lg border border-border bg-background-tertiary px-md py-sm text-body-md transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-accent/10 focus-visible:border-accent",
              className
            )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
