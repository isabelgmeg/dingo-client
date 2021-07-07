import React, { useState, useEffect } from "react";
import {
  postRegister,
  postLogin,
  getShortProfile,
  getLogout,
} from "../services/auth";
import { getBiomtrics, addNewWeight } from "../services/biometrics";
import {
  getUserFavs,
  removeRecipeToUser,
  addRecipeToUser,
} from "../services/users";

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
          biometricsUser();
          getFavsUser();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function loginUser(email, password) {
    postLogin(email, password).then((user) => {
      if (user) {
        setUser(user);
        getFavsUser();
        biometricsUser()
      }
    });
  }
  async function deleteFav(recipeId) {
    removeRecipeToUser(recipeId).then((user) => {
      if (user) {
        setUser(user);
        getFavsUser()
        console.log(recipeId, "reload delete favs")
      }
    });
  }

  async function addFav(recipeId) {
    addRecipeToUser(recipeId).then((user) => {
        setUser(user);
        getFavsUser()
    });
  }

  async function getFavsUser() {
    getUserFavs().then((favs) => {
      if (favs) {
        setUserFavs(favs);
        console.log("favs reset")
      }
    });
  }

  async function newWeightUser(data) {
    console.log(data)
    addNewWeight(data).then((res) => {
      setBiometrics(res);
      console.log("user data after new weight",userBiometrics)
    });
  }

  async function registerUser(body) {
    postRegister(body).then((user) => {
      if (user) {
        setUser(user);
      }
    });
  }

  async function biometricsUser() {
    getBiomtrics().then((userBiometrics) => {
      if (userBiometrics) {
        setBiometrics(userBiometrics);
        console.log("bios added", userBiometrics)
      }
    });
  }

  async function logout() {
    getLogout().then(() =>{
       setUser(null)
       setBiometrics(null)
       setUserFavs(null)
      });
    console.log("bye");
  }

  return {
    user,
    loading,
    loginUser,
    registerUser,
    userBiometrics,
    logout,
    getFavsUser,
    newWeightUser,
    deleteFav,
    addFav,
    setUserFavs,
    userFavs,
    biometricsUser
  };
}
