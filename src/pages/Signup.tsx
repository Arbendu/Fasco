import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import styles from "./Signup.module.css";

const Signup: FunctionComponent = () => {
  return (
    <div className={styles.signup}>
      <main className={styles.signup1}>
        <img
          className={styles.signupChild}
          loading="lazy"
          alt=""
          src="/rectangle-19280@2x.png"
        />
        <div className={styles.signupInner}>
          <FrameComponent5 />
        </div>
      </main>
    </div>
  );
};

export default Signup;
