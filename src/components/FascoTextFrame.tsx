import { FunctionComponent } from "react";
import { Select } from "@chakra-ui/react";
import styles from "./FascoTextFrame.module.css";

const FascoTextFrame: FunctionComponent = () => {
  return (
    <div className={styles.fascoTextFrame}>
      <h1 className={styles.fasco}>FASCO</h1>
      <div className={styles.pagesTitle}>
        <div className={styles.homeShopProductsFrame}>
          <div className={styles.home}>Home</div>
          <div className={styles.shop}>Shop</div>
          <div className={styles.products}>Products</div>
          <Select className={styles.pageTitleContainer} w="62px" />
        </div>
      </div>
      <div className={styles.quantityController}>
        <div className={styles.amountDisplay}>
          <div className={styles.subtotalDisplay}>
            <div className={styles.buttonSvg}>
              <img
                className={styles.viewCartButtonFrame}
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div className={styles.svg}>
            <img className={styles.subscribeButtonIcon} loading="lazy" alt="" />
          </div>
          <div className={styles.cartIcon}>
            <div className={styles.svg1}>
              <img className={styles.dividerLineIcon} loading="lazy" alt="" />
            </div>
          </div>
          <div className={styles.pageTitleFrame}>
            <div className={styles.homeLinkText}>
              <div className={styles.cartButtonVector} />
              <div className={styles.cartSV}>1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FascoTextFrame;
