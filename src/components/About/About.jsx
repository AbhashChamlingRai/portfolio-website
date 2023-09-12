import React from "react";
import "./About.css";
import aboutPortraitImg from "../../images/portrait.png";
import data_analysis_icon from "../../images/icons/data_analysis_icon.png";
import machine_learning_icon from "../../images/icons/machine_learning_icon.png";
import web_dev_icon from "../../images/icons/web_dev_icon.png";
import location_icon from "../../images/icons/location_icon.png";

import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const AboutContent = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  return (
    <div
      className={`AboutContent text-sm flex items-start leading-normal
      text-left sm:text-center md:text-center lg:text-left xl:text-left 2xl:text-left
      ${normal_text_classes}`}
    >
      A firm believer in the power of data seeking challenging projects. My
      expertise lies in turning data into visual stories and actionable insights
      utilizing machine learning. I'm excited about its potential to improve
      lives and address complex challenges that cross our paths.
      <br />
      <br />
      Teaching and sharing knowledge are not just part of my job; they are my
      passion. I work as an academic tutor part-time. Beyond my academic
      pursuits, I actively contribute to the data community by sharing insights
      on platforms like Kaggle and DataCamp.
      <br />
      <br />
      These days my time is spent researching as well as working on robotics and
      autonomous systems, learning to get professionally certified as data
      scientist from DataCamp, and coding.
    </div>
  );
};

