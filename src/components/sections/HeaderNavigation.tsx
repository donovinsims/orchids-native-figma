"use client";

import React from "react";
import { useMobileNav } from "../../hooks/useMobileNav";
import { MobileNavOverlay, MobileNavTrigger } from "../mobile-nav/MobileNav";

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
        <div className="absolute top-0 left-0 flex h-[67px] w-full items-center justify-between border-b border-gray-100 bg-white/[.90] px-4 md:px-6 backdrop-blur-lg">
          <a
            className="flex w-max cursor-pointer gap-[6px] rounded-full border border-gray-200 bg-white px-[10px] py-2 text-2xl leading-6 transition-all duration-200 ease-in-out hover:-rotate-3 hover:border-gray-300 hover:bg-gray-50"
            href="/"
          >
            <span>see</span>
            <MagicIcon className="w-[10.67px]" />
            <span>saw</span>
          </a>
          
          <div className="flex items-center gap-2">
            <button
              onClick={onLoginClick}
              className="hidden md:block select-none rounded-lg border border-gray-200 bg-white px-4 py-2 text-black transition-all duration-200 hover:bg-gray-50 active:scale-99 w-[100px]"
              style={{
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '20px'
              }}
            >
              Sign In
            </button>
            <button
              onClick={onSubscribeClick}
              className="hidden md:block select-none rounded-lg border border-black bg-gray-900 px-3 py-[6px] text-white transition-all duration-200 hover:scale-101 hover:bg-gray-800 active:scale-99 w-[97px] text-sm"
            >
              Subscribe
            </button>
            
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