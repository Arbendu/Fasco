import { FunctionComponent } from "react";
import { Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <header className={styles.fascoParent}>
      <h1 className={styles.fasco}>FASCO</h1>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.homeWrapper}>
            <Link className={styles.home} to="/">
              Home
            </Link>
          </div>
          <Link className={styles.shop} to="/shop-page">
            Shop
          </Link>
          <div className={styles.productsParent}>
            <Link className={styles.products} to="/product-page">
              Products
            </Link>
            <div className={styles.activePageIndicator} />
          </div>
          <Select className={styles.pagesContainer} w="62px" />
        </div>
      </div>
      <div className={styles.fASCOTag}>
        <div className={styles.vectorSeparator}>
          <div className={styles.buttonSvg}>
            <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
          </div>
        </div>
        <div className={styles.svg}>
          <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
        </div>
        <div className={styles.svg1}>
          <img className={styles.vectorIcon2} alt="" src="/vector-3.svg" />
        </div>
        <div className={styles.svg2}>
          <img className={styles.vectorIcon3} alt="" src="/vector-4.svg" />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
