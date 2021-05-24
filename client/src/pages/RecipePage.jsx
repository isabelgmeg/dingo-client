import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { getRecipeById } from "../services/recipes";

import RecipeCard from "../components/RecipeCard/RecipeCard";
import NavBar from "../components/NavBar/NavBar"

import '../styles/recipe.scss'

export default function RecipePage() {
  const [recipe, setRecipe] = useState([]);

  const { recipeId } = useParams();

  useEffect(() => {
    getRecipeById(recipeId)
      .then((res) => {
        setRecipe(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeId]);


  return (
    <div className="recipePage">
      <NavBar/>
    <div className="recipePage_container">
      <RecipeCard
          recipeId={recipe.recipeId}
          recipeName={recipe.name}
          ingredientsInfo={recipe.ingredientsInfo}
          elabTime={recipe.elabTime}
          carbs={recipe.carbs}
          proteins={recipe.proteins}
          calories={recipe.calories}
          instructions={recipe.instructions}
          picture={recipe.picture}
      />
    </div>
    </div>
  );
}
