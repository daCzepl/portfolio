import { useState } from "react";
import { NavItem } from "./nav-item";
import { DektopNav } from "./desktop-nav";
import { HamburgerButton } from "./hamburger-button";
import { HamburgerNav } from "./hamburger-nav";

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

export const Nav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="mt-8 pb-24 mx-12 text-center">
        <div className="flex items-center justify-between text-white lg:block lg:w-full">
          {/*DektopNav*/}
          <DektopNav
            navlinks={navlinks}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            textCoulor="text-white"
            blurOutColour="text-white/50"
          />
          {/*Hambuger Menue Button*/}
          <HamburgerButton menuOpen={menuOpen} handleMenu={handleMenu} />
        </div>
      </div>
      {/* mobile-menue*/}
      {menuOpen ? (
        <HamburgerNav
          handleMenu={handleMenu}
          navlinks={navlinks}
          textCoulor="text-black"
          blurOutColour="text-black/50"
        />
      ) : null}
    </div>
  );
};
