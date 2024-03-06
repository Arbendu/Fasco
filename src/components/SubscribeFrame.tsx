import { FunctionComponent } from "react";
import styles from "./SubscribeFrame.module.css";

const SubscribeFrame: FunctionComponent = () => {
  return (
    <section className={styles.subscribeFrame}>
      <img className={styles.image2Icon} loading="lazy" alt="" />
      <div className={styles.imageSubscribeForm}>
        <div className={styles.copyrightTextFrame}>
          <div className={styles.homeShopProductsPage}>
            <h1 className={styles.subscribeToOur}>
              Subscribe To Our Newsletter
            </h1>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin `}</div>
          </div>
          <input
            className={styles.emailInputField}
            placeholder="michael@ymail.com"
            type="text"
          />
          <div className={styles.buttonFrame}>
            <button className={styles.button}>
              <div className={styles.bg} />
              <div className={styles.subscribeNow}>Subscribe Now</div>
            </button>
          </div>
        </div>
      </div>
      <img className={styles.image3Icon} loading="lazy" alt="" />
    </section>
  );
};

export default SubscribeFrame;
