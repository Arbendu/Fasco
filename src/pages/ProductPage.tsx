import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameGroup from "../components/FrameGroup";
import FrameComponent1 from "../components/FrameComponent1";
import ParentFrame from "../components/ParentFrame";
import SubscribeToNewsletter from "../components/SubscribeToNewsletter";
import styles from "./ProductPage.module.css";

const ProductPage: FunctionComponent = () => {
  return (
    <div className={styles.productPage}>
      <section className={styles.frameGroup}>
        <FrameComponent3 />
        <FrameComponent2 />
      </section>
      <FrameGroup />
      <FrameComponent1 />
      <ParentFrame />
      <SubscribeToNewsletter />
    </div>
  );
};

export default ProductPage;
