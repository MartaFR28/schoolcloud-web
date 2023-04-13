import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getTeacher = () => authenticatedHttp.get('/teacher/me');