import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    </BrowserRouter>
  );
}

export default App;
