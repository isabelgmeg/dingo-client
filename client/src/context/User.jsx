import React, { useEffect, useState } from 'react';
import { PostRegister, postLogin, getShortProfile } from '../services/auth';

export const UserContext = React.createContext(null);

export function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [errorRegister, setError] = useState(null);


  useEffect(() => {
    getShortProfile()
      .then((id) => {
        setUser({ id });
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
    PostRegister(body).then((user, error) => {
      if (user) {
        setUser({ user });
        //setError(null)
      }
      if(error){
        //setError({error})
      }
    });
  }

  return { user, loading, loginUser, registerUser };
}
