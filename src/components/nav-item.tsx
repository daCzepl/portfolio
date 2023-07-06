import React from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  index: number;
  name: string;
  path: string;
}

export const NavItem: React.FC<NavItemProps> = ({ index, name, path }) => {
  return (
    <div className="flex flex-col items-end">
      <p className="text-sm text-gray-400">0{index}</p>
      <Link className="-mt-2" to={path}>{name}</Link>
    </div>
  );
}; 
