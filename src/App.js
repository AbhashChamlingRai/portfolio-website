import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import SideLinks from "./components/SideLinks/SideLinks";
import About from "./components/About/About";
import EducationAwards from "./components/EducationAwards/EducationAwards";
import Portfolio from "./components/Portfolio/Portfolio";
import { createContext } from "react";

const MyContext = createContext("");

function App() {
  const container_classes =
    " container mx-auto sm:px-10 md:px-16 lg:px-10 xl:px-32 2xl:px-40 ";
  const headers_classes =
    " font-bold text-[16px] sm:text-lg md:text-lg lg:text-[19px] xl:text-[20px] 2xl:text-2xl ";
  const normal_text_classes =
    " text-[13px] sm:text-[13.5px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-lg ";

  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{ container_classes, headers_classes, normal_text_classes }}
      >
        <div className="App">
          <Navbar />
          <SideLinks />
          <Landing
            container_classes={container_classes}
            headers_classes={headers_classes}
            normal_text_classes={normal_text_classes}
          />
          <About
            container_classes={container_classes}
            headers_classes={headers_classes}
            normal_text_classes={normal_text_classes}
          />
          <EducationAwards
            container_classes={container_classes}
            headers_classes={headers_classes}
            normal_text_classes={normal_text_classes}
          />
          <Portfolio
            container_classes={container_classes}
            headers_classes={headers_classes}
            normal_text_classes={normal_text_classes}
          />
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
