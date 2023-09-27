import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import MainPage from "./pages/MainPage";
import BlogsPage from "./pages/BlogsPage";

const MyContext = createContext("");

function App() {
  const container_classes =
    " container mx-auto sm:px-10 md:px-16 lg:px-10 xl:px-32 2xl:px-40 ";
  const headers_classes =
    " font-bold text-[16px] sm:text-lg md:text-lg lg:text-[19px] xl:text-[20px] 2xl:text-2xl ";
  const normal_text_classes =
    " text-[13px] sm:text-[13.5px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-lg ";

  return (
    <div className="relative">
      <div id="stars-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <MyContext.Provider
        value={{ container_classes, headers_classes, normal_text_classes }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              index
              path="/"
              element={
                <MainPage
                  container_classes={container_classes}
                  headers_classes={headers_classes}
                  normal_text_classes={normal_text_classes}
                />
              }
            />
            <Route
              path="/blogs"
              element={
                <BlogsPage
                  container_classes={container_classes}
                  headers_classes={headers_classes}
                  normal_text_classes={normal_text_classes}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
