import "./Landing.css";
import LandingDP from "../../images/dp.png";

const Landing = () => {
  return (
    <div className="landing_section">
      <div className="w-full py-9"></div>
      <div className="flex container mx-auto justify-center w-full py-28">
        <div className="w-3/4 flex flex-wrap ">
          <div className="w-1/2 flex justify-center">
            <img src={LandingDP} className="w-80" alt="logo" />
          </div>
          <div className="w-1/2">sfd</div>
          <div className="landing-section-button w-1/2 flex relative mt-10 xl:justify-normal lg:justify-normal md:justify-center sm:justify-center">
            <a
              href="#"
              download=""
              className="xl:w-auto lg:w-auto md:w-2/3 flex justify-center 2xl:text-3xl xl:text-2xl lg:text-lg font-light border-2 rounded-md border-custom-light-blue text-custom-light-blue px-7 py-2 box-border xl:absolute xl:left-56 lg:absolute lg:left-44"
            >
              Download CV
            </a>
          </div>
          <div className="landing-section-button w-1/2 flex relative mt-10 xl:justify-normal lg:justify-normal md:justify-center sm:justify-center">
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

export default Landing;
