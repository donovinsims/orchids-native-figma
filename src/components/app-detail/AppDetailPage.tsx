"use client";

import React, { useEffect } from "react";
import { Share2, ExternalLink, Bookmark, Check, X } from "lucide-react";
import { toast } from "sonner";
import Footer from "../sections/Footer";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useAuth } from "@/hooks/use-auth";
import { motion, useMotionValue, useTransform, PanInfo, AnimatePresence, useDragControls } from "motion/react";

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

interface AppDetailPageProps {
  app: AppDetail;
  onBack: () => void;
  onNavigateToApp?: (appId: string) => void;
  onSubscribeClick?: () => void;
  onSubmitClick?: () => void;
  onLoginClick?: () => void;
  onProfileClick?: () => void;
  onHomeClick?: () => void;
}

export default function AppDetailPage({ 
  app, 
  onBack, 
  onNavigateToApp, 
  onSubscribeClick, 
  onSubmitClick, 
  onLoginClick,
}: AppDetailPageProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
    const { user } = useAuth();
    const bookmarked = isBookmarked(app.id);
    const dragControls = useDragControls();
    
    const y = useMotionValue(0);
  const bgOpacity = useTransform(y, [0, 300], [0.4, 0]);

  const handleBookmark = async () => {
    if (!user) {
      onLoginClick?.();
      return;
    }
    const { error } = await toggleBookmark(app.id);
    if (error) {
      toast.error("Failed to update bookmark");
    } else {
      toast.success(bookmarked ? "Removed from bookmarks" : "Added to bookmarks");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
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
      // Fallback to copying link
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const shouldClose = info.velocity.y > 500 || (info.velocity.y >= 0 && info.offset.y > 150);
    if (shouldClose) {
      onBack();
    } else {
      y.set(0);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ opacity: bgOpacity }}
          onClick={onBack}
        />

        {/* Sheet Container */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto bg-background-primary rounded-t-[32px] shadow-[0_-12px_60px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300,
            mass: 0.8
          }}
            style={{ 
              y,
              height: '88vh',
            }}
            drag="y"
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.1 }}
            onDragEnd={handleDragEnd}
          >
          {/* Top Blur Effect (The "Blurred Border") */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-xl z-50 pointer-events-none opacity-60" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 blur-[3px] z-50 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5 blur-[0.5px] z-50 pointer-events-none" />

          {/* Sticky Header Bar - Modal Style */}
          <div className="sticky top-0 z-30 bg-background-primary/80 backdrop-blur-md">
            <div className="flex items-center justify-between px-6 h-16">
              <button
                onClick={onBack}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-background-secondary transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-text-primary" />
              </button>
              
                {/* Drag Handle */}
                <div 
                  onPointerDown={(e) => dragControls.start(e)}
                  className="flex-grow flex justify-center cursor-grab active:cursor-grabbing py-4"
                >
                  <div className="w-12 h-1.5 bg-white/10 rounded-full" />
                </div>

              <button
                onClick={handleShare}
                className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-background-secondary transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-5 h-5 text-text-primary" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-grow overflow-y-auto overflow-x-hidden">
            <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
              {/* Preview Image */}
              <div className="relative w-full aspect-[16/10] bg-background-secondary rounded-md overflow-hidden border border-border">
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
              </div>

              {/* Title & Description */}
              <div>
                <h1 className="text-4xl text-text-primary mb-2 tracking-tight">
                  {app.title}
                </h1>
                <p className="text-text-secondary text-lg">
                  {app.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-md bg-background-primary text-text-primary border border-border hover:bg-background-secondary hover:border-border-strong transition-all duration-200 text-lg font-medium"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-5 h-5" />
                </a>

                <button
                  onClick={handleBookmark}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-md bg-[#ff4500] text-white hover:opacity-90 transition-colors text-lg font-medium"
                >
                  <span>{bookmarked ? "Bookmarked" : "Bookmark"}</span>
                  <motion.div
                    animate={bookmarked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Bookmark className={`w-5 h-5 ${bookmarked ? "fill-current" : ""}`} />
                  </motion.div>
                </button>
              </div>

              {/* App Information Section */}
              <section className="border-t border-border pt-8">
                <h3 className="text-2xl text-text-primary mb-6">
                  App Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-base">Category</span>
                    <span className="text-text-primary text-base font-medium">{app.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-base">Platforms</span>
                    <span className="text-text-primary text-base text-right font-medium">{app.platforms.join(", ")}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-base">Pricing</span>
                    <span className="text-text-primary text-base font-medium">{app.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary text-base">Last Updated</span>
                    <span className="text-text-primary text-base font-medium">{app.lastUpdated}</span>
                  </div>
                </div>
              </section>

              {/* About Section */}
              <section className="border-t border-border pt-8">
                <h2 className="text-2xl text-text-primary mb-4">
                  About {app.title}
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-4">
                  {app.about}
                </p>
                <p className="text-text-tertiary text-base leading-relaxed">
                  This is a demo description for {app.title}. It represents the kind of content you would find on the detail page. Ideally this would come from a database or CMS.
                </p>
              </section>

              {/* Key Features */}
              {app.features && app.features.length > 0 && (
                <section className="border-t border-border pt-8">
                  <h2 className="text-2xl text-text-primary mb-6">
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {app.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-success" />
                        </div>
                        <span className="text-text-secondary text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Related Apps */}
              {app.relatedApps && app.relatedApps.length > 0 && (
                <section className="border-t border-border pt-8 pb-12">
                  <h2 className="text-2xl text-text-primary mb-6">
                    Related Apps
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {app.relatedApps.map((relatedApp) => (
                        <button
                          key={relatedApp.id}
                          onClick={() => onNavigateToApp?.(relatedApp.id)}
                          className="block bg-background-primary rounded-md border border-border hover:border-border-strong transition-all duration-200 hover:shadow-md text-left group"
                        >
                          <div className="relative w-full aspect-[16/10] bg-background-secondary overflow-hidden">
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
                      </button>
                    ))}
                  </div>
                </section>
              )}
            </div>
            <Footer 
              onSubscribeClick={onSubscribeClick}
              onSubmitClick={onSubmitClick}
            />
          </div>
        </motion.div>
      </div>
  );
}
