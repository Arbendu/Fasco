import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Product1.module.css";

export type Product1Type = {
  linkResponsiveImage?: string;
  roundedRedHat?: string;
  subscribeNowButton?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
};

const Product1: FunctionComponent<Product1Type> = ({
  linkResponsiveImage,
  roundedRedHat,
  subscribeNowButton,
  propPadding,
  propBackgroundColor,
  propBackgroundColor1,
}) => {
  const product01Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divproductOptionItemStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const divproductOptionItem1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className={styles.product01} style={product01Style}>
      <div className={styles.linkResponsiveImageWrapper}>
        <img
          className={styles.linkResponsiveImage}
          loading="lazy"
          alt=""
          src={linkResponsiveImage}
        />
      </div>
      <div className={styles.rectangleNode}>
        <div className={styles.roundedRectangleNode}>
          <div className={styles.frameRoot}>
            <div className={styles.roundedRedHat}>{roundedRedHat}</div>
          </div>
          <div className={styles.boxyDenimFrame}>
            <div className={styles.emailInputField}>
              <div className={styles.subscribeNowButton}>
                {subscribeNowButton}
              </div>
            </div>
            <div className={styles.separatorNode}>
              <div className={styles.divsfTooltipItem}>
                <div
                  className={styles.divproductOptionItem}
                  style={divproductOptionItemStyle}
                />
              </div>
              <div className={styles.divsfTooltipItem1}>
                <div
                  className={styles.divproductOptionItem1}
                  style={divproductOptionItem1Style}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product1;
