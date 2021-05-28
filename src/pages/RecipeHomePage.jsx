import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { getRecipeIdByName } from "../services/recipes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/NavBar/NavBar";

import "../styles/recipeHomePage.scss";

export default function RecipeHomePage() {
  const history = useHistory();

  const [recipeId, setRecipeId] = useState("");
  const [recipeName, setRecipeName] = useState("");

  const handleChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleClick = async () => {
    await getRecipeIdByName(recipeName)
      .then((res) => {
        setRecipeId(res._id);
        if (recipeId !== "") {
          history.push(`/recipe/${recipeId}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="recipeHome">
      <NavBar />
      <div className="recipeHome_searchbox">
        <input
          className="recipeHome_searchbox_input"
          value={recipeName}
          onChange={handleChange}
          placeholder="Search a recipe"
          type="text"
        ></input>
        <FontAwesomeIcon
          icon={faSearch}
          className="recipeHome_searchbox_icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
