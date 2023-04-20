import { useContext } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "../../Contexts/AuthContext";


const ProtectedRoute = ({ children }) => {
  const { currentUser, isAuthLoaded } = useContext(AuthContext)


  if (!isAuthLoaded) {
    return <p>loading....</p>
  }

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  return children;
}

export default ProtectedRoute;