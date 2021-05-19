import axios from "axios"

export async function getRecipes() {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/recipes/getMealPlan`, {
      withCredentials: true,
    });
    return res.data.data;
}

export async function getRecipeByIngredients(recipeId) {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/recipes/getRecipeByIngredients/${recipeId}`, {
    withCredentials: true,
  });
  return res.data.data;
}




