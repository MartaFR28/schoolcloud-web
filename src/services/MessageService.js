import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getMessages = (currentUser, studentUser) => authenticatedHttp.get(`/messages/${currentUser}/${studentUser}`);

export const createMessage = (writter, receiver, message) => authenticatedHttp.post(`/messages`, { writter, receiver, message });

export const selectUser = (currentUserId) =>authenticatedHttp.get(`/messages/${currentUserId}`);

export const detailMessages = (id) =>authenticatedHttp.get(`/messages/${id}`)

export const deleteMessages = (id) =>authenticatedHttp.delete(`/messages/${id}`)



