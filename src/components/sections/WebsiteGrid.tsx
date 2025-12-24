"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Bookmark, ExternalLink } from "lucide-react";

interface Website {
  id: string;
  title: string;
  description: string;
  href: string;
  faviconUrl: string;
  category?: string;
}

interface WebsiteGridProps {
  items: Website[];
  onItemClick?: (id: string) => void;
}

export default function WebsiteGrid({ items, onItemClick }: WebsiteGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-6">
      {items.map((item) => (
        <WebsiteCard key={item.id} item={item} onClick={onItemClick} />
      ))}
    </div>
  );
}

function WebsiteCard({ item, onClick }: { item: Website; onClick?: (id: string) => void }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick?.(item.id);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  const handleExternalLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(item.href, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col gap-3 group">
      {/* Card Preview */}
      <motion.button
        onClick={handleClick}
        className="relative w-full block overflow-hidden transition-all duration-200 bg-[#fafafa] dark:bg-[#0a0a0a] border border-[#e5e5e5] dark:border-[#262626] rounded-md hover:border-[#d1d1d1] dark:hover:border-[#3a3a3a] hover:shadow-sm dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="relative w-full aspect-[333/225]">
          {/* Favicon Placeholder / Content */}
          <div className="absolute inset-0 flex items-center justify-center bg-background-secondary/50">
            <img 
              src={item.faviconUrl} 
              alt="" 
              className="w-8 h-8 rounded-md shadow-sm"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        </div>
      </motion.button>

      {/* Actions - Name, Category, Bookmark, and External Link */}
      <div className="flex items-center justify-between px-1">
        {/* Name & Category */}
        <button 
          onClick={handleClick}
          className="flex items-center gap-1.5 text-left flex-1 min-w-0"
        >
          <span className="text-body-md font-semibold text-text-primary truncate">
            {item.title}
          </span>
          {item.category && (
            <>
              <span className="text-text-tertiary font-medium">·</span>
              <span className="text-text-secondary text-body-md font-medium truncate">
                {item.category}
              </span>
            </>
          )}
        </button>

            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={handleBookmark}
                className="p-0.5 transition-colors text-text-secondary hover:text-text-primary bg-transparent focus:ring-0"
                aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              >
                <motion.div
                  animate={isBookmarked ? { scale: [1, 1.35, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3, times: [0, 0.5, 1], ease: "easeInOut" }}
                >
                  <Bookmark 
                    className={`w-4 h-4 ${isBookmarked ? "fill-[#ff4500] text-[#ff4500]" : ""}`}
                  />
                </motion.div>
              </button>

            <motion.button
              onClick={handleExternalLink}
              className="p-1.5 rounded-md hover:bg-background-tertiary transition-colors text-text-secondary hover:text-text-primary"
              whileTap={{ scale: 0.9 }}
              aria-label="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
      </div>
    </div>
  );
}