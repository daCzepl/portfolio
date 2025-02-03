import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { useCursorContext } from "./providers/CursorContext";

const socials = [
  {
    name: "Github",
    path: "https://github.com/daCzepl",
    icon: <BsGithub />,
  },
  {
    name: "linkedin",
    path: "https://www.linkedin.com/in/stefan-czepl/",
    icon: <BsLinkedin />,
  },
  {
    name: "instagram",
    path: "https://www.instagram.com/daczepl/",
    icon: <BsInstagram />,
  },
  {
    name: "twitter",
    path: "/contact",
    icon: <BsTwitter />,
  },
];

export const Socials: React.FC = () => {
  const { enterHover, exitHover } = useCursorContext();

  return (
    <div className="mx-auto cursor-none">
      <ul className="flex flex-row gap-x-4 text-xl">
        {socials.map((link, index) => (
          <a
            target="_blank"
            href={link.path}
            key={index}
            onMouseEnter={() => {
              enterHover();
            }}
            onMouseLeave={() => {
              exitHover();
            }}
          >
            {link.icon}
          </a>
        ))}
      </ul>
    </div>
  );
};
