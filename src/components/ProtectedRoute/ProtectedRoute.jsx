import { useContext } from "react";
import { Navigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext";


const ProtectedRoute = ({ children }) => {
  const { teacherUserr, studentUser, isAuthLoaded } = useContext(AuthContext)

  console.log({ teacherUserr, studentUser, isAuthLoaded });

  if (!isAuthLoaded) {
    return <p>Loading...</p>
  }

  if (!teacherUser) {
    return <Navigate to="/teacherlogin" />
  }
  if (!studentrUser) {
    return <Navigate to="/studentlogin" />
  }

  return children;
}
export default ProtectedRoute;