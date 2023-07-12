import { useState } from "react";
import { NavItem } from "./nav-item";
import { Socials } from "./socials";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

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
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center">
            <div className="text-xl">Stefan Czepl </div>
          </div>
          {/*NavLinks*/}
          <div className="hidden lg:block">
            <nav className="flex-grow">
              <ul className="flex justify-center text-xl">
                {navlinks.map((link, index) => (
                  <li
                    key={index}
                    className={"pr-12"}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                  >
                    <NavItem
                      index={index + 1}
                      grayOut={hoveredIndex !== index && hoveredIndex !== -1}
                      {...link}
                      textColour="text-white"
                      blurOutColour="text-white/50"
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/*Hambuger Menue Button*/}
          <div className="-mr-2 flex lg:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              {menuOpen ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
          <div className="hidden lg:block">
            <Socials />
          </div>
        </div>
      </div>
      {/* mobile-menue*/}
      {menuOpen ? (
        <div className="fixed top-0 left-0 z-50 w-4/5 lg:hidden h-screen bg-white">
          <div className="pt-12 pb-3 space-y-1 sm:px-3">
            {navlinks.map((link, index) => (
              <a
                key={index}
                className={"flex p-2 rounded-md text-base font-medium"}
              >
                <NavItem
                  {...link}
                  textColour="text-black"
                  blurOutColour="text-black/50"
                  onClick={handleMenu}
                />
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
