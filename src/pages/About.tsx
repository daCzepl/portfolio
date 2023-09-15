import placeHolder from "../assets/placeholder_image.jpg";

export const About = () => {
  return (
    <div className="bg-neutral-800 h-screen" id="about">
      <div className="text-white h-full items-center flex px-12 flex-col">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center mb-28 font-bold">
          I'm Stefan.
        </h1>
        <div className="grid grid-cols-2">
          <div className="w-96 ml-28">
            <img src={placeHolder} alt="Image" />
          </div>
          <div>
            <div className="mb-10">
              <p className="leading-normal text-2xl md:text-4xl lg:text-5xl max-w-2xl">
                I'm a Software Engineer and App Developer from St.Valentin,
                Austria.
              </p>
            </div>
            <div className="leading-relaxed text-lg md:text-xl lg:text-2xl max-w-2xl">
              <div className="mb-10">
                <p>
                  I'm currently attending the 5th form of HTL Perg for Software
                  Engineering. I have worked on various projects which you can
                  find under the Projects section.
                </p>
              </div>
              <p>
                I specialize in building backend solutions using Java, C# and
                Python.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
