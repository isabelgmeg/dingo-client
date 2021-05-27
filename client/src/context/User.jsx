import React, { useState, useEffect } from 'react';
import { postRegister, postLogin, getShortProfile, getLogout } from '../services/auth';
import { getBiomtrics, addNewWeight } from '../services/biometrics'
import { getUserFavs } from '../services/users'

export const UserContext = React.createContext(null);

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userBiometrics, setBiometrics] = useState(null);
  const [userFavs, setUserFavs] = useState(null);


  useEffect(() => {
    getShortProfile()
      .then((id) => {
        if (id) {
          setUser({ id });
          biometricsUser()
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  async function loginUser(email, password) {
    postLogin(email, password).then((user) => {
      if (user) {
        setUser( user );
        getFavsUser()
      }
    });
  }

  async function getFavsUser() {
    getUserFavs().then((favs) => {
      if (favs) {
        setUserFavs(favs)
      }
    });
  }

  async function newWeightUser(data) {
    addNewWeight(data).then((res) => {
      setBiometrics(res)
      })
  }

  async function registerUser(body) {
    postRegister(body).then((user) => {
      if (user) {
        setUser( user );
      }
    });
  }

  async function biometricsUser() {
    getBiomtrics().then((userBiometrics) => {
      if (userBiometrics) {
        setBiometrics( userBiometrics );
      }
    });
  }

  async function logout() {
    getLogout().then(() => setUser(null));
    console.log("bye")
  }

  return { user, loading, loginUser, registerUser, userBiometrics, logout, userFavs, getFavsUser, newWeightUser };
}
