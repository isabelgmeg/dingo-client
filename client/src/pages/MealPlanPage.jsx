import { useEffect, useState } from "react";
import { addRecipeToUser } from "../services/users";
import { getRecipes } from "../services/recipes";

import { RECIPESMOCK } from "../constants/recipesMock";

import RecipeCard from "../components/RecipeCard/RecipeCard";

import "../styles/mealPlan.scss";

export default function MealPlanPage() {
  const [mealPlan, setMealPlan] = useState([]);

  const getMealPlan = () => {
    getRecipes()
      .then((res) => {
        setMealPlan(res.data);
        setMealPlan(RECIPESMOCK.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setMealPlan(RECIPESMOCK.data);
  }, []);

  return (
    <div className="mealPlanPage_container">
        <p className="mealPlanPage_container_text">
            Ready to generate a menu following your objectuves and intolerances?
        </p>
      <button
        className="mealPlanPage_container_button"
        type="submit" onClick={getMealPlan}
      >
        Generate Menu!🥕
      </button>
      <div className="mealPlanPage_container_cardsContainer">
        <ul className="recipeCard_ingredients_list">
          {mealPlan.map((recipe, _id) => (
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
                addRecipeToUser={addRecipeToUser(recipe.recipeId)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
