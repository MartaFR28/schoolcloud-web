import { createHttp } from "./BaseService";

const authHttp = createHttp(true);

export const getMessages = (currentUser, studentUser) => 
    authHttp.get(`/messages/${currentUser}/${studentUser}`);

export const createMessage = (writter, receiver, message) => 
    authHttp.post(`/messages`, { writter, receiver, message });

export const selectUser = (currentUserId) => 
    authHttp.get(`/messages/${currentUserId}`);
