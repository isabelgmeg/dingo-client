import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/User";
import { getUserFavs } from "../../services/users";

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
}) {
  const { deleteFav, addFav } = useContext(UserContext);
  const [isRecipeSaved, setIsRecipeSaved] = useState(null);
  const [classNameButton, setClassNameButton] = useState("");

  const addFavButton = (id) => {
    addFav(id)
      .then(() => {
        console.log("added", id);
        setIsRecipeSaved(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFavButton = (id) => {
    deleteFav(id)
      .then(() => {
        console.log("deleted", id);
        setIsRecipeSaved(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const check = async (id, array) => {
    if (array && array.includes(id) === true) {
      setIsRecipeSaved(true);
      console.log("includes", id);
      setClassNameButton("recipeCard_save_buttonSaved");
    } else {
      console.log("not includes", id);
      setClassNameButton("recipeCard_save_button");
      setIsRecipeSaved(false);
    }
  };

  useEffect(() => {
    getUserFavs().then((res) => {
      const favsArray = res.map((recipe) => recipe._id);
      check(recipeId, favsArray);
    });
  }, [isRecipeSaved]);

  return (
    <div className="recipeCard" key={recipeId}>
      <div className="recipeCard_info">
        <div className="recipeCard_nameSave">
          <span className="recipeCard_name">
            <p>{recipeName}</p>
          </span>
          <span className="recipeCard_save">
            <button
              className={classNameButton}
              onClick={() =>
                isRecipeSaved
                  ? deleteFavButton(recipeId)
                  : addFavButton(recipeId)
              }
            >
              <FontAwesomeIcon icon={faHeart} className={classNameButton} />
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
                  to={`/ingredients/${ingredient.ingredientId._id}`}
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
