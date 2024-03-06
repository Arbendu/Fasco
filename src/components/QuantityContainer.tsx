import { FunctionComponent } from "react";
import styles from "./QuantityContainer.module.css";

const QuantityContainer: FunctionComponent = () => {
  return (
    <div className={styles.quantityContainer}>
      <div className={styles.decreaseIncreaseFrame}>
        <div className={styles.subtotal}>Product</div>
        <div className={styles.subtotal1}>Price</div>
        <div className={styles.subtotal2}>Quantity</div>
        <div className={styles.subtotal3}>Total</div>
      </div>
      <div className={styles.seperator} />
      <div className={styles.checkoutButtonFrame}>
        <div className={styles.carttitle}>
          <div className={styles.productimage}>
            <img className={styles.productImageIcon} loading="lazy" alt="" />
            <div className={styles.productname}>
              <div className={styles.subtotal4}>
                <div className={styles.subtotalText}>
                  <div className={styles.productName}>
                    Mini dress with ruffled straps
                  </div>
                  <div className={styles.subtotal5}>$14.90</div>
                </div>
                <div className={styles.productColor}>Color : Red</div>
              </div>
              <div className={styles.remove}>Remove</div>
            </div>
          </div>
        </div>
        <div className={styles.quantity}>
          <div className={styles.bg} />
          <div className={styles.decrease}>-</div>
          <div className={styles.amount}>01</div>
          <div className={styles.increase}>+</div>
        </div>
        <div className={styles.subscribeFormFrame}>
          <div className={styles.subtotal6}>$14.90</div>
        </div>
      </div>
      <div className={styles.checkoutbutton}>
        <div className={styles.seperator1} />
        <div className={styles.cartsubtotal}>
          <div className={styles.pricesummary}>
            <div className={styles.pricesummary1} />
            <div className={styles.pageTitle}>
              <span>{`For `}</span>
              <span className={styles.span}>$10.00</span>
              <span> please wrap the product</span>
            </div>
          </div>
          <div className={styles.cartTitle}>
            <div className={styles.cartTitleChild} />
          </div>
          <div className={styles.priceItem}>
            <div className={styles.subtotal7}>Subtotal</div>
            <div className={styles.price}>$100.00</div>
          </div>
          <button className={styles.button}>
            <div className={styles.bg1} />
            <div className={styles.checkout}>Checkout</div>
          </button>
          <div className={styles.removeButton}>
            <div className={styles.viewCart}>View Cart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityContainer;
