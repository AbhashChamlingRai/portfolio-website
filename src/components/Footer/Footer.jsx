import "./Footer.css";
import emailIcon from "../../images/icons/email.png";
import mapIcon from "../../images/icons/map.png";
import phoneIcon from "../../images/icons/phone.png";

const Footer = ({ container_classes, headers_classes }) => {
  const normal_text_classes =
    " text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-lg ";

  return (
    <div className="bg-[#1E1E1E]">
      <div
        className={`footer_section ${normal_text_classes} font-extralight text-left py-10 sm:py-10 xl:py-12 px-16 ${container_classes} bg-[#1E1E1E] flex flex-col gap-14`}
      >
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-2 md:gap-6 lg:gap-20">
          <div className="flex-1 flex flex-col gap-3 sm:gap-8">
            <div className={`${headers_classes}`}>Abhash Rai</div>
            <div className="">
              I'm passionate about embracing new challenges and collaborating
              with new people in innovative environments
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 sm:gap-8">
            <div className={`${headers_classes}`}>Services</div>
            <div className="">
              <ul className="flex flex-col gap-1">
                <li className="">
                  <span className="text-custom-light-blue">→ </span>Data
                  Analysis
                </li>
                <li className="">
                  <span className="text-custom-light-blue">→ </span>Predictive
                  Modeling
                </li>
                <li className="">
                  <span className="text-custom-light-blue">→ </span>Data Science
                </li>
                <li className="">
                  <span className="text-custom-light-blue">→ </span>UI/UX Design
                </li>
                <li className="">
                  <span className="text-custom-light-blue">→ </span>Front-End
                  Development
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 sm:gap-8">
            <div className={`${headers_classes}`}>Have a Question?</div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <div className="w-[20px] sm:w-[10%] flex justify-center items-start">
                  <img src={mapIcon} className="w-[100%]" alt="mapIcon" />
                </div>
                <div className="w-[90%]">
                  Nakhudole, Karyabinayak 44700, Lalitpur, Nepal
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="w-[20px] sm:w-[10%] flex justify-center items-center">
                  <img src={phoneIcon} className="w-[100%]" alt="phoneIcon" />
                </div>
                <div className="w-[90%]">+977 9803934508</div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="w-[20px] sm:w-[10%] flex justify-center items-center">
                  <img src={emailIcon} className="w-[100%]" alt="emailIcon" />
                </div>
                <div className="w-[90%]">avash.cmling@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">Copyright to Abhash Rai © 2023</div>
      </div>
    </div>
  );
};

export default Footer;
