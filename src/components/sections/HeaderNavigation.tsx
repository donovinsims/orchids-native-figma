import React from "react";
import { useMobileNav } from "../../hooks/useMobileNav.tsx";
import { MobileNavOverlay, MobileNavTrigger } from "../mobile-nav/MobileNav";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";

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

interface HeaderNavigationProps {
  onSubscribeClick?: () => void;
  onSubmitClick?: () => void;
  onLoginClick?: () => void;
}

const HeaderNavigation = ({ onSubscribeClick, onSubmitClick, onLoginClick }: HeaderNavigationProps) => {
  const mobileNav = useMobileNav();

  return (
    <>
      <nav className="fixed top-0 z-20 h-full w-full max-h-[67px]">
        <div className="absolute top-0 left-0 flex h-[67px] w-full items-center justify-between border-b border-border bg-background/[.90] px-md md:px-lg backdrop-blur-lg">
          <a
            className="flex w-max cursor-pointer items-center gap-xs rounded-full border border-border bg-background-primary px-sm py-xs text-h1 leading-none transition-all duration-200 ease-in-out hover:-rotate-3 hover:border-border-strong hover:bg-background-secondary"
            href="/"
          >
            <span>see</span>
            <MagicIcon className="w-[10.67px]" />
            <span>saw</span>
          </a>
          
          <div className="flex items-center gap-sm">
            <ThemeToggle />
            
            <Button
              variant="secondary"
              onClick={onLoginClick}
              className="hidden md:flex min-w-[100px]"
            >
              Sign In
            </Button>
            
            <Button
              variant="primary"
              onClick={onSubscribeClick}
              className="hidden md:flex min-w-[97px]"
            >
              Subscribe
            </Button>
            
            <MobileNavTrigger onClick={mobileNav.open} />
          </div>
        </div>
      </nav>

      <MobileNavOverlay
        isOpen={mobileNav.isOpen}
        onClose={mobileNav.close}
        onSubscribeClick={onSubscribeClick}
        onSubmitClick={onSubmitClick}
        onLoginClick={onLoginClick}
      />
    </>
  );
};

export default HeaderNavigation;
