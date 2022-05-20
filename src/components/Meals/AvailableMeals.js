import React from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        mealName={meal.name}
        mealDesc={meal.description}
        mealPrice={meal.price}
      ></MealItem>
    );
  });
  return (
    <section className={styles.meals}>
      <ul>
        <Card>{mealsList}</Card>
      </ul>
    </section>
  );
}
