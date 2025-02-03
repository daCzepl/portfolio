import "./index.css";
import { Nav } from "../components/nav/nav";
import { About } from "../pages/About";
import { Skills } from "../pages/Skills";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { useEffect, useState } from "react";
import { StickyNav } from "../components/nav/sticky-nav";
import { AnimatePresence, motion } from "framer-motion";
import bgImage from "../assets/home_background.jpg";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [innerCursorVariants, setInnerCursorVariants] = useState("innerCursorDefault");
  const [outerCursorVariants] = useState("outerCursorDefault");

  const variants = {
    innerCursorDefault: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      transition: { type: "tween", duration: 0.0005 },
    },
    outerCursorDefault: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "tween", duration: 0.05 },
    },
    hover: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      transition: { type: "tween", duration: 0.0005 },
    },
  };

  const enterHover = () => {
    setInnerCursorVariants("hover");
  };

  const exitHover = () => {
    setInnerCursorVariants("innerCursorDefault");
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

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
    <div className="bg-neutral-800 cursor-none">
      <motion.div
        className="fixed top-0 left-0 bg-light-blue w-2 h-2 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={innerCursorVariants}
      />
      <motion.div
        className="fixed top-0 left-0 outline outline-1 outline-light-blue w-8 h-8 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={outerCursorVariants}
      />
      <div className="hidden lg:block">
        <AnimatePresence>{isScrolled && <StickyNav enterHover={enterHover} exitHover={exitHover} />}</AnimatePresence>
      </div>
      <div
        className="grid grid-rows-6 h-screen bg-bottom bg-no-repeat bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 70%, rgb(38,38,38)) ,url(${bgImage})`,
        }}
      >
        <div className="row-span-1">
          <Nav enterHover={enterHover} exitHover={exitHover} />
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
