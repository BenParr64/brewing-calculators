import * as React from "react";
import { Header } from "../Header";
import styles from './styles.module.css';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.pageContainer}>
      <Header/>
      {children}
    </div>
  );
};

export default Layout;
