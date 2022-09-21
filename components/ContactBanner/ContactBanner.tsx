import * as React from "react";
import styles from "./style.module.css";

const email = "SALES@KEGTHAT.COM";
const phone = "+44 151 374 2833";

const ContactBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.contactLinks}>
        <span className={styles.contactLink}>{email}</span>
        <span className={styles.contactLink}>{phone}</span>
      </div>
    </div>
  );
};

export default ContactBanner;
