import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Features.module.css";

export type FeaturesType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const Features: FunctionComponent<FeaturesType> = ({ propWidth, propFlex }) => {
  const featuresStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div className={styles.features} style={featuresStyle}>
      <div className={styles.bg} />
      <div className={styles.features1}>
        <div className={styles.featureWrapper}>
          <div className={styles.feature}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon-1.svg"
            />
            <div className={styles.point}>
              <div className={styles.highQuality}>High Quality</div>
              <div className={styles.craftedFromTop}>
                crafted from top materials
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featureContainer}>
          <div className={styles.feature1}>
            <img className={styles.icon1} alt="" src="/icon-2.svg" />
            <div className={styles.warranyProtectionParent}>
              <div className={styles.warranyProtection}>Warrany Protection</div>
              <div className={styles.over2Years}>Over 2 years</div>
            </div>
          </div>
        </div>
        <div className={styles.feature2}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.freeShippingParent}>
            <div className={styles.freeShipping}>Free Shipping</div>
            <div className={styles.orderOver150}>Order over 150 $</div>
          </div>
        </div>
        <div className={styles.feature3}>
          <img
            className={styles.icon2}
            loading="lazy"
            alt=""
            src="/2891214031638194523-1.svg"
          />
          <div className={styles.supportParent}>
            <div className={styles.support}>24 / 7 Support</div>
            <div className={styles.dedicatedSupport}>Dedicated support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
