import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import "./RecipeCard.scss";

export default function RecipeCard({
  recipeId,
  recipeName,
  ingredientsInfo,
  elabTime,
  carbs,
  proteins,
  calories,
  instructions,
  picture,
  addRecipeToUser,
}) {
  return (
    <div className="recipeCard" key={recipeId}>
      <div className="recipeCard_info">
        <div className="recipeCard_nameSave">
          <span className="recipeCard_name">
            <p>{recipeName}</p>
          </span>
          <span className="recipeCard_save">
            <button
              className="recipeCard_save_button recipeCard_save_buttonSaved"
              //onClick={addRecipeToUser(recipeId)}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="recipeCard_save_button recipeCard_save_buttonSaved"
              />
            </button>
          </span>
        </div>
        <div className="recipeCard_details">
          <span className="recipeCard_details_calories">
            <p>{calories} Calories</p>
          </span>
          <span className="recipeCard_details_elabTime">
            <FontAwesomeIcon
              icon={faClock}
              className="recipeCard_details_elabTime"
            />
            <p>{elabTime} minutes</p>
          </span>
        </div>
      </div>
      <div className="recipeCard_picture">
        <Link to={`/recipe/${recipeId}`}>
          <img src={picture} alt={recipeName} />
        </Link>
      </div>
      <div className="recipeCard_carbsProteins">
        <span className="recipeCard_carbsProteins_carbs">{carbs} carbs</span>
        <span className="recipeCard_carbsProteins_proteins">
          {proteins} proteins
        </span>
      </div>
      <div className="recipeCard_ingredients">
        <ul className="recipeCard_ingredients_list">
          {ingredientsInfo !== undefined &&
            ingredientsInfo.map((ingredient, index) => (
              <li
                className="recipeCard_ingredients_list_ingredientInfo"
                key={index}
              >
                <Link
                  className="recipeCard_ingredients_list_ingredientInfo_link"
                  to={`/ingredients/${ingredient.ingredientId.name}`}
                >
                  {ingredient.ingredientId.name}
                </Link>
                <p>{ingredient.gramsPerIngredient} grams</p>
              </li>
            ))}
        </ul>
      </div>
      <div className="recipeCard_instructions">
      <p className="recipeCard_instructions_title">Instructions</p>
        <p className="recipeCard_instructions_text">{instructions}</p>
      </div>
    </div>
  );
}
