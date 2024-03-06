import { FunctionComponent } from "react";
import { Select } from "@chakra-ui/react";
import styles from "./CopyrightText.module.css";

const CopyrightText: FunctionComponent = () => {
  return (
    <footer className={styles.copyrightText}>
      <div className={styles.separator} />
      <div className={styles.productList}>
        <div className={styles.fascoText}>
          <h3 className={styles.fasco}>FASCO</h3>
          <div className={styles.homeShopProductsFrame}>
            <div className={styles.home}>Home</div>
            <div className={styles.shop}>Shop</div>
            <div className={styles.products}>Products</div>
            <Select className={styles.pageTitleContainer} w="62px" />
          </div>
        </div>
        <div className={styles.copyrightText1}>
          Copyright © 2022 FASCO . All Rights Reseved.
        </div>
      </div>
    </footer>
  );
};

export default CopyrightText;
