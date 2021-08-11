import React from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import styles from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <div>
      <PageContainer title="Page Not Found">
        <h1 className={styles.title}>Page Not Found</h1>
      </PageContainer>
    </div>
  );
};

export default NotFoundPage;
