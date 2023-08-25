import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

interface HamburgerButtonProps {
  menuOpen: boolean;
  handleMenu: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  menuOpen,
  handleMenu,
}) => (
  <div className="-mr-2 flex lg:hidden">
    <button
      type="button"
      onClick={handleMenu}
      className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      {menuOpen ? <AiOutlineClose size={30} /> : <FiMenu size={30} />}
    </button>
  </div>
);
