import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal.js";

export default function Cart(props) {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          id: "z1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((cartItem) => {
        return <li key={cartItem.id}>{cartItem.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onHideHandler={props.onHideHandler}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$35.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideHandler}>
          Close
        </button>
        <button className={styles.button} onClick={props.onHideHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
}
