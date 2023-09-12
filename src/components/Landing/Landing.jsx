import "./Landing.css";
import LandingDP from "../../images/dp.png";
import Typewriter from "typewriter-effect";
import downArrow from "../../images/icons/down.png";

const Landing = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  return (
    <>
      <div className="w-full py-9"></div>
      <div
        className={`landing_section ${container_classes} pt-28 sm:pt-24 md:pt-16 lg:pt-20 xl:pt-28`}
      >
        <div className="landing_section_inner flex flex-wrap justify-center w-full gap-10">
          <div className="flex flex-1 justify-end">
            <img src={LandingDP} className="w-80" alt="logo" />
          </div>
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
              className="landing_section_border_size_control download_cv_button z-[0] w-auto md:w-[60%] lg:w-auto xl:w-auto flex justify-center 2xl:text-3xl xl:text-2xl lg:text-lg font-light border-2 rounded-md border-custom-light-blue text-custom-light-blue px-7 py-2 box-border transform hover:scale-110 transition-transform duration-300"
            >
              Download CV
            </a>
          </div>
          <div className="landing-section-button flex flex-1 justify-start">
            <a
              href="#"
              className="landing_section_border_size_control contact_button z-[0] w-auto md:w-[60%] lg:w-auto xl:w-auto flex justify-center 2xl:text-3xl xl:text-2xl lg:text-lg font-regular border-0 rounded-md bg-custom-light-blue text-custom-dark-blue px-12 py-2 box-border transform hover:scale-110 transition-transform duration-300"
            >
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
      <div className="scroll_down absolute bottom-3 z-[-1] right-0 xl:flex lg:flex md:flex sm:hidden">
        <ul className="flex flex-col">
          <li>
            <img src={downArrow} className="arrow1 w-1/3" alt="down arrow" />
          </li>
          <li>
            <img src={downArrow} className="arrow2 w-1/3" alt="down arrow" />
          </li>
          <li>
            <img src={downArrow} className="arrow3 w-1/3" alt="down arrow" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Landing;
