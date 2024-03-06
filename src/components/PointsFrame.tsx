import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PointsFrame.module.css";

export type PointsFrameType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propMarginLeft?: CSSProperties["marginLeft"];
  mDisplay?: CSSProperties["display"];
  buyNowDisplay?: CSSProperties["display"];
};

const PointsFrame: FunctionComponent<PointsFrameType> = ({
  propWidth,
  propAlignSelf,
  propFlex,
  propMarginLeft,
  mDisplay,
  buyNowDisplay,
}) => {
  const pointsFrameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      flex: propFlex,
      marginLeft: propMarginLeft,
    };
  }, [propWidth, propAlignSelf, propFlex, propMarginLeft]);

  const mStyle: CSSProperties = useMemo(() => {
    return {
      display: mDisplay,
    };
  }, [mDisplay]);

  const buyNowStyle: CSSProperties = useMemo(() => {
    return {
      display: buyNowDisplay,
    };
  }, [buyNowDisplay]);

  return (
    <div className={styles.pointsFrame} style={pointsFrameStyle}>
      <img className={styles.bgIcon} loading="lazy" alt="" src="/bg-1.svg" />
      <div className={styles.womenCollection}>Women Collection</div>
      <h1 className={styles.peakyBlinders}>Peaky Blinders</h1>
      <div className={styles.description}>DESCRIPTION</div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Scelerisque duis.
      </div>
      <div className={styles.logoContainer}>
        <div className={styles.size}>Size:</div>
        <button className={styles.m}>
          <div className={styles.bg} />
          <div className={styles.m1} style={mStyle}>
            M
          </div>
        </button>
      </div>
      <div className={styles.parentBanner}>
        <span>$100.</span>
        <span className={styles.span}>00</span>
      </div>
      <button className={styles.button}>
        <div className={styles.bg1} />
        <div className={styles.buyNow} style={buyNowStyle}>
          Buy Now
        </div>
      </button>
    </div>
  );
};

export default PointsFrame;
