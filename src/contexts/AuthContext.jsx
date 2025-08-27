'use client';

// ** React Imports
import { createContext, useEffect, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies"; // Importa las funciones necesarias de 'nookies'

// ** Config
import fetchData from "@/utils/fetchData";
import authConfig from "@/config/auth";

// ** Defaults
const defaultProvider = {
  user: null,
  loading: false,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve()
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);

  // ** Hooks
  useEffect(() => {
    const initAuth = async () => {
      const cookies = parseCookies(); // Utiliza nookies para obtener las cookies
      const storedToken = cookies[authConfig.storageTokenKeyName];

      if (storedToken) {
        setLoading(true);
        await fetchData
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken,
            },
          })
          .then(async (response) => {
            console.log({ response });
            if (!response?.data?.active) {
              console.log("User is not active");
              handleLogout();
              return;
            }
            setUser({ ...response.data });
            setLoading(false);
          })
          .catch(() => {
            handleLogout();
            setLoading(false);
            // Handle authentication error
          });
      }
    };
    initAuth();
  }, []);

  const handleLogin = (params, errorCallback) => {
    fetchData
      .post(authConfig.loginEndpoint, params)
      .then(async (response) => {
        //365 days cookie expiration
        setCookie(
          null,
          authConfig.storageTokenKeyName,
          response.data.accessToken,
          {
            maxAge: 60 * 60 * 24 * 365,
            path: "/", // Ajusta la ruta de la cookie según tus necesidades
          }
        );

        setUser({ ...response.data });
        window.location.reload();
      })
      .catch((err) => {
        console.error({ err });
        if (errorCallback) errorCallback(err.response.data.message);
      });
  };

  const handleRegister = (params, errorCallback) => {
    
  }

  const handleLogout = () => {
    setUser(null);
    destroyCookie({}, authConfig.storageTokenKeyName, {
      path: "/",
    });
    window.location.reload();
  };

  const values = {
    user,
    setUser,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    loading,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
