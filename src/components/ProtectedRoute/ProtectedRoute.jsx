import { useTeacherContext } from "react"
import { useStudentContext } from "react"
import { Navigate } from "react-router-dom"
import TeacherContext from "../../contexts/AuthContext"
import StudentContext from"../../contexts/StudentContext"

const ProtectedTeacherRoute = ({ children }) => {
  const { currentTeacher, isAuthLoaded } = useTeacherContext(TeacherContext)

  console.log({ currentTeacher, isAuthLoaded });

  if (!isAuthLoaded) {
    return <p>Loading teacher area...</p>
  }

  if (!currentTeacher) {
    return <Navigate to="/login" />
  }

  return children;
}

const ProtectedStudentRoute = ({ children }) => {
  const { currentStudent, isAuthLoaded } = useStudentContext(StudentContext)

  console.log({ currentStudent, isAuthLoaded });

  if (!isAuthLoaded) {
    return <p>Loading studetn area...</p>
  }

  if (!currentStudent) {
    return <Navigate to="/login" />
  }

  return children;
}
export default ProtectedRoute;