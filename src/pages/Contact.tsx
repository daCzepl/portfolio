import { useCursorContext } from "../components/providers/CursorContext";
import { Socials } from "../components/socials";

export const Contact = () => {
  const { enterHover, exitHover } = useCursorContext();

  return (
    <div className="bg-neutral-900 text-white mt-12 p-10 grid grid-cols-2" id="contact">
      <div>
        <div className="text-3xl md:text-5xl lg:text-7xl text-start mb-14 font-bold 2xl">Contact</div>
        <div className="text-lg md:text-xl lg:text-2xl ">
          <p>
            Have an exicting Project you need Help with? <br />
            I'd love to help out!
          </p>
        </div>
        <div className="text-lg md:text-xl lg:text-2xl">
          <p>Send me an email or contact me over any social linked!</p>
        </div>
        <div className="hover:underline mt-10">
          <a href="mailto:stefan.czepl04@gmail.com" onMouseEnter={enterHover} onMouseLeave={exitHover}>
            stefan.czepl04@gmail.com
          </a>
        </div>
        <div className="mt-10">
          <Socials />
        </div>
      </div>
      <div className="flex items-end justify-end">
        <div className="flex flex-col lg:gap-x-12 max-lg:space-y-4 lg:flex-row">
          <div>Resume</div>
          <div>Imprint</div>
          <div>Pricacy</div>
        </div>
      </div>
    </div>
  );
};
