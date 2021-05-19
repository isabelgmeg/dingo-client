import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getRecipeByIngredients } from "../services/recipes";
import { getIngredient } from "../services/ingredients";

import IngredientCard from "../components/IngredientCard/IngredientCard";

export default function IngredientPage() {
  const [ingredient, setIngredient] = useState([]);
  const [recipesByIngredient, setrecipesByIngredient] = useState({});

  const { ingredientId } = useParams();

  // getRecipeByIngredients(ingredientId)

  useEffect(() => {
    console.log("tosearch ", ingredientId);
    getIngredient(ingredientId).then(
      (res) => {
        setIngredient(res).catch((err) => {
          console.log(err);
        });
      },
      [ingredientId]
    );

    getRecipeByIngredients(ingredientId)
      .then((res) => {
        setrecipesByIngredient(res);
        console.log(recipesByIngredient);
      })
      .cath((err) => {
        console.log(err);
      });
  });

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
        Ready to generate a menu following your objectuves and intolerances?
      </p>
      <button
        className="mealPlanPage_container_button"
        type="submit"
        onClick={getRecipeByIngredients}
      ></button>
      {recipesByIngredient !== undefined &&
        recipesByIngredient.map((recipe, _id) => (
          <li key={recipe._id}>
            <MiniCard
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
    </div>
  );
}
