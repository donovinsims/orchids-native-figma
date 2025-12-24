import { useState, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useModal } from "./hooks/useModal.tsx";
import HeaderNavigation from "./components/sections/HeaderNavigation";
import HeroHeader from "./components/sections/HeroHeader";
import WebsiteGrid from "./components/sections/WebsiteGrid";
import AppDetailPage from "./components/app-detail/AppDetailPage";
import AppDetailBottomSheet from "./components/app-detail/AppDetailBottomSheet";
import Footer from "./components/sections/Footer";
import { SubscribeModal } from "./components/modals/SubscribeModal";
import { SubmitAppModal } from "./components/modals/SubmitAppModal";
import { AuthModal } from "./components/modals/AuthModal";
import { Toaster } from "./components/ui/sonner";
import { Container } from "./components/ui/container";
import { websitesData, appDetailsData } from "./data/appsData";
import { AuthProvider } from "./hooks/use-auth";

export default function App() {
  const subscribeModal = useModal();
  const submitModal = useModal();
  const authModal = useModal();
  const [selectedAppId, setSelectedAppId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleAppClick = (appId: string) => {
    setSelectedAppId(appId);
    if (!isMobile) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToList = () => {
    setSelectedAppId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseBottomSheet = () => {
    setSelectedAppId(null);
  };

  const selectedApp = selectedAppId ? appDetailsData[selectedAppId] : null;

  return (
    <AuthProvider>
      <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="relative min-h-screen bg-background-primary text-foreground transition-colors duration-200 flex flex-col">
        {!selectedApp || isMobile ? (
          <>
            <HeaderNavigation 
              onSubscribeClick={subscribeModal.open}
              onSubmitClick={submitModal.open}
              onLoginClick={authModal.open}
            />
            
            <div className="pt-[67px] flex-grow">
              <main>
                <Container className="py-md md:py-xl">
                  <HeroHeader onSubscribeClick={subscribeModal.open} />
                  <WebsiteGrid items={websitesData} onItemClick={handleAppClick} />
                </Container>
              </main>
            </div>
            <Footer 
              onSubscribeClick={subscribeModal.open}
              onSubmitClick={submitModal.open}
            />
          </>
        ) : (
          <AppDetailPage 
            app={selectedApp} 
            onBack={handleBackToList}
            onNavigateToApp={handleAppClick}
            onSubscribeClick={subscribeModal.open}
            onSubmitClick={submitModal.open}
          />
        )}

        {/* Modals */}
        <SubscribeModal isOpen={subscribeModal.isOpen} onClose={subscribeModal.close} />
        <SubmitAppModal isOpen={submitModal.isOpen} onClose={submitModal.close} />
        <AuthModal isOpen={authModal.isOpen} onClose={authModal.close} />
        
        {/* Bottom Sheet for Mobile */}
        <AppDetailBottomSheet
          app={selectedApp}
          isOpen={!!selectedApp && isMobile}
          onClose={handleCloseBottomSheet}
          onNavigateToApp={handleAppClick}
          onSubscribeClick={subscribeModal.open}
          onSubmitClick={submitModal.open}
        />
        
        <Toaster position="bottom-center" />
      </div>
    </NextThemesProvider>
  );
}
