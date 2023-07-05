import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  name: string;
  path: string;
}

export const NavItem: React.FC<NavItemProps> = ({ name, path }) => {
  return <Link to={path}>{name}</Link>;
};
