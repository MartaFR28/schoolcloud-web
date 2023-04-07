import { useContext } from "react";
import TeacherContext from "../../contexts/TeacherContext";

const TecaherProfile = () => {
  const { currentTeacher } = useContext(TeacherContext)
  return (
    <div>
      <h1>Profile of {currentTeacher.firstName} {currentTeacher.lastName} {currentTeacher.teacherID}</h1>
    </div>
  )
}

export default TeacherProfile;