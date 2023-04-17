import { createHttp } from "./BaseService";

const authHttp = createHttp(true);

export const getNotes = (currentUser, studentUser) => 
    authHttp.get(`/notes/${currentUser}/${studentUser}`);

export const createNotes = (writter, receiver, note) => 
    authHttp.post(`/notes`, { writter, receiver, note });

export const selectUser = (currentUserId) => 
    authHttp.get(`/notes/:getCurrentUser/${currentUserId}`);