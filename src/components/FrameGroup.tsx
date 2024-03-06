import { FunctionComponent } from "react";
import Features from "./Features";
import DealOfTheMonth from "./DealOfTheMonth";
import styles from "./FrameGroup.module.css";

const FrameGroup: FunctionComponent = () => {
  return (
    <section className={styles.frameGroup}>
      <Features />
      <DealOfTheMonth
        peopleAlsoLoved="People Also Loved"
        image="/image-1@2x.png"
        arrows="/arrows.svg"
        image1="/image-2@2x.png"
        vector1="/image-testimonials.svg"
        image2="/image-3@2x.png"
        active="/active.svg"
      />
    </section>
  );
};

export default FrameGroup;
