import "./Blogs.css";
import sydneyThumbnail from "../../images/article_images/sydney.jpg";
import calanderIcon from "../../images/icons/calander.png";

const BlogCard = ({
  title,
  date,
  description,
  thumbnail,
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  return (
    <div className="blog-card flex gap-5 mt-12">
      <div
        className="flex-1"
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex-1 flex flex-col gap-3">
        <div
          className={`${normal_text_classes} flex flex-row gap-2 items-center`}
        >
          <img
            src={calanderIcon}
            alt="calanderIcon"
            className="flex w-[20px] h-[20px] "
          />
          {date}
        </div>
        <div className={`${headers_classes}`}>{title}</div>
        <div
          className={`${normal_text_classes} text-ellipsis overflow-hidden h-[140px] sm:h-auto max-h-[140px] sm:max-h-none overflow-y-auto sm:overflow-y-visible`}
        >
          {description}
        </div>
        <a
          href="https://www.linkedin.com/pulse/sydney-house-prices-analysis-abhash-rai/?trackingId=mh4x%2FgL9SielzlYWCeOFVQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className={`${normal_text_classes} bg-custom-light-blue text-custom-darker-blue font-semibold w-[70%] sm:w-[35%] lg:w-[25%] flex justify-center items-center rounded-md hover:scale-110 transition-transform duration-300`}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const Blogs = ({ container_classes, headers_classes, normal_text_classes }) => {
  const blogs = [
    {
      title: "Sydney Housing Market Analysis",
      date: "March 6, 2023",
      description:
        "Gain insights into the Sydney housing market! Check out this analysis which reveals fascinating trends including the impact of several features on property prices, the top 5 most expensive and affordable suburbs, and the most popular types of properties sold. With data visualizations and detailed analysis, this article is a must-read for anyone interested in Sydney!",
      thumbnail: sydneyThumbnail,
    },
  ];
  return (
    <>
      <div className="w-full py-9"></div>
      <div className="w-full flex flex-col gap-2 mt-10">
        <div
          className={`${normal_text_classes} text-custom-light-blue text-center`}
        >
          BLOGS / VLOGS
        </div>
        <div className="text-[18px] sm:text-[22px] md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-center">
          Some informative contents I posted
        </div>
      </div>
      <div className={`blogs_section ${container_classes} px-8`}>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index} // Make sure to provide a unique key for each blog card
            title={blog.title}
            date={blog.date}
            description={blog.description}
            thumbnail={blog.thumbnail}
            container_classes={container_classes}
            headers_classes={headers_classes}
            normal_text_classes={normal_text_classes}
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;
