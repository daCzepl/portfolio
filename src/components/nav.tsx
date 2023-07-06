import { NavItem } from "./nav-item";
import { Socials } from "./socials";


const navlinks = [
  {
    name: "//\u00A0\u00A0home",
    path: "/home",
  },
  {
    name: "//\u00A0\u00A0about",
    path: "/about",
  },
  {
    name: "//\u00A0\u00A0skills",
    path: "/skills",
  },
  {
    name: "//\u00A0\u00A0projects",
    path: "/projects",
  },
  {
    name: "//\u00A0\u00A0contact",
    path: "/contact",
  },
];

export const Nav = () => {
  return (
    <div className="flex justify-between items-center text-center h-full pb-24 mx-12 text-white">
      <div>
        <h1>Stefan Czepl</h1>
      </div>
      <nav className="flex-grow">
        <ul className="flex justify-center text-xl">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className={"pr-12"}
            >
              <NavItem index={index+1} {...link} />
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Socials />
      </div>
    </div>
  );
};



