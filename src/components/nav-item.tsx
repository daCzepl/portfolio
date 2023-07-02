import React from "react";
interface NavItemProps {
  name: string;
  path: string;
}

export const NavItem: React.FC<NavItemProps> = ({ name, path }) => {
  return <a className="text-white" href={path}>{name}</a>;
};
