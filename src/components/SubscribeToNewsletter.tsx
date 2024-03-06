import { FunctionComponent } from "react";
import { Select } from "@chakra-ui/react";
import styles from "./SubscribeToNewsletter.module.css";

const SubscribeToNewsletter: FunctionComponent = () => {
  return (
    <section className={styles.subscribeToNewsletter}>
      <div className={styles.separator} />
      <div className={styles.fASCOText}>
        <h1 className={styles.fasco}>FASCO</h1>
        <div className={styles.copyrightText}>
          <div className={styles.frameParent}>
            <div className={styles.copyrightTextWrapper}>
              <div className={styles.copyrightText1}>
                Copyright © 2022 FASCO . All Rights Reseved.
              </div>
            </div>
            <div className={styles.fascoLogo}>
              <div className={styles.home}>Home</div>
              <div className={styles.shop}>Shop</div>
              <div className={styles.products}>Products</div>
              <Select className={styles.pagesContainer} w="62px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeToNewsletter;
