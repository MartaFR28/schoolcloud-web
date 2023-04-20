/*import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudentById } from '../services/studentService';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentData = await getStudentById(id);
        setStudent(studentData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudent();
  }, [id]);

  return (
    <div>
      {student ? (
        <div>
          <h1>{student.name}</h1>
          <img src={student.img} alt={student.name} />
          <p>{student.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default StudentDetails;
 */