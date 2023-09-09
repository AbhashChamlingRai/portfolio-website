import React from "react";
import "./About.css";
import aboutPortraitImg from "../../images/portrait.png";

import Paper from "@mui/material/Paper";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
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
  return <div className="">SkillsContent</div>;
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
