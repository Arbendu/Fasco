import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImagesClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  return (
    <section className={styles.frameParent}>
      <div className={styles.newArrivalsParent}>
        <h1 className={styles.newArrivals}>New Arrivals</h1>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin `}</div>
      </div>
      <div className={styles.categories}>
        <button className={styles.category}>
          <div className={styles.bg} />
          <div className={styles.mensFashion}>Men’s Fashion</div>
        </button>
        <button className={styles.category1}>
          <div className={styles.bg1} />
          <div className={styles.womensFashion}>Women’s Fashion</div>
        </button>
        <button className={styles.category2}>
          <div className={styles.bg2} />
          <div className={styles.womenAccessories}>Women Accessories</div>
        </button>
        <button className={styles.category3}>
          <div className={styles.bg3} />
          <div className={styles.menAccessories}>Men Accessories</div>
        </button>
        <button className={styles.category4}>
          <div className={styles.bg4} />
          <div className={styles.discountDeals}>Discount Deals</div>
        </button>
      </div>
      <div className={styles.products}>
        <Product
          images="/images@2x.png"
          shinyDress="Shiny Dress"
          onImagesClick={onImagesClick}
        />
        <Product images="/images-1@2x.png" shinyDress="Long Dress" />
        <Product images="/images-2@2x.png" shinyDress="Full Sweater" />
        <Product images="/images-3@2x.png" shinyDress="White Dress" />
        <Product images="/images-4@2x.png" shinyDress="Colorful Dress" />
        <Product images="/images-5@2x.png" shinyDress="White Shirt" />
      </div>
      <button className={styles.button}>
        <div className={styles.bg5} />
        <div className={styles.viewMore}>View More</div>
      </button>
    </section>
  );
};

export default FrameComponent;
