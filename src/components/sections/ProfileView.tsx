import React, { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { App } from "@/lib/apps";
import WebsiteGrid from "./WebsiteGrid";
import { Container } from "../ui/container";
import { User, Mail, Loader2, Bookmark } from "lucide-react";
import { toast } from "sonner";

interface ProfileViewProps {
  onAppClick: (appId: string) => void;
  apps: App[];
}

export default function ProfileView({ onAppClick, apps }: ProfileViewProps) {
  const { user, profile, updateProfile } = useAuth();
  const { bookmarks, loading: bookmarksLoading } = useBookmarks();
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(profile?.full_name || "");
  const [isUpdating, setIsUpdating] = useState(false);

  const bookmarkedApps = apps.filter((app) => bookmarks.includes(app.id));

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    const { error } = await updateProfile({ full_name: fullName });
    setIsUpdating(false);
    if (error) {
      toast.error("Failed to update profile");
    } else {
      toast.success("Profile updated");
      setIsEditing(false);
    }
  };

  if (!user) {
    return (
      <Container className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Please sign in to view your profile</h2>
      </Container>
    );
  }

  return (
    <div className="space-y-12">
      {/* Profile Header */}
      <section className="bg-surface border border-border rounded-md p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-surface-raised flex items-center justify-center overflow-hidden border border-border">
              {profile?.avatar_url ? (
                <img src={profile.avatar_url} alt={profile.full_name || ""} className="w-full h-full object-cover" />
              ) : (
                <User className="w-12 h-12 text-text-tertiary" />
              )}
            </div>
          </div>

          <div className="flex-1 space-y-4 w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-primary">Profile Settings</h1>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-sm font-medium text-secondary hover:text-primary transition-colors"
                >
                  Edit Profile
                </button>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleUpdateProfile} className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2 rounded-md bg-background border border-border focus:border-text-primary outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={isUpdating}
                    className="px-6 py-2 rounded-md bg-text-primary text-background-primary font-medium hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                  >
                    {isUpdating && <Loader2 className="w-4 h-4 animate-spin" />}
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setFullName(profile?.full_name || "");
                    }}
                    className="px-6 py-2 rounded-md border border-border text-secondary font-medium hover:bg-surface-raised transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-secondary">
                  <User className="w-5 h-5" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">Full Name</p>
                    <p className="text-primary font-medium">{profile?.full_name || "Not set"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <Mail className="w-5 h-5" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-text-tertiary">Email Address</p>
                    <p className="text-primary font-medium">{user.email}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bookmarks Section */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Bookmark className="w-6 h-6 text-[#ff4500] fill-[#ff4500]" />
          <h2 className="text-2xl font-bold text-primary">Your Bookmarks</h2>
          <span className="px-2 py-0.5 rounded-full bg-surface-raised text-secondary text-sm font-medium">
            {bookmarks.length}
          </span>
        </div>

        {bookmarksLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-text-tertiary" />
          </div>
        ) : bookmarkedApps.length > 0 ? (
          <WebsiteGrid items={bookmarkedApps} onItemClick={onAppClick} />
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-border rounded-md">
            <Bookmark className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
            <p className="text-secondary text-lg">You haven't bookmarked any apps yet.</p>
            <p className="text-text-tertiary">Explore the directory and save your favorites here.</p>
          </div>
        )}
      </section>
    </div>
  );
}
