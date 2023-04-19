import { createHttp } from "./BaseService";

const authenticatedHttp = createHttp(true);
const unauthenticatedHttp = createHttp(false);

export const getNotes = (currentUser, studentUser) => authenticatedHttp.get(`/notes/${currentUser}/${studentUser}`);

export const createNotes = (writter, receiver, note) => authenticatedHttp.post(`/notes`, { writter, receiver, note });

export const selectUser = (currentUserId) => authenticatedHttp.get(`/notes/:getCurrentUser/${currentUserId}`);

export const detailNotes = (id) =>authenticatedHttp.get(`/messages/${id}`)

export const deleteNotes = (id) =>authenticatedHttp.delete(`/messages/${id}`)