import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const StudentPortal = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div>
      <h1>Profile of {currentUser.firstName} {currentUser.lastName} {currentUser.email}</h1>
    </div>
  )
}

export default StudentPortal;