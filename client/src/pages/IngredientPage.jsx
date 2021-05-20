import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getRecipeByIngredients } from "../services/recipes";
import { getIngredient } from "../services/ingredients";

import IngredientCard from "../components/IngredientCard/IngredientCard";
import MiniCard from "../components/MiniCard/MiniCard";

import "../styles/ingredient.scss";

export default function IngredientPage() {
  const [ingredient, setIngredient] = useState([]);
  const [recipesByIngredient, setrecipesByIngredient] = useState(null);

  const { ingredientId } = useParams();

  useEffect(() => {
    console.log("tosearch ", ingredientId);
    getIngredient(ingredientId)
      .then((res) => {
        setIngredient(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getRecipes = () => {
    getRecipeByIngredients(ingredientId)
      .then((res) => {
        setrecipesByIngredient(res);
        console.log(recipesByIngredient);
        console.log(recipesByIngredient[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ingredientPage_container">
      <IngredientCard
        ingredientName={ingredient.name}
        ingredientId={ingredient._id}
        calories={ingredient.calsPer100grams}
        carbs={ingredient.carbsPer100grams}
        proteins={ingredient.proteinsPer100grams}
        fat={ingredient.fatPer100grams}
        intolerances={ingredient.intolerances}
        picture={ingredient.picture}
      />
      <p className="ingredientPage_container_text">
        Do you want to search for recipes with this ingredient?
      </p>
      <button
        className="ingredientPage_container_button"
        type="submit"
        onClick={getRecipes}
      >Search 🚀</button>
      <div className="ingredientPage_container_recipes">
        <ul className="ingredientPage_container_recipes_item">
          {recipesByIngredient !== null &&
            recipesByIngredient.map((recipe, index) => (
              <li key={index}>
                <MiniCard
                  recipeId={recipe._id}
                  recipeName={recipe.name}
                  elabTime={recipe.elabTime}
                  calories={recipe.calories}
                  picture={recipe.picture}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
