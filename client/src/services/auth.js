import axios from "axios";

export async function postRegister(data) {

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      data,
      { withCredentials: true }
    );
    return response.data.data;
}

export async function postLogin(data) {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      data,
      { withCredentials: true }
    );
    return response.data.data;
  } 


export async function getShortProfile() {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/auth/short-profile`,
      { withCredentials: true }
    );
    return response.data.data;
}
