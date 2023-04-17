import { createHttp } from './BaseService';

const http = createHttp(false);

export const teacherLogin = (body) => http.post(`/login`, body);
