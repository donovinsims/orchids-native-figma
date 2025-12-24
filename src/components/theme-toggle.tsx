"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-md border border-[#e5e5e5] dark:border-[#262626] bg-transparent" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-md border border-[#e5e5e5] dark:border-[#262626] bg-transparent hover:bg-[#fafafa] dark:hover:bg-[#1a1a1a] transition-all duration-200"
      aria-label="Toggle theme"
    >
      <Sun className="size-4 md:size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-text-primary" />
      <Moon className="absolute size-4 md:size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-text-primary" />
    </button>
  );
}
