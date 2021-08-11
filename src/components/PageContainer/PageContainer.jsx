import { useEffect } from "react";

const PageContainer = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <div className="container py-5 mt-5">{children}</div>;
};

export default PageContainer;
