import { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Meals</h1>
        <HeaderCartButton cartClickHandler={props.cartClickHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
}
