import { NavItem } from "./nav-item";

interface HamburgerNavProps {
  handleMenu: () => void;
  navlinks: {
    name: string;
    path: string;
  }[];
  textCoulor: string;
  blurOutColour: string;
}

export const HamburgerNav: React.FC<HamburgerNavProps> = ({
  handleMenu,
  navlinks,
  textCoulor,
  blurOutColour,
}) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-4/5 lg:hidden h-screen bg-white">
      <div className="pt-12 pb-3 space-y-1 sm:px-3">
        {navlinks.map((link, index) => (
          <a
            key={index}
            className={"flex p-2 rounded-md text-base font-medium"}
          >
            <NavItem
              {...link}
              textColour={textCoulor}
              blurOutColour={blurOutColour}
              onClick={handleMenu}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
