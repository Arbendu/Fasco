import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ImageFrame.module.css";

export type ImageFrameType = {
  image2?: string;
  image3?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  subscribeNowDisplay?: CSSProperties["display"];
};

const ImageFrame: FunctionComponent<ImageFrameType> = ({
  propAlignSelf,
  propWidth,
  propPadding,
  subscribeNowDisplay,
  image2,
  image3,
}) => {
  const imageFrameStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propWidth, propPadding]);

  const subscribeNowStyle: CSSProperties = useMemo(() => {
    return {
      display: subscribeNowDisplay,
    };
  }, [subscribeNowDisplay]);

  return (
    <section className={styles.imageFrame} style={imageFrameStyle}>
      <img className={styles.image2Icon} loading="lazy" alt="" src={image2} />
      <div className={styles.inputFieldFrame}>
        <div className={styles.subscriptionCall}>
          <h1 className={styles.subscribeToOur}>Subscribe To Our Newsletter</h1>
          <div className={styles.placeholderText}>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin `}</div>
            <input
              className={styles.emailInputField}
              placeholder="michael@ymail.com"
              type="text"
            />
          </div>
          <div className={styles.separatorLine}>
            <button className={styles.button}>
              <div className={styles.bg} />
              <div className={styles.subscribeNow} style={subscribeNowStyle}>
                Subscribe Now
              </div>
            </button>
          </div>
        </div>
      </div>
      <img className={styles.image3Icon} loading="lazy" alt="" src={image3} />
    </section>
  );
};

export default ImageFrame;
