import * as React from "react";
import styles from './style.module.css';

const BannerMessage = "Kegthat Calculators Site"

const InfoBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      {BannerMessage}
    </div>
  );
};

export default InfoBanner;
