import Navbar from "../components/Navbar/Navbar";
import SideLinks from "../components/SideLinks/SideLinks";

const BlogsPage = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  return (
    <div className="blogs_page">
      <Navbar />
      <SideLinks />
    </div>
  );
};

export default BlogsPage;
