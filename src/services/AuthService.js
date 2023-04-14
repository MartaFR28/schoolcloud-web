import { createHttp } from './BaseService';

const http = createHttp(false);

export const login = ({ teacherID, password }) => http.post('/login', { teacherID, password })