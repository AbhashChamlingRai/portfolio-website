import attendance_management_system from "../../images/project_images/attendance_management_system.png";
import customer_churn from "../../images/project_images/customer_churn.png";
import sydney_housing_analysis from "../../images/project_images/sydney_housing_analysis.png";
import co2_prediction from "../../images/project_images/co2_prediction.png";
import "./Portfolio.css";

const Portfolio = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  const projects = [
    {
      coverImg: attendance_management_system,
      projectTitle: "Attendance Management System",
      projectType: "COMPUTER VISION & DATA ANALYSIS",
    },
    {
      coverImg: customer_churn,
      projectTitle: "Customer Churn Prediction",
      projectType: "MACHINE LEARNING CLASSIFICATION & DATA ANALYSIS",
    },
    {
      coverImg: sydney_housing_analysis,
      projectTitle: "Sydney Housing Market Analysis",
      projectType: "DATA ANALYSIS",
    },
    {
      coverImg: co2_prediction,
      projectTitle: "CO2 Emissions Prediction",
      projectType: "MACHINE LEARNING REGRESSION & DATA ANALYSIS",
    },
  ];

  const ProjectCard = ({ project }) => {
    return (
      <div
        className="project-card 
        w-[80%] sm:w-[70%] md:w-[70%] lg:w-[45%] xl:w-[45%] box-border 
        h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[350px]"
        style={{
          backgroundImage: `url(${project.coverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="project-hover-layer bg-custom-project-blue w-full h-full flex flex-col justify-center items-center px-20 gap-5">
          <div className={`${headers_classes}`}>{project.projectTitle}</div>
          <div className="text-[10px] md:text-[11px] lg:text-[12px] xl:text-md">
            {project.projectType}
          </div>
        </div>
        {/* <img src={project.coverImg} alt={project.projectTitle} /> */}
      </div>
    );
  };

  return (
    <div
      className={`portfolio_section flex flex-col gap-10 ${container_classes}`}
    >
      <div className="w-full flex flex-col">
        <div>PORTFOLIO</div>
        <div>Some of my works</div>
      </div>
      <div class="flex flex-wrap gap-10 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
