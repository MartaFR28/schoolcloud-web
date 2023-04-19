import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const TeacherProfile = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div>
      <h1>Profile of {currentUser.firstName} {currentUser.lastName} {currentUser.teacherID}</h1>
    </div>
  )
}

export default TeacherProfile;