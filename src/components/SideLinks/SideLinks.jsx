import datacampLogo from "../../images/logo/datacamp.png";
import githubLogo from "../../images/logo/github.png";
import kaggleLogo from "../../images/logo/kaggle.png";
import linkedinLogo from "../../images/logo/linkedin.png";
import verticleLine from "../../images/logo/verticle_line.png";
import "./SideLinks.css";

const SideLinks = () => {
  return (
    <div
      className="
        fixed 
        bottom-0
        xl:left-10 lg:left-10 md:left-10 sm:left-4
        flex flex-col justify-center gap-2"
    >
      <a href="" className="flex justify-center">
        <img
          src={datacampLogo}
          className="side_links_datacamp"
          alt="datacampLogo"
        />
      </a>
      <a href="" className="flex justify-center">
        <img src={githubLogo} className="side_links_github" alt="githubLogo" />
      </a>
      <a href="" className="flex justify-center">
        <img src={kaggleLogo} className="side_links_kaggle" alt="kaggleLogo" />
      </a>
      <a href="" className="flex justify-center">
        <img
          src={linkedinLogo}
          className="side_links_linkedin"
          alt="linkedinLogo"
        />
      </a>
      <div className="flex justify-center">
        <img src={verticleLine} className="" alt="verticleLine" />
      </div>
    </div>
  );
};

export default SideLinks;
