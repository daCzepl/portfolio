import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

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

export const Socials = () => {
  return (
    <div className="mx-auto">
      <ul className="flex flex-row gap-x-4 text-xl">
        {socials.map((link, index) => (
          <a target="_blank" href={link.path} key={index}>
            {link.icon}
          </a>
        ))}
      </ul>
    </div>
  );
};
