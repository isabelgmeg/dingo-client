import axios from "axios"
import { BASE_URL } from '../constants/index'

export async function postBiometrics(body) {
    const res = await axios.post(`${BASE_URL}/biometrics/addBiometrics`, body, {
      withCredentials: true,
    });
    return res.data.data;
  }

  export async function getBiomtrics() {
    const res = await axios.get(`${BASE_URL}/biometrics/get`, {
      withCredentials: true,
    });
    return res.data.data;
  }

  export async function addNewWeight(weight) {
    const res = await axios.put(`${BASE_URL}/biometrics/modifyWeight`, weight, {
      withCredentials: true,
    });
    return res.data.data;
  }