import React from "react";

interface NavItemProps {
  index: number;
  name: string;
  path: string;
  grayOut: boolean;
  textColour?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  index,
  name,
  path,
  grayOut,
  textColour = "text-white",
}) => {
  return (
    <div
      className={`flex flex-col items-end ${grayOut ? "text-gray-400" : ""}`}
    >
      <p className="text-sm text-gray-400">0{index}</p>
      <a
        className={`-mt-2 ${grayOut ? "text-gray-400" : { textColour }}`}
        href={`#${path}`}
      >
        {name}
      </a>
    </div>
  );
};
