import { FunctionComponent } from "react";
import styles from "./Arrows.module.css";

const Arrows: FunctionComponent = () => {
  return (
    <footer className={styles.arrows}>
      <div className={styles.separator} />
      <div className={styles.logoArea}>
        <h1 className={styles.fasco}>FASCO</h1>
        <div className={styles.fASCOBrand}>
          <div className={styles.footerLinks}>
            <div className={styles.supportCenter}>
              <div className={styles.invoicing}>
                <div className={styles.supportCenter1}>Support Center</div>
                <div className={styles.invoicing1}>Invoicing</div>
                <div className={styles.contract}>Contract</div>
                <div className={styles.careers}>Careers</div>
                <div className={styles.blog}>Blog</div>
                <div className={styles.faqs}>FAQ,s</div>
              </div>
            </div>
            <div className={styles.copyrightText}>
              Copyright © 2022 Xpro . All Rights Reseved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Arrows;
