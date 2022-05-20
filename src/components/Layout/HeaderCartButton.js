import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

export default function HeaderCartButton(props) {
  return (
    <button className={styles.button} onClick={props.cartClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{2 + 1}</span>
    </button>
  );
}
