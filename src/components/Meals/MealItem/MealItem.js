import React from "react";
import styles from "./MealItem.module.css";

export default function MealItem(props) {
  const price = `$${props.mealPrice.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <div className={styles.description}>{props.mealDesc}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div></div>
    </li>
  );
}
