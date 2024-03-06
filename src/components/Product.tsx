import { FunctionComponent } from "react";
import styles from "./Product.module.css";

export type ProductType = {
  images?: string;
  shinyDress?: string;

  /** Action props */
  onImagesClick?: () => void;
};

const Product: FunctionComponent<ProductType> = ({
  images,
  shinyDress,
  onImagesClick,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.base} />
      <img
        className={styles.imagesIcon}
        loading="lazy"
        alt=""
        src={images}
        onClick={onImagesClick}
      />
      <div className={styles.frameCardParent}>
        <div className={styles.frameCard}>
          <div className={styles.testimonial}>
            <div className={styles.shinyDress}>{shinyDress}</div>
            <div className={styles.alKaram}>Al Karam</div>
          </div>
          <div className={styles.kCustomerReviews}>(4.1k) Customer Reviews</div>
          <div className={styles.text}>$95.50</div>
        </div>
        <div className={styles.starsParent}>
          <img
            className={styles.starsIcon}
            loading="lazy"
            alt=""
            src="/stars.svg"
          />
          <div className={styles.almostSoldOut}>Almost Sold Out</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
