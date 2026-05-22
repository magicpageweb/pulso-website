import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { GlobalCTA } from "./GlobalCTA";
import { useEffect } from "react";

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main key={pathname} className="flex-1 page-transition pt-20">
        <Outlet />
      </main>
      <GlobalCTA />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};
