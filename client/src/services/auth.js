import axios from "axios";
import { useState } from "react";

export async function PostRegister(data) {

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/register`,
      data,
      { withCredentials: true }
    );
    return response.data.data;
  } catch (error) {
    return error;
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

export async function getShortProfile(data) {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/short-profile`,
      {
        data,
      },
      { withCredentials: true }
    );
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
