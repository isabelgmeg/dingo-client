import axios from "axios";

export async function postRegister(body) {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, body, {
    withCredentials: true,
  });
  return res.data.data;
}

export async function postLogin(body){
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, body, {
    withCredentials: true,
  });
  //console.log(res.data.data)
  return res.data
}
