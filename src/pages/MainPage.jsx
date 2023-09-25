import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import SideLinks from "../components/SideLinks/SideLinks";
import About from "../components/About/About";
import EducationAwards from "../components/EducationAwards/EducationAwards";
import Portfolio from "../components/Portfolio/Portfolio";
import ContactForm from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function MainPage({ container_classes, headers_classes, normal_text_classes }) {
  return (
    <div className="main_page">
      <Navbar />
      <SideLinks />
      <div className="flex flex-col gap-40">
        <div>
          <Landing
            container_classes={container_classes}
            headers_classes={headers_classes}
            normal_text_classes={normal_text_classes}
          />
        </div>

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
        <ContactForm
          container_classes={container_classes}
          headers_classes={headers_classes}
          normal_text_classes={normal_text_classes}
        />
        <Footer
          container_classes={container_classes}
          headers_classes={headers_classes}
          normal_text_classes={normal_text_classes}
        />
      </div>
    </div>
  );
}

export default MainPage;
