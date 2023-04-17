import { createHttp } from './BaseService';

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getCurrentTeacher = () => authenticatedHttp.get('/teachers/me')