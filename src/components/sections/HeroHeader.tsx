"use client";

import React from 'react';
import { Button } from '../ui/button';

interface HeroHeaderProps {
  onSubscribeClick?: () => void;
}

const HeroHeader = ({ onSubscribeClick }: HeroHeaderProps) => {
  return (
    <section className="py-3 md:py-8">
      <h1 className="md:text-4xl md:leading-10 text-text-primary tracking-[-2px] leading-none text-[39px] font-semibold">
        The best web design inspiration
      </h1>
      <h3 className="mt-2 text-base md:text-xl leading-6 md:leading-8 text-text-secondary">
        Browse the best of the internet. Hand-picked and updated daily.
      </h3>
        <div className="mt-6 flex items-center gap-3">
          <Button
            onClick={onSubscribeClick}
            className="rounded-md bg-[#ff4500] text-white border-none hover:bg-[#ff4500]/90 transition-colors h-11 px-6"
          >
            Subscribe for free
          </Button>
          <span className="text-body-md text-text-tertiary">97 joined today</span>
        </div>
    </section>
  );
};

export default HeroHeader;
