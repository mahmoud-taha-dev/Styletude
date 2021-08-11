import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import Products from "../../components/Products/Products";
const Home = () => {
  return (
    <div>
      <PageContainer title="Home">
        <Products />
      </PageContainer>
    </div>
  );
};

export default Home;
