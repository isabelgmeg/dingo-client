import axios from "axios"

export async function postBiometrics(body) {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/biometrics/addBiometrics`, body, {
      withCredentials: true,
    });
    return res.data.data;
  }

  export async function getBiomtrics() {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/biometrics/get`, {
      withCredentials: true,
    });
    return res.data.data;
  }