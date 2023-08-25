import "./index.css";
import { Nav } from "../components/nav/nav";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { useEffect, useState } from "react";
import { StickyNav } from "../components/nav/sticky-nav";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
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
    <div className="bg-neutral-800">
      <div className="hidden lg:block">{isScrolled && <StickyNav />}</div>
      <div className={`grid grid-rows-6 h-screen ${isScrolled ? "pt-12" : ""}`}>
        <div className="row-span-1">
          <Nav />
        </div>
        <div className="row-span-5">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
