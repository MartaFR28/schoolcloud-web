import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getCurrentStudent = () => authenticatedHttp.get('/student/me');