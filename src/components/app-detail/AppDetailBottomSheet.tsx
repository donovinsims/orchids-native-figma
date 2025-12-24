"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "motion/react";
import { X, ExternalLink, Bookmark, Check, Share2 } from "lucide-react";
import { toast } from "sonner@2.0.3";
import Footer from "../sections/Footer";

interface AppDetail {
  id: string;
  title: string;
  description: string;
  category: string;
  platforms: string[];
  pricing: string;
  developer: string;
  lastUpdated: string;
  websiteUrl: string;
  faviconUrl: string;
  previewImage: string;
  about: string;
  features: string[];
  relatedApps?: RelatedApp[];
}

interface RelatedApp {
  id: string;
  title: string;
  description: string;
  previewImage: string;
  href: string;
}

interface AppDetailBottomSheetProps {
  app: AppDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToApp?: (appId: string) => void;
  onSubscribeClick?: () => void;
  onSubmitClick?: () => void;
}

export default function AppDetailBottomSheet({
  app,
  isOpen,
  onClose,
  onNavigateToApp,
  onSubscribeClick,
  onSubmitClick,
}: AppDetailBottomSheetProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 300], [0.4, 0]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? "Removed from bookmarks" : "Added to bookmarks");
  };

  const handleShare = async () => {
    if (navigator.share && app) {
      try {
        await navigator.share({
          title: app.title,
          text: app.description,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const shouldClose = info.velocity.y > 500 || (info.velocity.y >= 0 && info.offset.y > 150);
    
    if (shouldClose) {
      onClose();
    } else {
      y.set(0);
    }
  };

  if (!app) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black z-40 lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0.4 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ 
          type: "spring",
          damping: 40,
          stiffness: 400
        }}
        style={{ opacity }}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      {/* Bottom Sheet */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-background-primary rounded-t-md shadow-2xl z-50 lg:hidden border-t border-border"
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? 0 : "100%" }}
        exit={{ y: "100%" }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 400,
          mass: 0.5
        }}
        style={{ 
          y,
            height: '88vh',
          touchAction: 'none'
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.3 }}
        onDragEnd={handleDragEnd}
        dragSnapToOrigin={true}
      >
        {/* Scrollable Content */}
        <div className="overflow-y-auto h-full overscroll-contain relative rounded-t-md">
          {/* Header & Drag Handle (Sticky) */}
          <div className="sticky top-0 z-20 bg-background-primary/80 backdrop-blur-md transition-colors">
            {/* Drag Handle */}
            <div className="w-full flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-border rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 pb-3">
              <motion.button
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 rounded-md active:bg-background-secondary transition-colors"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <X className="w-6 h-6 text-text-primary" />
              </motion.button>
              <motion.button
                onClick={handleShare}
                className="flex items-center justify-center w-10 h-10 rounded-md active:bg-background-secondary transition-colors"
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Share2 className="w-5 h-5 text-text-primary" />
              </motion.button>
            </div>
          </div>

          <div className="px-4 py-4 space-y-6 text-text-primary">
            {/* Preview Image */}
            <motion.div 
              className="relative w-full aspect-[16/10] bg-background-secondary rounded-md overflow-hidden border border-border"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                delay: 0.1
              }}
            >
                <img
                  src={app.previewImage}
                  alt={app.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = app.faviconUrl;
                    e.currentTarget.className = "w-full h-full object-contain p-16";
                  }}
                />
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] pointer-events-none" />
            </motion.div>

            {/* Title & Description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                delay: 0.15
              }}
            >
              <h1 className="text-3xl text-text-primary mb-2 tracking-tight">
                {app.title}
              </h1>
              <p className="text-text-secondary">
                {app.description}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                delay: 0.2
              }}
            >
                    <motion.a
                      href={app.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-background-primary text-text-primary border border-border hover:bg-background-secondary transition-all duration-200"
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                  <motion.button
                    onClick={handleBookmark}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#ff4500] text-white transition-colors"
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
                    <motion.div
                      animate={isBookmarked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
                    </motion.div>
                  </motion.button>
            </motion.div>

            {/* App Information */}
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                delay: 0.25
              }}
            >
              <h2 className="text-xl text-text-primary mb-4">
                App Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-sm">Category</span>
                  <span className="text-text-primary text-sm">{app.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-sm">Platforms</span>
                  <span className="text-text-primary text-sm">{app.platforms.join(", ")}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-sm">Pricing</span>
                  <span className="text-text-primary text-sm">{app.pricing}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary text-sm">Last Updated</span>
                  <span className="text-text-primary text-sm">{app.lastUpdated}</span>
                </div>
              </div>
            </motion.section>

            {/* About */}
            <section>
              <h2 className="text-xl text-text-primary mb-3">
                About {app.title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                {app.about}
              </p>
              <p className="text-text-tertiary leading-relaxed">
                This is a demo description for {app.title}. It represents the kind of content you would find on the detail page.
              </p>
            </section>

            {/* Key Features */}
            {app.features && app.features.length > 0 && (
              <section>
                <h2 className="text-xl text-text-primary mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {app.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Related Apps */}
            {app.relatedApps && app.relatedApps.length > 0 && (
              <section className="pb-6">
                <h2 className="text-xl text-text-primary mb-4">
                  Related Apps
                </h2>
                  <div className="space-y-4">
                    {app.relatedApps.map((relatedApp) => (
                      <motion.button
                        key={relatedApp.id}
                        onClick={() => {
                          onClose();
                          setTimeout(() => {
                            onNavigateToApp?.(relatedApp.id);
                          }, 300);
                        }}
                          className="block w-full bg-background-primary rounded-md border border-border overflow-hidden transition-all text-left group"
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <div className="relative w-full aspect-video bg-background-secondary overflow-hidden">
                          <img
                            src={relatedApp.previewImage}
                            alt={relatedApp.title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] pointer-events-none" />
                        </div>
                      <div className="p-4">
                        <h3 className="text-text-primary mb-1">
                          {relatedApp.title}
                        </h3>
                        <p className="text-sm text-text-secondary line-clamp-2">
                          {relatedApp.description}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>
            )}

            {/* Footer */}
            <div className="pt-8 -mx-4">
              <Footer 
                onSubscribeClick={onSubscribeClick}
                onSubmitClick={onSubmitClick}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
