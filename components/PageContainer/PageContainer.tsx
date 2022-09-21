import React from "react";
import styles from "./styles.module.css";

export interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default PageContainer;
