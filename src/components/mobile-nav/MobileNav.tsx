"use client";

import React, { useState } from "react";
import { X, Menu, Paintbrush, Code, ListChecks, Shield, Zap, MessageSquare, Wrench, Sparkles, ArrowUpRight, Mail } from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

interface MobileNavTriggerProps {
  onClick: () => void;
}

export function MobileNavTrigger({ onClick }: MobileNavTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-background-secondary transition-colors"
      aria-label="Open menu"
    >
      <Menu className="w-6 h-6 text-text-primary" />
    </button>
  );
}

interface Category {
  icon: React.ElementType;
  label: string;
  href: string;
}

const categories: Category[] = [
  { icon: Sparkles, label: "All", href: "/" },
  { icon: Paintbrush, label: "Design", href: "/category/design" },
  { icon: Code, label: "Development", href: "/category/development" },
  { icon: ListChecks, label: "Productivity", href: "/category/productivity" },
  { icon: Shield, label: "Security", href: "/category/security" },
  { icon: Zap, label: "Automation", href: "/category/automation" },
  { icon: MessageSquare, label: "Communication", href: "/category/communication" },
  { icon: Wrench, label: "Utilities", href: "/category/utilities" },
];

interface MobileNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribeClick?: () => void;
  onSubmitClick?: () => void;
  onLoginClick?: () => void;
}

export function MobileNavOverlay({
  isOpen,
  onClose,
  onSubscribeClick,
  onSubmitClick,
  onLoginClick,
}: MobileNavOverlayProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const MagicIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      viewBox="0 0 10.67 10.67"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Magic Icon</title>
      <path d="M5.33333 0L6.41334 4.28L10.6667 5.33333L6.41334 6.38667L5.33333 10.6667L4.25333 6.38667L0 5.33333L4.25333 4.28L5.33333 0Z" />
    </svg>
  );

  if (!isOpen) return null;

  const handleSubscribe = () => {
    onClose();
    onSubscribeClick?.();
  };

  const handleSubmit = () => {
    onClose();
    onSubmitClick?.();
  };

  const handleLogin = () => {
    onClose();
    onLoginClick?.();
  };

  const handleCategoryClick = (label: string) => {
    setActiveCategory(label);
    // In a real app, this would navigate to the category
    setTimeout(() => onClose(), 200);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute top-0 right-0 w-full max-w-lg h-full bg-background-primary shadow-2xl overflow-y-auto border-l border-border">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-primary/80 backdrop-blur-md transition-colors">
          <div className="flex items-center gap-[6px] text-text-primary">
            <span className="text-lg font-medium">SEE</span>
            <span className="text-lg">+</span>
            <span className="text-lg font-medium">SAW</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-background-secondary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-text-primary" />
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <div className="px-4 py-4 pt-6">
          <button 
            onClick={handleLogin}
            className="w-full py-3 rounded-md border border-border bg-background-primary text-text-primary hover:bg-background-secondary transition-colors text-sm font-medium"
          >
            Sign in
          </button>
        </div>

        {/* Subscribe Button */}
        <div className="px-4 pb-4">
          <button
            onClick={handleSubscribe}
            className="w-full py-3 rounded-md bg-foreground text-background-primary hover:opacity-90 transition-colors text-sm font-medium"
          >
            Subscribe
          </button>
        </div>

        {/* Categories */}
        <div className="px-4 pb-4">
          <nav className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.label}
                onClick={() => handleCategoryClick(category.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
                  activeCategory === category.label
                    ? "bg-text-primary text-background-primary"
                    : "text-text-secondary hover:bg-background-secondary"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="text-sm">{category.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Footer Section */}
        <div className="px-4 pb-6 space-y-3 border-t border-border pt-6">
          {/* Sponsor Us */}
          <a
            href="https://tally.so/r/wLP5VG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-md bg-background-secondary hover:bg-border transition-colors border border-border"
          >
            <span className="text-sm text-text-secondary">Sponsor us</span>
            <ArrowUpRight className="w-4 h-4 text-text-tertiary" />
          </a>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-md border border-border bg-background-primary text-text-primary hover:bg-background-secondary transition-colors text-sm font-medium"
          >
            Submit
          </button>

          {/* Email */}
          <div className="flex items-center justify-between px-4 py-3 rounded-md bg-background-secondary border border-border">
            <span className="text-sm text-text-tertiary">hi@seesaw.website</span>
            <Mail className="w-4 h-4 text-text-tertiary" />
          </div>

          {/* Copyright */}
          <p className="text-center text-xs text-text-tertiary pt-2">
            © 2025 SEESAW Studios
          </p>
        </div>
      </div>
    </div>
  );
}
