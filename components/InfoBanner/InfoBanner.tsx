import * as React from "react";
import styles from './style.module.css';

const BannerMessage = <>Return to <a href="https://kegthat.com/">Shop</a></>

const InfoBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      {BannerMessage}
    </div>
  );
};

export default InfoBanner;
