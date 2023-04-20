import { createHttp } from './BaseService';

const http = createHttp(false);

export const login = (teacherID, password) => http.post(`teacher/login`, {teacherID, password});
export const studentLogin = (studentEmail) => http.post(`student/login`, studentEmail);
