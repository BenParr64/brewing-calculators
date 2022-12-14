import * as React from "react";
import { navigationLinks } from "./Links.types";
import styles from "./style.module.css";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import useWindowSize from "../../hooks/WindowSize";
import { useState } from "react";

export interface NavigationLink {
  name: string;
  link: string;
  subLink?: NavigationLink;
}

// let MOBILE_VIEW = false;
// if (typeof window !== 'undefined') {
//   MOBILE_VIEW = window.innerWidth < 468;
// }

const Navigation = () => {
  const isMobile = useWindowSize();

  return (
    <nav className={styles.navContainer}>
      <a href="https://kegthat.com/">
        <Image src={logo} alt="kegthat-logo" width="100px" height="100px" />
      </a>
      {!isMobile && (
        <div className={styles.linksContainer}>
          {navigationLinks.map((linkItem, index) => (
            <a className={styles.topLevelNav} key={index} href={linkItem.link}>
              {linkItem.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
