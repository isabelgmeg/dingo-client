import axios from "axios";

export async function postRegister(data) {

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      data,
      { withCredentials: true }
    );
    return response.data.data;
  } catch (error) {
    console.log(error)
    return null;
  }
}

export async function postLogin(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      data,
      { withCredentials: true }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getShortProfile() {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/auth/short-profile`,
      { withCredentials: true }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
