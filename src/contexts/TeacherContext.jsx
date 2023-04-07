import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getAccessToken, setAccessToken } from "../stores/AccessTokenStore";
import { getCurrentTeacher as getCurrentTeacherService } from '../services/TeacherService'
import { useNavigate } from "react-router-dom";

const TeacherContext = createContext()
export default TeacherContext;

export const TeacherProvider = ({ children }) => {
  const navigate = useNavigate()

  const [currentTeacher, setCurrentTeacher] = useState(null); // El usuario en sesión
  const [isAuthLoaded, setIsAuthLoaded] = useState(false); // Para saber si ya tengo usuario o al menos lo he comprobado

  const getCurrentTeacher = useCallback((callback) => {
    getCurrentTeacherService() // llama a /teacher/me para que con el token, me traiga a mi usuario, se lo enchufe al contexto y toda mi aplicación sepa quien es
      .then(user => {
        setCurrentTeacher(teacher)
        setIsAuthLoaded(true)
        callback && callback() //  redirigir despues de un login
      })
  }, [])

  const login = useCallback((token) => {
    const navigateToProfile = () => {
      navigate('/profile')
    }
    // Lo guaaardo
    setAccessToken(token);
    getCurrentTeacher(navigateToProfile)

  }, [getCurrentTeacher])


  useEffect(() => { // UseEffect se ejecuta al menos una vez despues del primer render
    if (getAccessToken()) {
      getCurrentTeacher()
    } else {
      setIsAuthLoaded(true)
    }
  }, [getCurrentTeacher])

  const value = useMemo(() => {
    return {
      currentTeacher, // Usuario que está en sesión
      isAuthLoaded, // Si ya intenté saber si hay usuario en sesión
      login // login
    }
  }, [currentTeacher, isAuthLoaded, login])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}