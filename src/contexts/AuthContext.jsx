import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getAccessToken, setAccessToken } from "../stores/AccessTokenStore";
import { getCurrentTeacher as getCurrentTeacherService } from "../services/TeacherService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(null); // El usuario en sesión
  const [isAuthLoaded, setIsAuthLoaded] = useState(false); // Para saber si ya tengo usuario o al menos lo he comprobado

  const getCurrentTeacher = useCallback((callback) => {
    getCurrentTeacherService() // llama a /users/me para que con el token, me traiga a mi usuario, se lo enchufe al contexto y toda mi aplicación sepa quien es
      .then(user => {
        setCurrentUser(user)
        setIsAuthLoaded(true)
        callback & callback(); // Para cuando necesite redirigir después de un login
      })
  }, []);

  const login = useCallback((token) => {
    setAccessToken(token); // Guardar token
     const navigateToProfile = () => {
      navigate('/teacherProfile');
    };
  }, [getCurrentTeacher]
  );

  useEffect(() => { // UseEffect se ejecuta al menos una vez después del primer render
    if (getAccessToken()) {
      getCurrentTeacher();
    } else {
      setIsAuthLoaded(true);
    }
  }, [getCurrentTeacher]);

  const value = useMemo(() => {
    return {
      currentUser, // Usuario que está en sesión
      isAuthLoaded, // Si ya intenté saber si hay usuario en sesión
      login,
    }
  }, [currentUser, isAuthLoaded, login]);

  return <AuthContext.Provider value={value}>{children} </AuthContext.Provider>;
};
  



