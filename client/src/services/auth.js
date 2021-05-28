import axios from "axios";
import { BASE_URL } from '../constants/index'

export async function postRegister(data) {

    const response = await axios.post(
      `${BASE_URL}/auth/register`,
      data,
      { withCredentials: true }
    );
    return response.data.data;
}

export async function postLogin(data) {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      data,
      { withCredentials: true }
    );
    return response.data.data;
  } 


export async function getShortProfile() {
    const response = await axios.get(
      `${BASE_URL}/auth/short-profile`,
      { withCredentials: true }
    );
    return response.data.data;
}

export async function getLogout() {
  const response = await axios.get(
    `${BASE_URL}/auth/logout`,
    { withCredentials: true }
  );
  return response.data.data;
}