// import { useContext } from "react";
// import { AppContext } from "../context";
import { useGlobalContext } from "../context";

const Meals = () => {
  const { meals } = useGlobalContext();

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const {idMeal, strMeal: title, strMealThumb: image} = singleMeal;
        return <article className="single-meal" key={idMeal}>
          <img src = {image} className="img" alt="meal"/>
          <footer>
            <h5>{title}</h5>
            <button className="like-btn">Click me</button>
          </footer>
        </article>
      })}
    </section>
  );
}

export default Meals;