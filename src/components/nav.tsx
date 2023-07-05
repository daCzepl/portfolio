import { NavItem } from "./nav-item";
import { Socials } from "./socials";
const navlinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const Nav = () => {
  return (
    <div className="flex flex-col justify-between items-stretch text-center h-full pb-24 text-white">
      <div className="text-white">Logo</div>
      <nav>
        <ul className="flex flex-col text-2xl ">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className={`${
                index === navlinks.length - 1 ? "border-b-2" : ""
              } pb-2 border-t-2`}
            >
              <NavItem {...link} />
            </li>
          ))}
        </ul>
      </nav>
      <Socials />
    </div>
  );
};
