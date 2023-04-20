import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const createTeacher = () => authenticatedHttp.post('/teachers');

export const getCurrentTeacher = () => authenticatedHttp.get('/teachers/me');

export const teacherList = () => authenticatedHttp.get('/teachers');

export const getTeacherById = (id) => authenticatedHttp.get(`/teachers/${id}`);

export const teacherLogin = (teacherID, password) => authenticatedHttp.post('/teacher/login, ${teacherID,password}');

  
  







