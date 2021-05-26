import axios from 'axios'

export async function addRecipeToUser(recipeId) {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/addRecipe/${recipeId}`, recipeId, {
      withCredentials: true,
    });
    console.log("resaddrecipe", res.data.data)
    return res.data.data;
}

export async function removeRecipeToUser(recipeId) {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/users/removeRecipe/${recipeId}`, recipeId, {
    withCredentials: true,
  });
  return res.data.data;
}

export async function getUserFavs() {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/savedRecipes`, {
    withCredentials: true,
  });
  return res.data.data;
}