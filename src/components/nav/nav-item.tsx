import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
    }

    setTimeout(() => {
      const element = document.getElementById(path);
      if (element) {
        const yOffset = -70;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);

    if (onClick) onClick();
  };
  return (
    <div className={`flex flex-col items-end ${grayOut ? blurOutColour : ""}`}>
      <p className={`text-sm ${blurOutColour}`}>{index === -1 ? "" : `0${index}`}</p>
      <button className={`-mt-2 ${grayOut ? blurOutColour : textColour}`} onClick={handleClick}>
        {name}
      </button>
    </div>
  );
};