const SkillsContent = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  const data_analysis_skills = [
    "Statistics",
    "Python/SQL",
    "Jupyter",
    "Pandas/Numpy",
    "Matplotlib/Seaborn",
  ];
  const machine_learning_skills = ["Python", "Tensorflow", "Scikit-Learn"];
  const web_development_skills = ["Html/Css/Js", "Figma", "React", "Git"];

  return (
    <div
      className={`SkillsContent w-full flex flex-col gap-8 sm:gap-8 md:gap-8 lg:gap-6 xl:gap-6 2xl:gap-10 ${normal_text_classes}`}
    >
      <div className={`h-[15%] w-full px-2 flex justify-center items-center`}>
        Technical competencies in many areas with a key proficiency in data
        analysis 📊
      </div>
      <div className="SkillsContent_skills_container_outer h-[85%] w-full flex flex-row gap-3 justify-center items-center">
        <div className="SkillsContent_skills_container left_skill_section flex-1 h-full flex flex-col gap-8">
          <div className="skill_title flex flex-col gap-3">
            <div className="flex justify-center">
              <img
                src={data_analysis_icon}
                className="data_analysis_icon drop-shadow-lg w-14"
                alt="data_analysis_icon"
              />
            </div>
            <div
              className={`skills_title skills_title_data_analytics mx-10 xs:mx-10 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 ${normal_text_classes} font-normal`}
            >
              Data Analysis
            </div>
          </div>
          <div className="skills_list_container">
            <ul className="skills_listed flex flex-col gap-1 font-extralight">
              {data_analysis_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="SkillsContent_skills_container middle_skill_section flex-1 h-full flex flex-col gap-8 border-l-2 border-r-2 border-custom-light-blue">
          <div className="skill_title flex flex-col gap-3">
            <div className="flex justify-center">
              <img
                src={machine_learning_icon}
                className="machine_learning_icon drop-shadow-lg w-14"
                alt="machine_learning_icon"
              />
            </div>
            <div
              className={`skills_title mx-6 xs:mx-6 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 ${normal_text_classes} font-normal`}
            >
              Machine Learning
            </div>
          </div>
          <div className="skills_list_container">
            <ul className="skills_listed flex flex-col gap-1 font-extralight">
              {machine_learning_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="SkillsContent_skills_container right_skill_section flex-1 h-full flex flex-col gap-8">
          <div className="skill_title flex flex-col gap-3">
            <div className="flex justify-center">
              <img
                src={web_dev_icon}
                className="web_dev_icon drop-shadow-lg w-14"
                alt="web_dev_icon"
              />
            </div>
            <div
              className={`skills_title mx-3 xs:mx-3 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 ${normal_text_classes} font-normal`}
            >
              Web Development
            </div>
          </div>
          <div className="skills_list_container">
            <ul className="skills_listed flex flex-col gap-1 font-extralight">
              {web_development_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceContent = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  const workExperiences = [
    {
      jobTitle: "Data Science Intern",
      date: "Nov 2023 - Present",
      company: "LetsGrowMore",
      description:
        "Undertook a variety of projects, encompassing classification, time series forecasting, recommendation systems, image processing, exploratory data analysis, advanced tasks such as hand-written digit classification with CNN, next-word prediction with RNN, hand-written equation solving with CNN, and facial emotion classification.",
    },
    {
      jobTitle: "Data Fellowship",
      date: "Aug 2023 - Present",
      company: "Sunway Student Representative Council",
      description:
        'Undertaking DataCamp courses to earn "Professional Data Scientist certificate" while also working on data science projects, articles, instructional videos, mentoring, and sharing knowledge with the community.',
    },
    {
      jobTitle: "Academic Tutor",
      date: "Dec 2022 - Present",
      company: "Self-Employed",
      description:
        "Tutored various subjects up to 8th grade, customized teaching methods, monitored progress, maintained  effective parent communication - Elevated a student's math performance from failing to an impressive 75% in 2 months.",
    },
  ];

  function WorkExperience({ jobTitle, date, company, description }) {
    return (
      <div className={`experience flex flex-col gap-2 ${normal_text_classes}`}>
        <div className={`w-full text-left font-bold ${headers_classes}`}>
          {jobTitle}
        </div>
        <div className="date_company_container flex flex-row text-left">
          <div className=" text-left text-custom-light-blue">{date}</div>
          <div className="location_icon flex items-center ml-4 mr-6">
            <img src={location_icon} className="" alt="location_icon" />
          </div>
          <div className=" text-center font-extralight flex justify-start items-center">
            {company}
          </div>
        </div>
        <div className="text-left">{description}</div>
      </div>
    );
  }

  return (
    <div className="ExperienceContent">
      <div className="ExperienceContent_inner flex flex-col gap-8">
        {workExperiences.map((experience, index) => (
          <WorkExperience
            key={index}
            jobTitle={experience.jobTitle}
            date={experience.date}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

const About = ({ container_classes, headers_classes, normal_text_classes }) => {
  console.log(container_classes);
  const [value, setValue] = useState(2);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#45DBE2", // Set your desired indicator color here
      },
    },
  });

  return (
    <div
      className={`about_section ${container_classes} pt-28 sm:pt-48 md:pt-48 lg:pt-40 xl:pt-40`}
      // className="about_section container mx-auto py-20
      // sm:px-10 md:px-16 lg:px-10 xl:px-32 2xl:px-40"
    >
      <div
        className="
        about_section_inner flex justify-center
        sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 
        xl:gap-8 lg:gap-8 md:gap-6 sm:gap-5"
      >
        <div
          className="
            aboutPortraitImg_container
            mx-auto
            xl:w-[35%]
            lg:w-[35%]
            md:w-[55%]
            sm:w-[45%]
            "
        >
          <img
            src={aboutPortraitImg}
            className="aboutPortraitImg drop-shadow-lg"
            alt="aboutPortraitImg"
          />
        </div>
        <div
          className="
          flex flex-col gap-6 
        xl:w-[65%] lg:w-[65%] md:w-[100%]
        "
        >
          <ThemeProvider theme={theme}>
            <Paper
              square
              style={{ backgroundColor: "transparent" }}
              className=""
            >
              <Tabs
                className="tabs-container flex justify-center w-full"
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  display: "flex",
                  justifyContent: "center",
                }}
                value={value}
                textColor="primary"
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <Tab label="ABOUT ME" className="about_me_tab" />
                <Tab label="SKILLS" className="skills_tab" />
                <Tab label="EXPERIENCE" className="experience_tab" />
              </Tabs>
            </Paper>
          </ThemeProvider>
          <div className="flex justify-center sm:h-full md:h-full lg:h-full xl:h-full 2xl:h-auto">
            {value === 0 && (
              <AboutContent
                container_classes={container_classes}
                headers_classes={headers_classes}
                normal_text_classes={normal_text_classes}
              />
            )}
            {value === 1 && (
              <SkillsContent
                container_classes={container_classes}
                headers_classes={headers_classes}
                normal_text_classes={normal_text_classes}
              />
            )}
            {value === 2 && (
              <ExperienceContent
                container_classes={container_classes}
                headers_classes={headers_classes}
                normal_text_classes={normal_text_classes}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
