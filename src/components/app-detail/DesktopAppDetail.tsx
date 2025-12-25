"use client";

import React from "react";
import { Share2, ExternalLink, Bookmark, Check, ArrowLeft, Globe, Monitor, CreditCard, User, Clock } from "lucide-react";
import { toast } from "sonner";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "motion/react";
import { WebsiteCard } from "../sections/WebsiteGrid";
import { websitesData } from "@/data/appsData";
import { Container } from "../ui/container";

interface AppDetail {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
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
  shortDescription?: string;
  previewImage: string;
  href: string;
}

interface DesktopAppDetailProps {
  app: AppDetail;
  onBack: () => void;
  onNavigateToApp?: (appId: string) => void;
  onLoginClick?: () => void;
}

export default function DesktopAppDetail({ 
  app, 
  onBack, 
  onNavigateToApp, 
  onLoginClick 
}: DesktopAppDetailProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { user } = useAuth();
  const bookmarked = isBookmarked(app.id);

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
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="min-h-screen bg-background-primary pt-8 pb-24"
    >
      <Container>
        {/* Back Navigation */}
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to directory</span>
        </button>

        <div className="grid grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="col-span-8 space-y-12">
            {/* Hero Preview */}
            <div className="relative aspect-[16/10] bg-background-secondary rounded-2xl overflow-hidden border border-border shadow-sm">
              <img
                src={app.previewImage}
                alt={app.title}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = app.faviconUrl;
                  e.currentTarget.className = "w-full h-full object-contain p-24";
                }}
              />
            </div>

            {/* About Section */}
            <section>
              <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">
                About {app.title}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-text-secondary leading-relaxed text-xl mb-6">
                  {app.about}
                </p>
                <p className="text-text-tertiary leading-relaxed text-lg">
                  This is a premium directory entry for {app.title}. It features detailed insights, 
                  key functionalities, and integration possibilities to help you streamline your workflow.
                </p>
              </div>
            </section>

            {/* Features Section */}
            {app.features && app.features.length > 0 && (
              <section className="bg-background-secondary/30 rounded-3xl p-10 border border-border/50">
                <h2 className="text-2xl font-bold text-text-primary mb-8 tracking-tight">
                  Key Features
                </h2>
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  {app.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center mt-1">
                        <Check className="w-3.5 h-3.5 text-success" />
                      </div>
                      <span className="text-text-secondary text-lg leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="col-span-4">
            <div className="sticky top-[100px] space-y-8">
              {/* App Identity Card */}
              <div className="bg-background-primary border border-border rounded-2xl p-8 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-text-primary tracking-tight">
                      {app.title}
                    </h1>
                    <p className="text-text-secondary text-lg font-medium">
                      {app.category}
                    </p>
                  </div>
                  <button
                    onClick={handleShare}
                    className="p-2.5 rounded-full hover:bg-background-secondary border border-border transition-colors"
                    title="Share app"
                  >
                    <Share2 className="w-5 h-5 text-text-secondary" />
                  </button>
                </div>

                <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                  {app.shortDescription || app.description}
                </p>

                <div className="space-y-4">
                  <a
                    href={app.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-text-primary text-background-primary hover:opacity-90 transition-opacity text-lg font-semibold shadow-md"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>

                  <button
                    onClick={handleBookmark}
                    className={`flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl border-2 transition-all text-lg font-semibold ${
                      bookmarked 
                        ? "border-[#ff4500] bg-[#ff4500]/5 text-[#ff4500]" 
                        : "border-border hover:bg-background-secondary text-text-primary"
                    }`}
                  >
                    <Bookmark className={`w-5 h-5 ${bookmarked ? "fill-current" : ""}`} />
                    <span>{bookmarked ? "Bookmarked" : "Bookmark App"}</span>
                  </button>
                </div>
              </div>

              {/* App Metadata Card */}
              <div className="bg-background-secondary/20 border border-border rounded-2xl p-8">
                <h3 className="text-sm font-bold text-text-tertiary uppercase tracking-widest mb-6">
                  App Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Globe className="w-5 h-5 text-text-tertiary mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs text-text-tertiary font-medium">Website</p>
                      <a href={app.websiteUrl} target="_blank" className="text-sm font-semibold text-text-primary hover:underline truncate block max-w-[200px]">
                        {new URL(app.websiteUrl).hostname}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Monitor className="w-5 h-5 text-text-tertiary mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs text-text-tertiary font-medium">Platforms</p>
                      <p className="text-sm font-semibold text-text-primary">{app.platforms.join(", ")}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CreditCard className="w-5 h-5 text-text-tertiary mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs text-text-tertiary font-medium">Pricing</p>
                      <p className="text-sm font-semibold text-text-primary">{app.pricing}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <User className="w-5 h-5 text-text-tertiary mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs text-text-tertiary font-medium">Developer</p>
                      <p className="text-sm font-semibold text-text-primary">{app.developer}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-text-tertiary mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-xs text-text-tertiary font-medium">Last Updated</p>
                      <p className="text-sm font-semibold text-text-primary">{app.lastUpdated}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Apps Section */}
        {app.relatedApps && app.relatedApps.length > 0 && (
          <section className="mt-24 pt-16 border-t border-border">
            <h2 className="text-3xl font-bold text-text-primary mb-10 tracking-tight">
              You might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {app.relatedApps.map((relatedApp) => {
                const websiteItem = websitesData.find(w => w.id === relatedApp.id);
                if (!websiteItem) return null;
                
                return (
                  <WebsiteCard 
                    key={relatedApp.id} 
                    item={websiteItem} 
                    onClick={onNavigateToApp}
                    onLoginClick={onLoginClick}
                  />
                );
              })}
            </div>
          </section>
        )}
      </Container>
    </motion.div>
  );
}
