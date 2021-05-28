import axios from "axios"
import { BASE_URL } from '../constants/index'


export async function getRecipes() {
    const res = await axios.get(`${BASE_URL}/recipes/getMealPlan`, {
      withCredentials: true,
    });
    return res.data.data;
}

export async function getRecipeByIngredients(ingredientId) {
  const res = await axios.get(`${BASE_URL}/recipes/getRecipeByIngredients/${ingredientId}`, {
    withCredentials: true,
  });
  return res.data.data;
}


export async function getRecipeById(recipeId) {
  const res = await axios.get(`${BASE_URL}/recipes/getRecipeById/${recipeId}`, {
    withCredentials: true,
  });
  return res.data.data;
}

export async function getRecipeIdByName(recipeName) {
  const res = await axios.get(`${BASE_URL}/recipes/get/${recipeName}`, {
    withCredentials: true,
  });
  return res.data.data;
}


export async function getRecipesOptionB() {
  const res = await axios.get(`${BASE_URL}/recipes/getMealPlanOptionB`, {
    withCredentials: true,
  });
  return res.data.data;
}