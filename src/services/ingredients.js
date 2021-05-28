import axios from 'axios'
import { BASE_URL } from '../constants/index'

export async function getIngredient(ingredientId) {
    const res = await axios.get(`${BASE_URL}/ingredients/get/${ingredientId}`, {
      withCredentials: true,
    });
    return res.data.data;
}