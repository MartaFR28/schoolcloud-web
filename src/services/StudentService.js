
import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);

export const createStudent = (data) => {
  const formData = new FormData();
  formData.append("img", data.img);
  formData.append("name", data.name);
  formData.append("lastName", data.lastName);
  formData.append("email", data.email);
  formData.append("age", data.age);
  formData.append("address", data.address);
  formData.append("phone", data.phone);
  
  return authenticatedHttp.post("/students", formData);
};

export const studentList = () => {
  return authenticatedHttp.get('/students');
};

export const getStudentById = (studentId) => {
  return authenticatedHttp.get('/students/studentId');
};

export const studentLogin = (login) => {
  return authenticatedHttp.post('/student/login');
};