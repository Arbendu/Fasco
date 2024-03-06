import { FunctionComponent } from "react";
import styles from "./Logos.module.css";

const Logos: FunctionComponent = () => {
  return (
    <div className={styles.logos}>
      <div className={styles.bg} />
      <div className={styles.text}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className={styles.group}>
        <img className={styles.logoIcon1} alt="" src="/logo-1@2x.png" />
      </div>
      <img className={styles.logoIcon2} alt="" src="/logo-2@2x.png" />
      <div className={styles.logoWrapper}>
        <img className={styles.logoIcon3} alt="" src="/logo-3@2x.png" />
      </div>
      <div className={styles.womenCollectionFrame}>
        <img className={styles.logoIcon4} alt="" src="/logo-4@2x.png" />
      </div>
    </div>
  );
};

export default Logos;
