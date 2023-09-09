import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import SideLinks from "./components/SideLinks/SideLinks";
import About from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <SideLinks />
        <Landing />
        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
