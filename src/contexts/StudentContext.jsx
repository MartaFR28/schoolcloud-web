import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getAccessToken, setAccessToken } from "../stores/AccessTokenStore";
import { getCurrentStudent as getCurrentStudentService } from '../services/StudentService'
import { useNavigate } from "react-router-dom";

const StudentContext = createContext()
export default StudentContext;

export const StudentProvider = ({ children }) => {
  const navigate = useNavigate()

  const [currentStudent, setCurrentStudent] = useState(null); // El usuario en sesión
  const [isAuthLoaded, setIsAuthLoaded] = useState(false); // Para saber si ya tengo usuario o al menos lo he comprobado

  const getCurrentStudent = useCallback((callback) => {
    getCurrentStudentService() // llama a /users/me para que con el token, me traiga a mi usuario, se lo enchufe al contexto y toda mi aplicación sepa quien es
      .then(student => {
        setCurrentStudent(student)
        setIsAuthLoaded(true)
        callback && callback() // Para cuando necesite redirigir despues de un login
      })
  }, [])


  const login = useCallback((token) => {
    const navigateToProfile = () => {
      navigate('/profile')
    }
    // Lo guaaardo
    setAccessToken(token);
    getCurrentStudent(navigateToProfile)

  }, [getCurrentStudent])


  useEffect(() => { // UseEffect se ejecuta al menos una vez despues del primer render
    if (getAccessToken()) {
      getCurrentStudent()
    } else {
      setIsAuthLoaded(true)
    }
  }, [getCurrentStudent])

  const value = useMemo(() => {
    return {
      currentStudent, // Usuario que está en sesión
      isAuthLoaded, // Si ya intenté saber si hay usuario en sesión
      login // login
    }
  }, [currentStudent, isAuthLoaded, login])

  return (
    <StudentContext.Provider value={value}>
      {children}
    </StudentContext.Provider>
  )
}