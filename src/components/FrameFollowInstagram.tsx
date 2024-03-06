import { FunctionComponent } from "react";
import Features from "./Features";
import styles from "./FrameFollowInstagram.module.css";

const FrameFollowInstagram: FunctionComponent = () => {
  return (
    <section className={styles.frameFollowInstagram}>
      <Features propWidth="unset" propFlex="1" />
    </section>
  );
};

export default FrameFollowInstagram;
