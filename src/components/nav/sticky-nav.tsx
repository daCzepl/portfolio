import { useState } from "react";
import { NavItem } from "./nav-item";
import { motion } from "framer-motion";
import { useCursorContext } from "../providers/CursorContext";

const navlinks = [
  {
    name: "//\u00A0\u00A0home",
    path: "home",
  },
  {
    name: "//\u00A0\u00A0about",
    path: "about",
  },
  {
    name: "//\u00A0\u00A0skills",
    path: "skills",
  },
  {
    name: "//\u00A0\u00A0projects",
    path: "projects",
  },
  {
    name: "//\u00A0\u00A0contact",
    path: "contact",
  },
];

export const StickyNav: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const { enterHover, exitHover } = useCursorContext();

  return (
    <motion.div
      className="fixed w-full bg-neutral-800 pt-1 pb-5 backdrop-blur-sm bg-opacity-80 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ type: "spring", stiffness: 20, damping: 8 }}
    >
      <nav className="flex justify-center text-xl">
        <ul className="flex justify-center text-xl">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className={"pr-12"}
              onMouseEnter={() => {
                setHoveredIndex(index);
                enterHover();
              }}
              onMouseLeave={() => {
                setHoveredIndex(-1);
                exitHover();
              }}
            >
              <NavItem
                index={index + 1}
                grayOut={hoveredIndex !== index && hoveredIndex !== -1}
                {...link}
                textColour="text-light-blue"
                blurOutColour="text-light-blue/50"
              />
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
