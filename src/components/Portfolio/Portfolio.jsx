const Portfolio = ({
  container_classes,
  headers_classes,
  normal_text_classes,
}) => {
  return (
    <div
      className={`portfolio_section flex border-2 border-red ${container_classes} pt-28 sm:pt-48 md:pt-48 lg:pt-40 xl:pt-40`}
    >
      Portfolio
    </div>
  );
};

export default Portfolio;
