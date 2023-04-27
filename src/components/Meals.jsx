// import { useContext } from "react";
// import { AppContext } from "../context";
import { useGlobalContext } from "../context";

const Meals = () => {
  const { meals } = useGlobalContext();

  return (
    <section>
      {meals.map((singleMeal) => {
        console.log(singleMeal);

        return <h4>{singleMeal.strMeal}</h4>
      })}
    </section>
  );
}

export default Meals;