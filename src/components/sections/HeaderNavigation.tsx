import React, { useState } from "react";
import { useMobileNav } from "../../hooks/useMobileNav.tsx";
import { MobileNavOverlay, MobileNavTrigger } from "../mobile-nav/MobileNav";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { useAuth } from "../../hooks/use-auth";

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

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const navLinks = [
  { label: "Software", href: "#software" },
  { label: "Guides", href: "#guides" },
  { label: "Catalog", href: "#catalog" },
  { label: "Learn", href: "#learn" },
  { label: "Creators", href: "#creators" },
];

interface HeaderNavigationProps {
  onSubscribeClick?: () => void;
  onSubmitClick?: () => void;
  onLoginClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
}

const HeaderNavigation = ({ onSubscribeClick, onSubmitClick, onLoginClick, onProfileClick, onHomeClick }: HeaderNavigationProps) => {
  const mobileNav = useMobileNav();
  const { user, signOut, profile } = useAuth();
  const [activeLink, setActiveLink] = useState("Software");

  return (
    <>
      <nav className="fixed top-0 z-20 h-[72px] w-full bg-background border-b border-border transition-colors">
        <div className="mx-auto max-w-[1440px] h-full flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <button
            className="flex w-max cursor-pointer items-center gap-xs rounded-pill border border-border bg-background px-md py-sm text-h1 leading-none transition-all duration-200 ease-in-out hover:-rotate-3 hover:border hover:bg-surface"
            onClick={onHomeClick}
          >
            <span>see</span>
            <MagicIcon className="w-[10.67px]" />
            <span>saw</span>
          </button>

            {/* Nav Links - Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => setActiveLink(link.label)}
                  className={`px-4 py-2 text-body font-medium rounded-pill transition-all duration-200 ${
                    activeLink === link.label
                      ? "bg-primary text-background"
                      : "text-secondary hover:text-primary hover:bg-surface"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
              {/* Search Bar - Desktop */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-[200px] lg:w-[240px] h-10 pl-10 pr-4 rounded-md border border-border bg-surface text-body text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-border" />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-2">
              {user ? (
                <>
                  <button
                    onClick={onProfileClick}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-surface transition-colors"
                  >
                    <div className="w-7 h-7 rounded-full bg-surface-raised flex items-center justify-center overflow-hidden border border-border">
                      {profile?.avatar_url ? (
                        <img src={profile.avatar_url} alt={profile.full_name || ""} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xs font-bold">{user.email?.[0].toUpperCase()}</span>
                      )}
                    </div>
                  </button>
                  <Button
                    variant="secondary"
                    onClick={() => signOut()}
                    className="h-10"
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={onLoginClick}
                    className="h-10 text-sm font-medium"
                  >
                    Sign in
                  </Button>
                  <Button
                    variant="primary"
                    onClick={onSubscribeClick}
                    className="h-10 text-sm font-medium"
                  >
                    Create Account
                  </Button>
                </>
              )}
            </div>

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
