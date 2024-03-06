import { FunctionComponent } from "react";
import PointsFrame from "./PointsFrame";
import styles from "./FreeShippingLabel.module.css";

const FreeShippingLabel: FunctionComponent = () => {
  return (
    <section className={styles.freeShippingLabel}>
      <div className={styles.orderSupportLabel}>
        <div className={styles.points}>
          <div className={styles.topLevelFrame}>
            <div className={styles.textComponent}>
              <div className={styles.rectangleComponent}>
                <div className={styles.point}>
                  <div className={styles.buttonLabelComponent}>
                    <img
                      className={styles.pointIcon}
                      loading="lazy"
                      alt=""
                      src="/point@2x.png"
                    />
                  </div>
                  <button className={styles.text}>
                    <div className={styles.bg} />
                    <div className={styles.suspender}>Suspender</div>
                  </button>
                </div>
              </div>
              <div className={styles.point1}>
                <div className={styles.freeShippingComponent}>
                  <img
                    className={styles.pointIcon1}
                    alt=""
                    src="/point-1@2x.png"
                  />
                </div>
                <button className={styles.text1}>
                  <div className={styles.bg1} />
                  <div className={styles.hugoBoss}>Hugo Boss</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.customerQuoteComponent}>
            <div className={styles.lineSeparatorComponent}>
              <div className={styles.instagramContainerComponent}>
                <div className={styles.point2}>
                  <img
                    className={styles.pointIcon2}
                    alt=""
                    src="/point-2.svg"
                  />
                  <div className={styles.subscribeButtonContainerCom}>
                    <button className={styles.text2}>
                      <div className={styles.bg2} />
                      <div className={styles.flatCap}>Flat Cap</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.point3}>
                <img className={styles.pointIcon3} alt="" src="/point-2.svg" />
                <div className={styles.text3}>
                  <button className={styles.text4}>
                    <div className={styles.bg3} />
                    <div className={styles.hugoBoss1}>Hugo Boss</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <div className={styles.point4}>
                <img className={styles.pointIcon4} alt="" src="/point-2.svg" />
                <div className={styles.textWrapper}>
                  <button className={styles.text5}>
                    <div className={styles.bg4} />
                    <div className={styles.santoni}>Santoni</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bgParent}>
          <img className={styles.bgIcon} alt="" src="/bg.svg" />
          <img className={styles.imageIcon} alt="" src="/image-4@2x.png" />
          <div className={styles.separator} />
        </div>
      </div>
      <PointsFrame
        propWidth="unset"
        propAlignSelf="unset"
        propFlex="1"
        propMarginLeft="-253px"
        mDisplay="inline-block"
        buyNowDisplay="inline-block"
      />
    </section>
  );
};

export default FreeShippingLabel;
