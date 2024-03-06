import { FunctionComponent } from "react";
import styles from "./FeatureIcons.module.css";

const FeatureIcons: FunctionComponent = () => {
  return (
    <section className={styles.featureIcons}>
      <div className={styles.testimonials}>
        <div className={styles.bg} />
        <div className={styles.featureIcons1}>
          <h1 className={styles.thisIsWhat}>This Is What Our Customers Say</h1>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </div>
        </div>
        <div className={styles.cardFrame}>
          <div className={styles.card}>
            <div className={styles.bg1} />
            <div className={styles.image}>
              <div className={styles.quoteText}>
                <div className={styles.bg2} />
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image-12@2x.png"
                />
              </div>
            </div>
            <div className={styles.textFrame}>
              <div className={styles.itemsThatI}>
                “Items That I ordered were the best investment I ever made. I
                can't say enough about your quality service."
              </div>
              <div className={styles.starsFrame}>
                <img className={styles.starsIcon} alt="" src="/stars-6.svg" />
                <div className={styles.nameFrame}>
                  <div className={styles.separator} />
                  <div className={styles.starRating}>
                    <div className={styles.suzanB}>Suzan B.</div>
                    <div className={styles.uiDesigner}>UI Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.bg3} />
            <div className={styles.image1}>
              <div className={styles.backgroundImage}>
                <div className={styles.bg4} />
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image-13@2x.png"
                />
              </div>
            </div>
            <div className={styles.customerReview}>
              <div className={styles.justWhatI}>
                “Just what I was looking for. Thank you for making it painless,
                pleasant and most of all hassle free! All products are great.”
              </div>
              <img className={styles.starsIcon1} alt="" src="/stars-7.svg" />
              <div className={styles.text}>
                <div className={styles.separator1} />
                <h3 className={styles.megenW}>Megen W.</h3>
                <div className={styles.uiDesigner1}>UI Designer</div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.bg5} />
              <div className={styles.image2}>
                <div className={styles.quoteText1}>
                  <div className={styles.bg6} />
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/image-14@2x.png"
                  />
                </div>
              </div>
              <div className={styles.text1}>
                <div className={styles.youWontRegret}>
                  "You won't regret it. I would like to personally thank you for
                  your outstanding product. Absolutely wonderful!"
                </div>
                <div className={styles.customerName}>
                  <img className={styles.starsIcon2} alt="" src="/stars.svg" />
                  <div className={styles.customerName1}>
                    <div className={styles.separator2} />
                    <h1 className={styles.jamesK}>James K.</h1>
                    <div className={styles.traveler}>Traveler</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapperArrows}>
          <img className={styles.arrowsIcon} alt="" src="/arrows.svg" />
        </div>
      </div>
    </section>
  );
};

export default FeatureIcons;
