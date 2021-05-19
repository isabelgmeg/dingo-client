import axios from 'axios'

export async function getIngredient(ingredientId) {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/ingredients/get/${ingredientId}`, {
      withCredentials: true,
    });
    return res.data.data;
}