import React, { useState } from "react";
import StickyBox from "react-sticky-box";
import "./EducationAwards.css";

import ScrollSpy from "react-ui-scrollspy";

import aitmLogo from "../../images/logo/aitm.png";
import worldquantLogo from "../../images/logo/worldquant.png";
import pinnacleLogo from "../../images/logo/pinnacle.png";
import sunwayLogo from "../../images/logo/sunway.png";

import awardIcon from "../../images/icons/award.png";

const EducationContentCreator = () => {
  const educationContent = [
    {
      institute: "Sunway College Kathmandu",
      additional: "(Birmingham City University)",
      course: "Bsc (Hons) Computer and Data Science",
      description:
        "Awarded Young Scientist at the 6th Nepal Youth Science Summit (NYSS) 2023 for college project, leading college team building humanoid robot",
      date: "November 2023 - Till Date",
      logo: sunwayLogo,
    },
    {
      institute: "WorldQuant University",
      additional: "(Online)",
      course: "Applied Data science",
      description:
        "Completed multiple projects related to data wrangling, exploratory data analysis, regression prediction, time series prediction, model deployment.",
      date: "March 2023 - Till Date",
      logo: worldquantLogo,
    },
    {
      institute: "Sunway College Kathmandu",
      additional: "",
      course: "Data Science Summer Training",
      description:
        "Undertook and got certified for three training of probability and statistics, ReactJs, and data analysis with python",
      date: "November 2023 - Till Date",
      logo: sunwayLogo,
    },
    {
      institute: "Asian Institute of Technology and Management",
      additional: "",
      course: "11th & 12th (Physical Sciences)",
      description:
        "Graduate high school with CGPA of 3.30 undertaking physical science and computer as my major.",
      date: "September 2018 - November 2020",
      logo: aitmLogo,
    },
    {
      institute: "Pinnacle Academy School",
      additional: "",
      course: "10th (Secondary Education Examination)",
      description: "GPA: 3.80",
      date: "July 2018",
      logo: pinnacleLogo,
    },
  ];
  return (
    <div id="education_section">
      <div className="font-bold text-left text-[16px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
        Education
      </div>
      {educationContent.map((item, index) => (
        <div
          key={index}
          className="flex flex-row py-8 border-b-[1px] border-white border-opacity-50 gap-2"
        >
          <div className="h-full w-[10%] flex justify-center">
            <img
              src={item.logo}
              alt={item.institute}
              className="eduLogos w-[50%] sm:w-[60%] md:w-[40%] lg:w-[40%] xl:w-[40%]"
            />
          </div>
          <div className="w-[90%] flex flex-col gap-2 text-[13px] sm:text-[13.5px] md:text-[15px] lg:text-[15px] xl:text-md 2xl:text-lg">
            <div className="flex justify-start">
              <span className="font-bold text-left">{item.institute}</span>
              <span className="text-left ml-3 font-extralight">
                {item.additional}
              </span>
            </div>
            <div className="text-left">— {item.course}</div>
            <div className="text-left">{item.description}</div>
            <div className="text-custom-light-blue text-left">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AwardsContentCreator = () => {
  const awardsContent = [
    {
      title: "Notebook Expert",
      by: "Issued by Kaggle",
      date: "Aug 2023",
      description: "",
      link: "https://www.kaggle.com/abhashrai",
    },
    {
      title: "Young Scientist Award",
      by: "Issued by Brainycube Research Organization",
      date: "Jul 2023",
      description:
        'Received Young Scientist Award at the 6th Nepal Youth Science Summit (NYSS) 2023, held at Mid-Valley International College, Kathmandu for presenting our project "Emergency Vechicle Management System"',
      link: "https://drive.google.com/file/d/1Gsa2Gy_-Pdt3WKq-UT0GByO0Cfagna9c/view?usp=sharing",
    },
    {
      title: "Engaging in Extra Curriculum Activities",
      by: "Issued by BCU Graduate+",
      date: "Apr 2023",
      description: "",
      link: "https://drive.google.com/file/d/1Gsa2Gy_-Pdt3WKq-UT0GByO0Cfagna9c/view?usp=sharing",
    },
  ];
  return (
    <div
      id="awards_section"
      className="pt-28 sm:pt-48 md:pt-48 lg:pt-40 xl:pt-40"
    >
      <div className="font-bold text-left text-[16px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
        Awards
      </div>
      {awardsContent.map((item, index) => (
        <div
          key={index}
          className="flex flex-row py-8 border-b-[1px] border-white border-opacity-50 gap-2"
        >
          <div className="h-full w-[10%] flex justify-center">
            <img
              src={awardIcon}
              alt="Award Icon"
              className="w-[30px] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[60%]"
            />
          </div>
          <div className="w-[90%] flex flex-col  gap-2 text-[13px] sm:text-[13.5px] md:text-[15px] lg:text-[15px] xl:text-md 2xl:text-lg">
            <div className="flex flex-wrap justify-start font-bold text-left">
              {item.title}
            </div>
            <div className="text-left flex flex-row">
              <span className="flex flex-wrap text-left">— {item.by}</span>
              <span className="flex flex-wrap text-left ml-3 font-extralight text-custom-light-blue">
                ({item.date})
              </span>
            </div>
            <div className="flex flex-wrap text-left">{item.description}</div>
            <div className="flex flex-wrap text-left">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const EducationAwards = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  const [educationText, setEducationText] = useState("Education");
  const [awardsText, setAwardsText] = useState("Education");

  const handleUpdateCallback = (id) => {
    // Check the ID of the active element and set content accordingly
    if (id === "education_section") {
      setEducationText("*Education");
      setAwardsText("Awards");
    } else if (id === "awards_section") {
      setEducationText("Education");
      setAwardsText("*Awards");
    }
    console.log(id);
  };

  return (
    <div
      style={{ display: "flex", alignItems: "flex-start" }}
      className={`EducationAwards px-14 ${container_classes}
      pt-28 sm:pt-48 md:pt-48 lg:pt-40 xl:pt-40
        flex gap-3 sm:gap-14 md:gap-14 lg:gap-4 xl:gap-4`}
    >
      <StickyBox
        className="sticky_sidebar w-[32%] font-semibold text-[16px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl"
        offsetTop={200}
        offsetBottom={20}
      >
        <div
          className="text-left transition-all duration-300 ease-in-out"
          id="education_text"
          data-to-scrollspy-id="education_section"
        >
          {educationText}
        </div>
        <div
          className="text-left transition-all duration-300 ease-in-out"
          data-to-scrollspy-id="awards_section"
        >
          {awardsText}
        </div>
      </StickyBox>

      <ScrollSpy
        activeClass="EducationAwards_active"
        scrollThrottle={80}
        useBoxMethod
        onUpdateCallback={handleUpdateCallback}
        className="flex-auto flex flex-col text-[13px] sm:text-[13.5px] md:text-[15px] lg:text-[15px] xl:text-md 2xl:text-lg"
      >
        <EducationContentCreator />
        <AwardsContentCreator />
      </ScrollSpy>
    </div>
  );
};

export default EducationAwards;
