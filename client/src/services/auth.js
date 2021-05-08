import axios from "axios";

export async function postRegister(body) {
    console.log(process.env.REACT_APP_API_URL)
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, body, {
    withCredentials: true,
  });

  return res.data.data;
}
