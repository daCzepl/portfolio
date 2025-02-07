import { useEffect, useState } from "react";
import bgImagePath from "../../assets/home_background.jpg";
import { CursorProvider } from "../providers/CursorContext";
import { Cursor } from "../cursor";
import { AnimatePresence } from "framer-motion";
import { StickyNav } from "../nav/sticky-nav";
import { Nav } from "../nav/nav";
import { Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bgImage, setBgImage] = useState("");
  const location = useLocation();

  const checkScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    if (location.pathname === "/") {
      setBgImage(bgImagePath);
    } else {
      setBgImage("");
    }

    return () => window.removeEventListener("scroll", checkScroll);
  }, [location]);
  return (
    <CursorProvider>
      <div className="bg-neutral-800 font-sans">
        <Cursor />
        <div className="hidden lg:block">
          <AnimatePresence>{isScrolled && <StickyNav />}</AnimatePresence>
        </div>
        <div
          className="grid grid-rows-6 h-screen bg-bottom bg-no-repeat bg-cover"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent 70%, rgb(38,38,38)) ,url(${bgImage})`,
          }}
        >
          <Nav />
          <Outlet />
        </div>
      </div>
    </CursorProvider>
  );
};
