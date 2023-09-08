import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import SideLinks from "./components/SideLinks/SideLinks";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <SideLinks />
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
