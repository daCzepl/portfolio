import "./index.css";
import { Nav } from "../components/nav/nav";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Cursor } from "../components/cursor";
import { useEffect, useState } from "react";
import { StickyNav } from "../components/nav/sticky-nav";
import { AnimatePresence } from "framer-motion";
import bgImage from "../assets/home_background.jpg";
import { CursorProvider } from "../components/providers/CursorContext";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <CursorProvider>
      <div className="bg-neutral-800 ">
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
          <div className="row-span-1">
            <Nav />
          </div>
          <div className="row-span-5 max-md:space-y-24">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </CursorProvider>
  );
}

export default App;
