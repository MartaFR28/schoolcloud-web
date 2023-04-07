import { useContext } from "react";
import StudentContext from "../../contexts/StudentContext";

const StudentProfile = () => {
  const { currentStudent } = useContext(StudentContext)
  return (
    <div>
      <h1>Profile of {currentStudent.firstName} {currentStudent.lastName}</h1>
    </div>
  )
}

export default StudentProfile;