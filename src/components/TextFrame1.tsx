import { FunctionComponent } from "react";
import PointsFrame from "./PointsFrame";
import Features from "./Features";
import styles from "./TextFrame1.module.css";

const TextFrame1: FunctionComponent = () => {
  return (
    <section className={styles.textFrame}>
      <div className={styles.instagramFollowFrame}>
        <div className={styles.textcontent}>
          <div className={styles.featureTitleFrame}>
            <div className={styles.spanpage}>
              <div className={styles.homeShopProducts}>1</div>
            </div>
            <div className={styles.buttonnewsletter}>
              <div className={styles.highQualityWarranty}>
                <div className={styles.div}>2</div>
                <div className={styles.div1}>3</div>
                <div className={styles.div2}>»</div>
              </div>
            </div>
          </div>
        </div>
        <PointsFrame
          propWidth="unset"
          propAlignSelf="stretch"
          propFlex="unset"
          propMarginLeft="unset"
          mDisplay="inline-block"
          buyNowDisplay="inline-block"
        />
      </div>
      <div className={styles.featuresList}>
        <Features propWidth="unset" propFlex="1" />
      </div>
      <div className={styles.pageLinks}>
        <div className={styles.followUsOnInstagramParent}>
          <h1 className={styles.followUsOn}>Follow Us On Instagram</h1>
          <div
            className={styles.loremIpsumDolor}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin `}</div>
        </div>
      </div>
    </section>
  );
};

export default TextFrame1;
