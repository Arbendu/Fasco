import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  /** Style props */
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
  suspenderDisplay?: CSSProperties["display"];
  hugoBossDisplay?: CSSProperties["display"];
  flatCapDisplay?: CSSProperties["display"];
  hugoBossDisplay1?: CSSProperties["display"];
  santoniDisplay?: CSSProperties["display"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  propTop,
  propBottom,
  suspenderDisplay,
  hugoBossDisplay,
  flatCapDisplay,
  hugoBossDisplay1,
  santoniDisplay,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const suspenderStyle: CSSProperties = useMemo(() => {
    return {
      display: suspenderDisplay,
    };
  }, [suspenderDisplay]);

  const hugoBossStyle: CSSProperties = useMemo(() => {
    return {
      display: hugoBossDisplay,
    };
  }, [hugoBossDisplay]);

  const flatCapStyle: CSSProperties = useMemo(() => {
    return {
      display: flatCapDisplay,
    };
  }, [flatCapDisplay]);

  const hugoBoss1Style: CSSProperties = useMemo(() => {
    return {
      display: hugoBossDisplay1,
    };
  }, [hugoBossDisplay1]);

  const santoniStyle: CSSProperties = useMemo(() => {
    return {
      display: santoniDisplay,
    };
  }, [santoniDisplay]);

  return (
    <div className={styles.pointsParent} style={frameDiv1Style}>
      <div className={styles.points}>
        <div className={styles.pointFrame}>
          <div className={styles.suspenderText}>
            <div className={styles.suspenderPoint}>
              <div className={styles.point}>
                <div className={styles.ellipsePoint}>
                  <img
                    className={styles.pointIcon}
                    loading="lazy"
                    alt=""
                    src="/point@2x.png"
                  />
                </div>
                <button className={styles.text}>
                  <div className={styles.bg} />
                  <div className={styles.suspender} style={suspenderStyle}>
                    Suspender
                  </div>
                </button>
              </div>
            </div>
            <div className={styles.point1}>
              <div className={styles.ellipsePoint1}>
                <img
                  className={styles.pointIcon1}
                  loading="lazy"
                  alt=""
                  src="/point-1@2x.png"
                />
              </div>
              <button className={styles.text1}>
                <div className={styles.bg1} />
                <div className={styles.hugoBoss} style={hugoBossStyle}>
                  Hugo Boss
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.pointGroup}>
          <div className={styles.frameParent}>
            <div className={styles.pointWrapper}>
              <div className={styles.point2}>
                <img
                  className={styles.pointIcon2}
                  loading="lazy"
                  alt=""
                  src="/point-2.svg"
                />
                <div className={styles.textFrame}>
                  <button className={styles.text2}>
                    <div className={styles.bg2} />
                    <div className={styles.flatCap} style={flatCapStyle}>
                      Flat Cap
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.point3}>
              <img
                className={styles.pointIcon3}
                loading="lazy"
                alt=""
                src="/point-2.svg"
              />
              <div className={styles.textFrame1}>
                <button className={styles.text3}>
                  <div className={styles.bg3} />
                  <div className={styles.hugoBoss1} style={hugoBoss1Style}>
                    Hugo Boss
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.backgroundVector}>
            <div className={styles.point4}>
              <img
                className={styles.pointIcon4}
                loading="lazy"
                alt=""
                src="/point-2.svg"
              />
              <div className={styles.textWrapper}>
                <button className={styles.text4}>
                  <div className={styles.bg4} />
                  <div className={styles.santoni} style={santoniStyle}>
                    Santoni
                  </div>
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
  );
};

export default FrameComponent1;
