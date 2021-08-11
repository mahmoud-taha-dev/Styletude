import React from "react";
import styles from "./MainBtn.module.scss";
const MainBtn = ({ text, action, style = {} }) => {
  return (
    <button onClick={action} className={`${styles.mainBtn} ${style}`}>
      {text}
    </button>
  );
};
export default React.memo(MainBtn);
