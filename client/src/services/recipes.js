import axios from "axios"

export async function getRecipes(id) {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/recipes/getMealPlan`, id, {
      withCredentials: true,
    });
    return res.data.data;
}

