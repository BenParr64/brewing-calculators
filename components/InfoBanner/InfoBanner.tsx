import * as React from "react";
import styles from './style.module.css';

const BannerMessage = "FREE POSTAGE OVER £75* | ORDERS NOW BEING DISPATCHED AS USUAL"

const InfoBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      {BannerMessage}
    </div>
  );
};

export default InfoBanner;
