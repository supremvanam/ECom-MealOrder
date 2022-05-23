import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../context/cart-context";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item.totalAmount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.cartClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
