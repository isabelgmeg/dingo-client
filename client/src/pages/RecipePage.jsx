import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/User";
import { useParams } from "react-router";

import { getRecipeById } from "../services/recipes";
import { check } from "../services/utils";


import RecipeCard from "../components/RecipeCard/RecipeCard";
import NavBar from "../components/NavBar/NavBar"

import '../styles/recipe.scss'

export default function RecipePage() {
  const [recipe, setRecipe] = useState([]);
  const { userFavs, getFavsUser } = useContext(UserContext);
  const [saved, setSaved] = useState([]);

  const { recipeId } = useParams();

  useEffect(() => {
    getFavsUser()
    if(userFavs !=null && userFavs.length !==0  ){
      const favsArray= userFavs.map((recipe) => recipe._id);
      setSaved(favsArray)
    }
    getRecipeById(recipeId)
      .then((res) => {
        setRecipe(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [recipeId]);

  useEffect(()=> {

  },[])


  return (
    <div className="recipePage">
      <NavBar/>
    <div className="recipePage_container">
      <RecipeCard
          recipeId={recipeId}
          recipeName={recipe.name}
          ingredientsInfo={recipe.ingredientsInfo}
          elabTime={recipe.elabTime}
          carbs={recipe.carbs}
          proteins={recipe.proteins}
          calories={recipe.calories}
          instructions={recipe.instructions}
          picture={recipe.picture}
          saved={check(recipeId, saved)}
      />
    </div>
    </div>
  );
}
