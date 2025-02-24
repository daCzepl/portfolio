import React from "react";
import { NavItem } from "./nav-item";
import { Socials } from "../socials";
import { useCursorContext } from "../providers/CursorContext";

interface DesktopNavProps {
  navlinks: {
    name: string;
    path: string;
  }[];
  hoveredIndex: number;
  setHoveredIndex: (index: number) => void;
  textCoulor: string;
  blurOutColour: string;
}

export const DektopNav: React.FC<DesktopNavProps> = ({ navlinks, hoveredIndex, setHoveredIndex, textCoulor, blurOutColour }) => {
  const { enterHover, exitHover } = useCursorContext();

  return (
    <div className="flex items-center justify-between text-white">
      <div className="hidden items-center lg:flex">
        <div className="text-xl">Stefan Czepl </div>
      </div>
      <div className="hidden lg:block">
        <nav className="flex-grow">
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
                  textColour={textCoulor}
                  blurOutColour={blurOutColour}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="hidden lg:block">
        <Socials />
      </div>
    </div>
  );
};
