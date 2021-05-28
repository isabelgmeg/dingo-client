import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { getRecipes } from "../services/recipes";
import { getTotalCalories, getTotalElabTime } from "../services/utils";

import NavBar from "../components/NavBar/NavBar";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import "../styles/mealPlan.scss";

export default function MealPlanPage() {
  const { userBiometrics } = useContext(UserContext);

  const [mealPlan, setMealPlan] = useState(null);
  const [timeAffinity, setTimeAffinity] = useState(null);
  const [calsAffinity, setCalsAffinity] = useState(null);
  const [error, setError] = useState(null);

  const getMealPlan = () => {
    getRecipes()
      .then((res) => {
        console.log(res);
        if (res.length === 0) {
          setError("We have found no meal plan that matches your requirements");
        } else {
          setMealPlan(res);
          setTimeAffinity(getTotalElabTime(res));
          setCalsAffinity(getTotalCalories(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mealPlanPage">
      <NavBar />
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
        {error ? <p className="mealPlanPage_container_error">{error}</p> : null}
        <div className="mealPlanPage_container_affinity">
          {mealPlan && userBiometrics && timeAffinity && calsAffinity ? (
            <p>
              We have found a meal plan for you, which has {calsAffinity}cals
              for your objective of {userBiometrics.basalMetabolicRate}cals per
              day and takes {timeAffinity} minutes to cook following your
              {userBiometrics.elabTimePerDay} minutes that you wanted ✌️🔥
            </p>
          ) : null}
        </div>
        <div className="mealPlanPage_container_cardsContainer">
          <ul className="recipeCard_ingredients_list">
            {mealPlan !== null &&
              mealPlan.map((recipe) => (
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
    </div>
  );
}
