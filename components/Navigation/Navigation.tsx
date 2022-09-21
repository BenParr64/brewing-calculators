import * as React from "react";
import styles from './style.module.css';

export interface NavigationLink {
  name: string;
  link: string;
  subLink?: NavigationLink;
}

const navigationLinks = [
  {
    name: "About",
    link: "https://kegthat.com/about/",
    subLink: {
      name: "Beer",
      link: "https://kegthat.com"
    }
  },
  {
    name: "Kits",
    link: "https://kegthat.com/about/",
  },
  {
    name: "Equipment",
    link: "https://kegthat.com/about/",
  },
  {
    name: "Ingredients & Chemicals",
    link: "https://kegthat.com/about/",
  },
  {
    name: "Spirits",
    link: "https://kegthat.com/about/",
  },
  {
    name: "Blog",
    link: "https://kegthat.com/about/",
  },
  {
    name: "Forum",
    link: "https://kegthat.com/about/",
  }
] as NavigationLink[]

const Navigation = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.linksContainer}>
        {navigationLinks.map((linkItem, index) => (
          <a className={styles.topLevelNav} key={index} href={linkItem.link}>{linkItem.name}</a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
