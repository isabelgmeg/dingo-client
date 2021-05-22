import React, { useState, useEffect } from 'react';
import { postRegister, postLogin, getShortProfile, getLogout } from '../services/auth';
import { getBiomtrics } from '../services/biometrics'

export const UserContext = React.createContext(null);

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userBiometrics, setBiometrics] = useState(null);

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
      }
    });
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

  return { user, loading, loginUser, registerUser, userBiometrics, logout };
}
