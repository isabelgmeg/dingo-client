import axios from 'axios'
import { BASE_URL } from '../constants/index'


export async function addRecipeToUser(recipeId) {
    const res = await axios.post(`${BASE_URL}/users/addRecipe/${recipeId}`, recipeId, {
      withCredentials: true,
    });
    console.log("resaddrecipe", res.data.data)
    return res.data.data;
}

export async function removeRecipeToUser(recipeId) {
  const res = await axios.put(`${BASE_URL}/users/removeRecipe/${recipeId}`, recipeId, {
    withCredentials: true,
  });
  return res.data.data;
}

export async function getUserFavs() {
  const res = await axios.get(`${BASE_URL}/users/savedRecipes`, {
    withCredentials: true,
  });
  return res.data.data;
}