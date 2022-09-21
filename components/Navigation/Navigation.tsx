import * as React from "react";
import useMobileDetect from "../../hooks/useMobileDetect";
import { navigationLinks } from "./Links.types";
import styles from "./style.module.css";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

export interface NavigationLink {
  name: string;
  link: string;
  subLink?: NavigationLink;
}

const Navigation = () => {
  const { isDesktop, isMobile } = useMobileDetect();

  return (
    <nav className={styles.navContainer}>
        <a href="https://kegthat.com/"><Image src={logo} alt="kegthat-logo" width="100px" height="100px" /></a>
      {!isMobile() && (
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