import Navbar from "../components/Navbar/Navbar";
import SideLinks from "../components/SideLinks/SideLinks";
import Blogs from "../components/Blogs/Blogs";

const BlogsPage = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  return (
    <div className="blogs_page">
      <Navbar />
      <SideLinks />
      <Blogs
        container_classes={container_classes}
        headers_classes={headers_classes}
        normal_text_classes={normal_text_classes}
      />
    </div>
  );
};

export default BlogsPage;
