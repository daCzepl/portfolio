import React from "react";
import { Link } from "react-scroll";

interface NavItemProps {
  index?: number;
  name: string;
  path: string;
  grayOut?: boolean;
  textColour?: string;
  blurOutColour?: string;
}

export const NavItem: React.FC<NavItemProps & { onClick?: () => void }> = ({
  index = -1,
  name,
  path,
  grayOut = false,
  textColour = "text-white",
  blurOutColour = "text-white/50",
  onClick,
}) => {
  return (
    <div className={`flex flex-col items-end ${grayOut ? blurOutColour : ""}`}>
      <p className={`text-sm ${blurOutColour}`}>{index === -1 ? "" : `0${index}`}</p>
      <Link
        className={`-mt-2 ${grayOut ? blurOutColour : textColour}`}
        to={path}
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        activeClass="active"
        onClick={onClick}
      >
        {name}
      </Link>
    </div>
  );
};
