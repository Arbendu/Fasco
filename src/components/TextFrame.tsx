import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TextFrame.module.css";

const TextFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/shop-page");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/cart-page");
  }, [navigate]);

  return (
    <div className={styles.textFrame}>
      <div className={styles.buttonFrame}>
        <div className={styles.frameParent}>
          <header className={styles.fascoParent}>
            <h1 className={styles.fasco}>FASCO</h1>
            <div className={styles.frameGroup}>
              <div className={styles.homeWrapper}>
                <a className={styles.home}>Home</a>
              </div>
              <div className={styles.dealsWrapper}>
                <a className={styles.deals}>Deals</a>
              </div>
              <div className={styles.newArrivalsWrapper}>
                <a className={styles.newArrivals}>New Arrivals</a>
              </div>
              <div className={styles.packagesWrapper}>
                <a className={styles.packages}>Packages</a>
              </div>
              <div className={styles.signInWrapper}>
                <a className={styles.signIn}>Sign in</a>
              </div>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.bg} />
                <div className={styles.signUp}>Sign Up</div>
              </button>
            </div>
          </header>
          <div className={styles.reviewTextFrame}>
            <div className={styles.image}>
              <div className={styles.bg1} />
              <div className={styles.reviewProfileImageFrame}>
                <div className={styles.images}>
                  <img
                    className={styles.colorIcon}
                    alt=""
                    src="/color@2x.png"
                  />
                  <img className={styles.bwIcon} alt="" src="/bw@2x.png" />
                </div>
                <img
                  className={styles.image228}
                  loading="lazy"
                  alt=""
                  src="/image-2-28@2x.png"
                />
              </div>
            </div>
            <div className={styles.footerLogoFrame}>
              <div className={styles.images1}>
                <div className={styles.bg2} />
                <div className={styles.images2}>
                  <img
                    className={styles.imageIcon}
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className={styles.image1} />
                </div>
              </div>
              <div className={styles.textParent}>
                <div className={styles.text}>
                  <h1 className={styles.ultimate}>ULTIMATE</h1>
                </div>
                <h1 className={styles.sale}>SALE</h1>
                <div className={styles.image2}>
                  <div className={styles.textGroup}>
                    <div className={styles.text1}>
                      <div className={styles.newCollection}>NEW COLLECTION</div>
                    </div>
                    <button className={styles.button1} onClick={onButton1Click}>
                      <div className={styles.bg3} />
                      <div className={styles.shopNow}>SHOP NOW</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.images3}>
                <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
                <div className={styles.image3} />
              </div>
            </div>
            <div className={styles.images4}>
              <div className={styles.bg4} />
              <div className={styles.imagesParent}>
                <div className={styles.images5}>
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/image@2x.png"
                  />
                  <img
                    className={styles.imageIcon3}
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <img
                  className={styles.image227Icon}
                  loading="lazy"
                  alt=""
                  src="/image-227@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text2}>
          <button className={styles.icon} onClick={onIconClick} />
          <button className={styles.scroll}>
            <div className={styles.bg5} />
            <img
              className={styles.imageCollectionIcon}
              alt=""
              src="/image-collection.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextFrame;
