import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className={styles.fascoParent}>
      <div className={styles.fasco}>FASCO</div>
      <div className={styles.googleEmailFrameParent}>
        <div className={styles.googleEmailFrame}>
          <h2 className={styles.createAccount}>Create Account</h2>
          <div className={styles.signupWithEmail}>
            <button className={styles.oRFrame}>
              <div className={styles.oRFrameChild} />
              <img
                className={styles.image939Icon}
                alt=""
                src="/image-939@2x.png"
              />
              <div className={styles.signUpWith}>Sign up with Google</div>
            </button>
            <button className={styles.oRFrame1}>
              <div className={styles.oRFrameItem} />
              <img
                className={styles.image940Icon}
                alt=""
                src="/image-940@2x.png"
              />
              <div className={styles.signUpWith1}>Sign up with Email</div>
            </button>
          </div>
        </div>
        <div className={styles.emailAddressInput}>
          <div className={styles.passwordInput}>
            <div className={styles.createAccountButton} />
            <h2 className={styles.or}>OR</h2>
            <div className={styles.createAccountButton1} />
          </div>
        </div>
        <form className={styles.firstNameLineParent}>
          <div className={styles.firstNameLine}>
            <div className={styles.emailAddressLine}>
              <div className={styles.passwordLine}>
                <input
                  className={styles.firstName}
                  placeholder="First Name"
                  type="text"
                />
                <div className={styles.firstLastNameInput} />
              </div>
              <div className={styles.emailPhoneInput}>
                <input
                  className={styles.emailAddress}
                  placeholder="Email Address"
                  type="text"
                />
                <div className={styles.createAccountBtn} />
              </div>
              <div className={styles.loginBtn}>
                <input
                  className={styles.password}
                  placeholder="Password"
                  type="text"
                />
                <div className={styles.signupWithGoogle} />
              </div>
            </div>
            <div className={styles.emailAddressLine1}>
              <div className={styles.lastNameParent}>
                <input
                  className={styles.lastName}
                  placeholder="Last Name "
                  type="text"
                />
                <div className={styles.frameChild} />
              </div>
              <div className={styles.phoneNumberParent}>
                <input
                  className={styles.phoneNumber}
                  placeholder="Phone Number"
                  type="text"
                />
                <div className={styles.frameItem} />
              </div>
              <div className={styles.confirmPasswordParent}>
                <input
                  className={styles.confirmPassword}
                  placeholder="Confirm Password"
                  type="text"
                />
                <div className={styles.frameInner} />
              </div>
            </div>
          </div>
          <div className={styles.signupWithEmail1}>
            <div className={styles.formContainer}>
              <button className={styles.signupText}>
                <div className={styles.signupTextChild} />
                <div className={styles.createAccount1}>Create Account</div>
              </button>
              <div className={styles.firstNameLine1}>
                <div className={styles.alreadyHaveAnContainer}>
                  <span
                    className={styles.alreadyHaveAn}
                  >{`Already have an account? `}</span>
                  <span className={styles.login}>Login</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.passwordLine1}>
        <div className={styles.fascoTerms}>{`FASCO Terms & Codnitions`}</div>
      </div>
    </div>
  );
};

export default FrameComponent5;
