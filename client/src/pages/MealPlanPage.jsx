import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { getRecipes } from "../services/recipes";

import RecipeCard from "../components/RecipeCard/RecipeCard";

import "../styles/mealPlan.scss";

export default function MealPlanPage() {
  const { userBiometrics } = useContext(UserContext);

  const [mealPlan, setMealPlan] = useState([]);

  const getMealPlan = () => {
    getRecipes()
      .then((res) => {
        setMealPlan(res);
        console.log(res)
        console.log(userBiometrics)

      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="mealPlanPage_container">
      <p className="mealPlanPage_container_text">
        Ready to generate a menu following your objectuves and intolerances?
      </p>
      <button
        className="mealPlanPage_container_button"
        type="submit"
        onClick={getMealPlan}
      >
        Generate Menu!🥕
      </button>
      <div className="mealPlanPage_container_cardsContainer">
        <ul className="recipeCard_ingredients_list">
          {mealPlan !== undefined &&
            mealPlan.map((recipe, _id) => (
              <li key={recipe._id}>
                <RecipeCard
                  recipeId={recipe._id}
                  recipeName={recipe.name}
                  ingredientsInfo={recipe.ingredientsInfo}
                  elabTime={recipe.elabTime}
                  carbs={recipe.carbs}
                  proteins={recipe.proteins}
                  calories={recipe.calories}
                  instructions={recipe.instructions}
                  picture={recipe.picture}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
