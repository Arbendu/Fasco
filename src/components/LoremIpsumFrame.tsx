import { FunctionComponent } from "react";
import DealOfTheMonth from "./DealOfTheMonth";
import styles from "./LoremIpsumFrame.module.css";

const LoremIpsumFrame: FunctionComponent = () => {
  return (
    <section className={styles.loremIpsumFrame}>
      <DealOfTheMonth
        peopleAlsoLoved="Deals Of The Month"
        propAlignSelf="unset"
        propMarginTop="unset"
        propMarginLeft="162px"
        propFlex="1"
        propTop="55px"
        propPadding="var(--padding-36xl) var(--padding-215xl) var(--padding-36xl) var(--padding-301xl)"
        propMinHeight="782px"
        propHeight="782px"
        propTextAlign="left"
        propHeight1="59px"
        image="/image-1@2x.png"
        arrows="/arrows.svg"
        image1="/image-2@2x.png"
        vector1="/image-testimonials.svg"
        image2="/image-3@2x.png"
        active="/active.svg"
        buyNowDisplay="inline-block"
      />
    </section>
  );
};

export default LoremIpsumFrame;
