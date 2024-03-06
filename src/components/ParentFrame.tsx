import { FunctionComponent } from "react";
import styles from "./ParentFrame.module.css";

const ParentFrame: FunctionComponent = () => {
  return (
    <section className={styles.parentFrame}>
      <div className={styles.image2Parent}>
        <img
          className={styles.image2Icon}
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
        <div className={styles.subscribeCallout}>
          <div className={styles.subscribeTexts}>
            <h1 className={styles.subscribeToOur}>
              Subscribe To Our Newsletter
            </h1>
            <div className={styles.emailFieldContainer}>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin `}</div>
              <input
                className={styles.emailInputField}
                placeholder="michael@ymail.com"
                type="text"
              />
            </div>
            <div className={styles.buttonSubscribe}>
              <button className={styles.button}>
                <div className={styles.bg} />
                <div className={styles.subscribeNow}>Subscribe Now</div>
              </button>
            </div>
          </div>
        </div>
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-31@2x.png"
        />
      </div>
    </section>
  );
};

export default ParentFrame;
