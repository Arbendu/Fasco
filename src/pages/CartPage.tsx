import { FunctionComponent } from "react";
import FascoTextFrame from "../components/FascoTextFrame";
import QuantityContainer from "../components/QuantityContainer";
import ImageFrame from "../components/ImageFrame";
import CopyrightText from "../components/CopyrightText";
import styles from "./CartPage.module.css";

const CartPage: FunctionComponent = () => {
  return (
    <div className={styles.cartPage}>
      <div className={styles.svg}>
        <img className={styles.frameVectorIcon} />
      </div>
      <main className={styles.homeSubframeParent}>
        <header className={styles.homeSubframe}>
          <FascoTextFrame />
        </header>
        <section className={styles.subtotalContainer}>
          <div className={styles.subtotalLabel}>
            <h2 className={styles.pageTitle}>Shopping Cart</h2>
            <div className={styles.productFrame}>
              <div className={styles.home}>Home</div>
              <div className={styles.productNameText}>
                <div className={styles.svg1}>
                  <img
                    className={styles.productColorText}
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
              <div className={styles.yourShoppingCart}>Your Shopping Cart</div>
            </div>
          </div>
          <QuantityContainer />
        </section>
        <ImageFrame
          image2={`https://d1xzdqg8s8ggsr.cloudfront.net/65e82184712c4086a81ac75d/9f38198c-2df4-4545-a817-7b202ee5f492_1709715779730516558?Expires=-62135596800&Signature=oZ1jafomNV5wNOZNwoM66GA5DdY2NucsMTW4n7ktiHW9815aMAZ1dPwKn2cCD4SXKxYWUDNBNDrtpzawIqxtvrt90ZvdeBigZ473SvyhlnGlIXeGZ2Y8W~YmcPhLybE~AvEY2hqkUX1bmqxWUzTNyKEW40zj-VBcbkmcLJ3Y5F1UkdhvwdwaZtFub05ZGm4l3Zz9VEDSUrXKG38ImD6z6gP67CYig5s~nPQyj56VU2-PTbCto5t7FWpRCGBXkh8mpAcN7ItH98I4Uk2GClmsTMdHcXL7kos0HPh2RhPtQLu0Z1Ts2neYAEpddjOjg1MIX8TTartNG2NnZuq8GvWxFw__&Key-Pair-Id=K1P54FZWCHCL6J`}
          image3={`https://d1xzdqg8s8ggsr.cloudfront.net/65e82184712c4086a81ac75d/9f44338c-78df-4072-b42a-06970d05ac0b_1709715786884092268?Expires=-62135596800&Signature=DxkLITCCrodqbZv7BGDWTDEluQUZXJOAkSsyR1fyyqnS6dd4~oKLYS4kbvUY7ICRoNcNsPusLWqqEnVbVORKoJvF49HtqliN1QywxaW-eHWIGNeUkV57Vp-gLC3tMbIMmerBXN5W-Hb1MKxvWO8oScyhWnugKDYOXRypv-3NLpmj5OcCWl7tBIgL80-w9sX3Yfq3GlqBHq748sLgpfPL2-KFscn04Zl639q-6rqZSZ7X5sfAthxufDSBGuxeV3dN8SJDbGfFPDwJNPhXeEgnIuClHEIxWV5b3WAKU~Ch2Kq4zwk8YoByPsC4~aSbRCz-WZ4QJrBgJhN5jlgB7K56AA__&Key-Pair-Id=K1P54FZWCHCL6J`}
        />
      </main>
      <CopyrightText />
    </div>
  );
};

export default CartPage;
