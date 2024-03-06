import { FunctionComponent } from "react";
import TextFrame from "../components/TextFrame";
import Logos from "../components/Logos";
import LoremIpsumFrame from "../components/LoremIpsumFrame";
import FrameComponent from "../components/FrameComponent";
import FreeShippingLabel from "../components/FreeShippingLabel";
import FrameFollowInstagram from "../components/FrameFollowInstagram";
import FeatureIcons from "../components/FeatureIcons";
import ImageFrame from "../components/ImageFrame";
import Arrows from "../components/Arrows";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <section className={styles.imageContainer}>
        <TextFrame />
        <Logos />
      </section>
      <LoremIpsumFrame />
      <FrameComponent />
      <FreeShippingLabel />
      <FrameFollowInstagram />
      <div className={styles.instagramFollowFrame}>
        <h1 className={styles.followUsOn}>Follow Us On Instagram</h1>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin `}</div>
      </div>
      <div className={styles.imageContainerFrame}>
        <img className={styles.imageIcon} alt="" src="/image-5@2x.png" />
        <img className={styles.imageIcon1} alt="" src="/image-6@2x.png" />
        <img className={styles.imageIcon2} alt="" src="/image-7@2x.png" />
        <img className={styles.imageIcon3} alt="" src="/image-8@2x.png" />
        <img className={styles.imageIcon4} alt="" src="/image-9@2x.png" />
        <img className={styles.imageIcon5} alt="" src="/image-10@2x.png" />
        <img className={styles.imageIcon6} alt="" src="/image-11@2x.png" />
      </div>
      <FeatureIcons />
      <ImageFrame
        propAlignSelf="unset"
        propWidth="1440px"
        propPadding="0px var(--padding-xl) var(--padding-31xl)"
        subscribeNowDisplay="inline-block"
        image2="/image-21@2x.png"
        image3="/image-31@2x.png"
      />
      <div className={styles.sale}>SALE</div>
      <div className={styles.ultimate}>ULTIMATE</div>
      <Arrows />
      <div className={styles.number}>
        <img className={styles.bgIcon} alt="" src="/bg-2.svg" />
        <div className={styles.div}>05</div>
      </div>
    </div>
  );
};

export default Homepage;
