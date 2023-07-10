import React from "react";

interface NavItemProps {
  index: number;
  name: string;
  path: string;
  grayOut: boolean;
  textColour?: string;
  blurOutColour?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  index,
  name,
  path,
  grayOut,
  textColour = "text-white",
  blurOutColour = "text-white/50",
}) => {
  return (
    <div className={`flex flex-col items-end ${grayOut ? blurOutColour : ""}`}>
      <p className={`text-sm ${blurOutColour}`}>0{index}</p>
      <a
        className={`-mt-2 ${grayOut ? blurOutColour : textColour}`}
        href={`#${path}`}
      >
        {name}
      </a>
    </div>
  );
};
