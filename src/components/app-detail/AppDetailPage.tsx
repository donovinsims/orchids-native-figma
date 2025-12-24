"use client";

import React from "react";
import { Share2, ExternalLink, Bookmark, Check } from "lucide-react";
import { toast } from "sonner";
import HeaderNavigation from "../sections/HeaderNavigation";
import Footer from "../sections/Footer";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "motion/react";

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
}

export default function AppDetailPage({ app, onBack, onNavigateToApp, onSubscribeClick, onSubmitClick }: AppDetailPageProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { user } = useAuth();
  const bookmarked = isBookmarked(app.id);

  const handleBookmark = async () => {
    if (!user) {
      toast.error("Please sign in to bookmark apps");
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

  return (
    <div className="min-h-screen bg-background-primary text-foreground flex flex-col">
      {/* Header */}
      <HeaderNavigation 
        onSubscribeClick={onSubscribeClick}
        onSubmitClick={onSubmitClick}
      />

      {/* Main Content */}
      <main className="pt-[67px] flex-grow">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6">
          {/* Breadcrumbs & Share */}
          <div className="flex items-center justify-between mb-6">
            <nav className="flex items-center gap-2 text-sm text-text-secondary">
              <button onClick={onBack} className="hover:text-text-primary transition-colors">
                Home
              </button>
              <span>›</span>
              <button onClick={onBack} className="hover:text-text-primary transition-colors">
                {app.category}
              </button>
              <span>›</span>
              <span className="text-text-primary">{app.title}</span>
            </nav>
            <button
              onClick={handleShare}
              className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-background-secondary transition-colors"
              aria-label="Share"
            >
              <Share2 className="w-5 h-5 text-text-primary" />
            </button>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            {/* Left Column - Preview & Content */}
            <div className="space-y-8">
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

              {/* About Section */}
              <section>
                <h2 className="text-2xl text-text-primary mb-4">
                  About {app.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {app.about}
                </p>
                <p className="text-text-tertiary leading-relaxed">
                  This is a demo description for {app.title}. It represents the kind of content you would find on the detail page. Ideally this would come from a database or CMS.
                </p>
              </section>

              {/* Key Features */}
              {app.features && app.features.length > 0 && (
                <section>
                  <h2 className="text-2xl text-text-primary mb-6">
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {app.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-success" />
                        </div>
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Related Apps */}
              {app.relatedApps && app.relatedApps.length > 0 && (
                <section className="pb-12">
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

            {/* Right Column - Sticky Sidebar */}
            <div className="lg:sticky lg:top-[91px] lg:self-start">
              <div className="space-y-4">
                {/* Title & Description */}
                <div>
                  <h1 className="text-4xl text-text-primary mb-2 tracking-tight">
                    {app.title}
                  </h1>
                  <p className="text-text-secondary">
                    {app.description}
                  </p>
                </div>

                    {/* Visit Website Button */}
                      <a
                        href={app.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-md bg-background-primary text-text-primary border border-border hover:bg-background-secondary hover:border-border-strong transition-all duration-200"
                      >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                  {/* Bookmark Button */}
                  <button
                    onClick={handleBookmark}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-md bg-[#ff4500] text-white hover:opacity-90 transition-colors"
                  >
                    <span>{bookmarked ? "Bookmarked" : "Bookmark"}</span>
                    <motion.div
                      animate={bookmarked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
                    </motion.div>
                  </button>


                {/* App Information Card */}
                <div className="border border-border rounded-md p-6 bg-background-primary">
                  <h3 className="text-text-primary mb-4">
                    App Information
                  </h3>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer 
        onSubscribeClick={onSubscribeClick}
        onSubmitClick={onSubmitClick}
      />
    </div>
  );
}