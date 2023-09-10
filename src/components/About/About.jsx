import React from "react";
import "./About.css";
import aboutPortraitImg from "../../images/portrait.png";
import data_analysis_icon from "../../images/icons/data_analysis_icon.png";
import machine_learning_icon from "../../images/icons/machine_learning_icon.png";
import web_dev_icon from "../../images/icons/web_dev_icon.png";

import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const AboutContent = () => {
  return (
    <div
      className="
      AboutContent
      my-auto
      text-sm 
      text-left sm:text-center md:text-center lg:text-left xl:text-left 2xl:text-left
      sm:text-sm md:text-sm lg:text-lg xl:text-lg 2xl:text-lg
      "
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

const SkillsContent = () => {
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
    <div className="SkillsContent w-full flex flex-col gap-8 sm:gap-8 md:gap-8 lg:gap-6 xl:gap-6 2xl:gap-10">
      <div className="h-[15%] w-full px-2 flex justify-center items-center text-sm sm:text-md md:text-[16px] lg:text-[17px] xl:text-lg 2xl:text-xl">
        Technical competencies in many areas with a key proficiency in data
        analysis 📊
      </div>
      <div className="h-[85%] w-full flex flex-row gap-3 justify-center items-center">
        <div className="flex-1 h-full flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center">
              <img
                src={data_analysis_icon}
                className="data_analysis_icon drop-shadow-lg w-14"
                alt="data_analysis_icon"
              />
            </div>
            <div className="skills_title skills_title_data_analytics text-[14px] sm:text-[14.5px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-xl mx-10 xs:mx-10 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0">
              Data Analysis
            </div>
          </div>
          <div className="">
            <ul className="skills_listed flex flex-col gap-1 font-extralight text-[13px] sm:text-sm md:text-md lg:text-md xl:text-[17px] 2xl:text-lg">
              {data_analysis_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="middle_skill_section flex-1 h-full flex flex-col gap-8 border-l-2 border-r-2 border-custom-light-blue">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center">
              <img
                src={machine_learning_icon}
                className="machine_learning_icon drop-shadow-lg w-14"
                alt="machine_learning_icon"
              />
            </div>
            <div className="skills_title text-[14px] sm:text-[14.5px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-xl mx-6 xs:mx-6 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0">
              Machine Learning
            </div>
          </div>
          <div className="">
            <ul className="skills_listed flex flex-col gap-1 font-extralight text-[13px] sm:text-sm md:text-md lg:text-md xl:text-[17px] 2xl:text-lg">
              {machine_learning_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 h-full flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center">
              <img
                src={web_dev_icon}
                className="web_dev_icon drop-shadow-lg w-14"
                alt="web_dev_icon"
              />
            </div>
            <div className="skills_title text-[14px] sm:text-[14.5px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-xl mx-3 xs:mx-3 sm:mx-0 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0">
              Web Development
            </div>
          </div>
          <div className="">
            <ul className="skills_listed flex flex-col gap-1 font-extralight text-[13px] sm:text-sm md:text-md lg:text-md xl:text-[17px] 2xl:text-lg">
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

const ExperienceContent = () => {
  return <div className="">ExperienceContent</div>;
};

const About = () => {
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
      className="about_section container mx-auto py-20
      sm:px-10 md:px-16 lg:px-10 xl:px-32 2xl:px-40"
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
                className="tabs-container flex justify-center"
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  display: "flex",
                  justifyContent: "center",
                }}
                value={value}
                textColor="primary"
                indicatorColor="primary"
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
            {value === 0 && <AboutContent />}
            {value === 1 && <SkillsContent />}
            {value === 2 && <ExperienceContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
