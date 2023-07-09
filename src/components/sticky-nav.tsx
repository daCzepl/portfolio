import { useState } from "react";
import { NavItem } from "./nav-item";

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

export const StickyNav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="fixed w-full bg-neutral-800 text-light-blue">
      <nav className="flex justify-center text-xl">
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
                textColour="text-light-blue"
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
