import { createHttp } from '../services/BaseService'

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getCurrentUser = () => authenticatedHttp.get('/teacher/me');