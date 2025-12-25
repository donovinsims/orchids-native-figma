import { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useModal } from "./hooks/useModal.tsx";
import HeaderNavigation from "./components/sections/HeaderNavigation";
import HeroHeader from "./components/sections/HeroHeader";
import WebsiteGrid from "./components/sections/WebsiteGrid";
import AppDetailPage from "./components/app-detail/AppDetailPage";
import Footer from "./components/sections/Footer";
import { SubscribeModal } from "./components/modals/SubscribeModal";
import { SubmitAppModal } from "./components/modals/SubmitAppModal";
import { AuthModal } from "./components/modals/AuthModal";
import { Toaster } from "./components/ui/sonner";
import { Container } from "./components/ui/container";
import { websitesData, appDetailsData } from "./data/appsData";
import { AuthProvider } from "./hooks/use-auth";
import { AnimatePresence } from "motion/react";

import ProfileView from "./components/sections/ProfileView";

export default function App() {
  const subscribeModal = useModal();
  const submitModal = useModal();
    const authModal = useModal();
    const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
    const [currentView, setCurrentView] = useState<'home' | 'profile' | 'app-detail'>('home');
    const isMobile = useIsMobile();

    const handleAppClick = (appId: string) => {
      setSelectedAppId(appId);
      if (!isMobile) {
        setCurrentView('app-detail');
      }
    };

    const handleBackToList = () => {
      setSelectedAppId(null);
      if (currentView === 'app-detail') {
        setCurrentView('home');
      }
    };

    const selectedApp = selectedAppId ? appDetailsData[selectedAppId] : null;

  return (
    <AuthProvider>
      <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="relative min-h-screen bg-background-primary text-foreground transition-colors duration-200 flex flex-col">
        <HeaderNavigation 
          onSubscribeClick={subscribeModal.open}
          onSubmitClick={submitModal.open}
          onLoginClick={authModal.open}
          onProfileClick={() => setCurrentView('profile')}
          onHomeClick={() => {
            setCurrentView('home');
            setSelectedAppId(null);
          }}
        />
        
        <div className="flex-grow">
            {currentView === 'profile' ? (
              <div className="pt-[67px]">
                <Container className="py-md md:py-xl">
                  <ProfileView onAppClick={handleAppClick} />
                </Container>
              </div>
            ) : (
              <div className="pt-[67px]">
                <main>
                  <Container className="py-md md:py-xl">
                    <HeroHeader onSubscribeClick={subscribeModal.open} />
                    <WebsiteGrid items={websitesData} onItemClick={handleAppClick} onLoginClick={authModal.open} />
                  </Container>
                </main>
              </div>
            )}
          </div>

        <Footer 
          onSubscribeClick={subscribeModal.open}
          onSubmitClick={submitModal.open}
        />

        {/* App Detail Overlay */}
        <AnimatePresence>
          {selectedApp && (
            <AppDetailPage 
              key={selectedApp.id}
              app={selectedApp} 
              onBack={handleBackToList}
              onNavigateToApp={handleAppClick}
              onSubscribeClick={subscribeModal.open}
              onSubmitClick={submitModal.open}
              onLoginClick={authModal.open}
              onProfileClick={() => setCurrentView('profile')}
              onHomeClick={handleBackToList}
            />
          )}
        </AnimatePresence>

          {/* Modals */}
          <SubscribeModal isOpen={subscribeModal.isOpen} onClose={subscribeModal.close} />
          <SubmitAppModal isOpen={submitModal.isOpen} onClose={submitModal.close} />
          <AuthModal isOpen={authModal.isOpen} onClose={authModal.close} />
        
        <Toaster position="bottom-center" />
      </div>
      </NextThemesProvider>
    </AuthProvider>
  );
}
