import "./Landing.css";
import LandingDP from "../../images/dp.png";
import Typewriter from "typewriter-effect";

const Laanding = () => {
  return (
    <div className="landing_section">
      <div className="w-full py-9"></div>
      <div className="flex container mx-auto justify-center w-full py-28">
        <div className="w-3/4 flex flex-wrap ">
          <div className="w-1/2 flex justify-center">
            <img src={LandingDP} className="w-80 shadow-md" alt="logo" />
          </div>
          <div className="w-1/2">sfd</div>
          <div className="landing-section-button w-1/2 flex relative mt-10 xl:justify-normal lg:justify-normal md:justify-center sm:justify-center">
            <a
              href="#"
              download=""
              className="xl:w-auto lg:w-auto md:w-2/3 2xl:text-3xl xl:text-2xl lg:text-lg font-light border-2 rounded-md border-custom-light-blue text-custom-light-blue px-7 py-2 box-border xl:absolute xl:left-56 lg:absolute lg:left-44 "
            >
              Download CV
            </a>
          </div>
          <div className="landing-section-button w-1/2 flex mt-10">
            <a
              href="#"
              className="xl:w-auto lg:w-auto md:w-2/3 flex justify-center 2xl:text-3xl xl:text-2xl lg:text-lg font-light border-0 rounded-md bg-custom-light-blue text-custom-dark-blue px-12 py-2 box-border"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <>
      <div className="w-full py-9"></div>
      <div className="landing_section container mx-auto py-20 xl:px-52 lg:px-30 md:px-16 sm:px-0">
        <div className="flex flex-wrap justify-center w-full gap-10">
          <div className="flex flex-1 justify-center">
            <img src={LandingDP} className="w-80" alt="logo" />
          </div>
          {/* <div className="flex flex-0.5"></div> */}
          <div className="flex flex-1 flex-col gap-2 justify-center">
            <div className="full_name_text flex justify-start text-custom-light-blue font-bold xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl">
              Abhash Rai
            </div>
            <div className="work_title flex justify-start xl:text-2xl">
              Junior Data Analyst & Tutor
            </div>
            <div className="personality flex justify-start text-left pl-10 pt-5 xl:text-xl">
              🎷 Jazz lover
              <br />
              🧠 Problem solver
              <br />
              📊 Occasional data whiz
              <br />
              📧 avash.cmling@gmail.com
              <br />
            </div>
          </div>
        </div>
        <div className="w-full py-4"></div>
        <div className="flex w-full flex-wrap gap-10 justify-between">
          <div className="landing-section-button flex flex-1 justify-end">
            <a
              href="#"
              download=""
              className="xl:w-auto lg:w-auto md:w-2/3 flex justify-center 2xl:text-3xl xl:text-2xl lg:text-lg font-light border-2 rounded-md border-custom-light-blue text-custom-light-blue px-7 py-2 box-border transform hover:scale-110 transition-transform duration-300"
            >
              Download CV
            </a>
          </div>
          <div className="landing-section-button flex flex-1 justify-start">
            <a
              href="#"
              className="xl:w-auto lg:w-auto md:w-2/3 flex justify-center 2xl:text-3xl xl:text-2xl lg:text-lg font-regular border-0 rounded-md bg-custom-light-blue text-custom-dark-blue px-12 py-2 box-border transform hover:scale-110 transition-transform duration-300"
            >
              {/* Let's Talk */}
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "<span style='color: #1F1F38;'>Hi There!</span>"
                    )
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(
                      "<span style='color: #1F1F38;'>Let's Talk</span>"
                    )
                    .pauseFor(2000)
                    .start();
                }}
                css={{ color: "#1F1F38" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;