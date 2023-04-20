
import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unthenticatedHttp = createHttp(false);


export const createStudent = (student) => authenticatedHttp.post("/students", student);

export const studentList = () => authenticatedHttp.get('/students');

export const getStudentById = (studentId) => authenticatedHttp.get(`/students/${studentId}`);

export const studentLogin = (studentEmail) => authenticatedHttp.post(`/student/login`, {studentEmail});

export const CreateNewStudent = (student) => authenticatedHttp.post("/students", student);