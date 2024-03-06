import { FunctionComponent } from "react";
import { Select } from "@chakra-ui/react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.separatorParent}>
      <div className={styles.separator} />
      <div className={styles.fascoParent}>
        <h1 className={styles.fasco}>FASCO</h1>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.copyrightTextWrapper}>
              <div className={styles.copyrightText}>
                Copyright © 2022 FASCO . All Rights Reseved.
              </div>
            </div>
            <div className={styles.homeParent}>
              <div className={styles.home}>Home</div>
              <div className={styles.shop}>Shop</div>
              <div className={styles.products}>Products</div>
              <Select className={styles.footerContent} w="62px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
