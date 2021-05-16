import axios from 'axios'

export async function addRecipeToUser(recipeId) {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/addRecipe/${recipeId}`, recipeId, {
      withCredentials: true,
    });
    return res.data.data;
}