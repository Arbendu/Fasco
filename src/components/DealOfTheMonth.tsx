import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DealOfTheMonth.module.css";

export type DealOfTheMonthType = {
  peopleAlsoLoved?: string;
  image?: string;
  arrows?: string;
  image1?: string;
  vector1?: string;
  image2?: string;
  active?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propMarginTop?: CSSProperties["marginTop"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propFlex?: CSSProperties["flex"];
  propTop?: CSSProperties["top"];
  propPadding?: CSSProperties["padding"];
  propMinHeight?: CSSProperties["minHeight"];
  propHeight?: CSSProperties["height"];
  propTextAlign?: CSSProperties["textAlign"];
  propHeight1?: CSSProperties["height"];
  buyNowDisplay?: CSSProperties["display"];
};

const DealOfTheMonth: FunctionComponent<DealOfTheMonthType> = ({
  peopleAlsoLoved,
  propAlignSelf,
  propMarginTop,
  propMarginLeft,
  propFlex,
  propTop,
  propPadding,
  propMinHeight,
  propHeight,
  propTextAlign,
  propHeight1,
  image,
  arrows,
  image1,
  vector1,
  image2,
  active,
  buyNowDisplay,
}) => {
  const dealOfTheMonthStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      marginTop: propMarginTop,
      marginLeft: propMarginLeft,
      flex: propFlex,
    };
  }, [propAlignSelf, propMarginTop, propMarginLeft, propFlex]);

  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      minHeight: propMinHeight,
    };
  }, [propPadding, propMinHeight]);

  const bGStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const peopleAlsoLovedStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      height: propHeight1,
    };
  }, [propTextAlign, propHeight1]);

  const buyNow1Style: CSSProperties = useMemo(() => {
    return {
      display: buyNowDisplay,
    };
  }, [buyNowDisplay]);

  return (
    <div className={styles.dealOfTheMonth} style={dealOfTheMonthStyle}>
      <div className={styles.imageParent}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src={image}
          style={imageIconStyle}
        />
        <div className={styles.bgParent} style={frameDivStyle}>
          <div className={styles.bg} style={bGStyle} />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.peopleAlsoLovedParent}>
                <h1
                  className={styles.peopleAlsoLoved}
                  style={peopleAlsoLovedStyle}
                >
                  {peopleAlsoLoved}
                </h1>
                <div
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin `}</div>
              </div>
              <button className={styles.button}>
                <div className={styles.bg1} />
                <div className={styles.buyNow} style={buyNow1Style}>
                  Buy Now
                </div>
              </button>
            </div>
            <div className={styles.hurryBeforeItsTooLateParent}>
              <h2 className={styles.hurryBeforeIts}>
                Hurry, Before It’s Too Late!
              </h2>
              <div className={styles.timer}>
                <div className={styles.days}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.div}>02</div>
                  </div>
                  <h3 className={styles.days1}>Days</h3>
                </div>
                <div className={styles.hr}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.div1}>06</div>
                  </div>
                  <h3 className={styles.hr1}>Hr</h3>
                </div>
                <div className={styles.mins}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <div className={styles.div2}>05</div>
                  </div>
                  <div className={styles.minsWrapper}>
                    <h3 className={styles.mins1}>Mins</h3>
                  </div>
                </div>
                <div className={styles.sec}>
                  <div className={styles.groupDiv}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.div3}>30</div>
                  </div>
                  <h3 className={styles.sec1}>Sec</h3>
                </div>
              </div>
            </div>
            <div className={styles.wrapperArrowsWrapper}>
              <div className={styles.wrapperArrows}>
                <img
                  className={styles.arrowsIcon}
                  loading="lazy"
                  alt=""
                  src={arrows}
                />
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img className={styles.imageIcon1} alt="" src={image1} />
            <div className={styles.text}>
              <div className={styles.bg2} />
              <div className={styles.vectorArrow}>
                <div className={styles.div4}>01</div>
                <img
                  className={styles.vectorArrowChild}
                  loading="lazy"
                  alt=""
                  src={vector1}
                />
                <div className={styles.springSale}>Spring Sale</div>
              </div>
              <div className={styles.off}>30% OFF</div>
            </div>
          </div>
          <div className={styles.ellipseFrame}>
            <img
              className={styles.imageIcon2}
              loading="lazy"
              alt=""
              src={image2}
            />
            <div className={styles.separatorLine}>
              <img
                className={styles.activeIcon}
                loading="lazy"
                alt=""
                src={active}
              />
              <div className={styles.separatorLineChild} />
              <div className={styles.separatorLineItem} />
              <div className={styles.separatorLineInner} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheMonth;
